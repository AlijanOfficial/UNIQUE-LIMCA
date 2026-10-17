/* Home page ka slideshow banner. Slides js/data.js ke BANNER se aati hain. */
(function () {
  const root = document.getElementById("slider");
  if (!root || typeof BANNER === "undefined" || !BANNER.length) return;

  const esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  root.innerHTML =
    BANNER.map(function (s, i) {
      return '<div class="slide' + (i === 0 ? " active" : "") + '" style="--slide-bg:' + s.bg + '" role="group" aria-roledescription="slide" aria-label="' + (i + 1) + " of " + BANNER.length + '">' +
        '<div class="wrap slide-inner">' +
          '<div class="slide-text">' +
            '<p class="slide-title">' + esc(s.title) + "</p>" +
            '<p class="lead">' + esc(s.text) + "</p>" +
            '<div class="hero-actions">' +
              '<a class="btn btn-primary" href="' + esc(s.link) + '">' + esc(s.button) + "</a>" +
              '<a class="btn btn-outline" href="tel:+' + SITE.phoneIntl + '">Call ' + esc(SITE.phoneDisplay) + "</a>" +
            "</div>" +
          "</div>" +
          '<div class="slide-pic"><img data-srcs="' + s.images.join("|") + '" alt="' + esc(s.alt) + '"></div>' +
        "</div></div>";
    }).join("") +
    '<button type="button" class="slider-arrow prev" aria-label="Previous slide">&#8249;</button>' +
    '<button type="button" class="slider-arrow next" aria-label="Next slide">&#8250;</button>' +
    '<div class="dots">' + BANNER.map(function (s, i) {
      return '<button type="button" class="dot' + (i === 0 ? " active" : "") + '" data-dot="' + i + '" aria-label="Go to slide ' + (i + 1) + '"></button>';
    }).join("") + "</div>";

  const slides = root.querySelectorAll(".slide");
  const dots = root.querySelectorAll(".dot");
  let current = 0;
  let timer = null;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function show(n) {
    current = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) { s.classList.toggle("active", i === current); });
    dots.forEach(function (d, i) { d.classList.toggle("active", i === current); });
  }
  function start() { if (!reduce && !timer) timer = setInterval(function () { show(current + 1); }, 5500); }
  function stop() { clearInterval(timer); timer = null; }

  root.addEventListener("click", function (e) {
    if (e.target.closest(".prev")) { show(current - 1); }
    else if (e.target.closest(".next")) { show(current + 1); }
    else if (e.target.closest("[data-dot]")) { show(Number(e.target.closest("[data-dot]").dataset.dot)); }
  });
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);

  let x0 = null;
  root.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; stop(); }, { passive: true });
  root.addEventListener("touchend", function (e) {
    if (x0 !== null) {
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    }
    x0 = null;
    start();
  });

  start();
})();
