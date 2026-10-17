/* Har page ka apna content yahin se banta hai (data.js se). */
(function () {
  const page = document.body.dataset.page;
  const rs = function (n) { return "Rs. " + n.toLocaleString("en-US"); };
  const esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  const askLink = function (name) {
    return "https://wa.me/" + SITE.phoneIntl + "?text=" + encodeURIComponent("Assalam o Alaikum! " + name + " ki price kya hai?");
  };

  function fillImages() {
    /* data-srcs: pehli photo try hoti hai, na mile to agli (drawing) */
    document.querySelectorAll("img[data-srcs]").forEach(function (img) {
      const list = img.dataset.srcs.split("|");
      let i = 0;
      img.addEventListener("error", function () {
        i += 1;
        if (i < list.length) { img.src = list[i]; } else { img.style.display = "none"; }
      });
      img.src = list[0];
    });
    document.querySelectorAll("img[data-img]").forEach(function (img) {
      const url = IMG[img.dataset.img];
      if (!url) { img.style.display = "none"; return; }
      img.addEventListener("error", function () { img.style.display = "none"; });
      img.src = url;
    });
  }

  function menuRow(m) {
    const thumb = '<img data-srcs="' + m.srcs.join("|") + '" alt="' + esc(m.name) + '" loading="lazy">';
    const price = m.price === null ? '<span class="ask">Ask price</span>' : rs(m.price);
    const action = m.price === null
      ? '<a class="btn btn-ghost" href="' + askLink(m.name) + '" target="_blank" rel="noopener">Ask on WhatsApp</a>'
      : '<button class="btn btn-add" type="button" data-add="' + m.id + '">Add to order</button>';
    return '<li class="menu-row">' +
      '<div class="menu-thumb">' + thumb + "</div>" +
      '<div class="menu-text"><h3>' + esc(m.name) + "</h3><p>" + esc(m.desc) + "</p></div>" +
      '<p class="menu-price">' + price + "</p>" + action + "</li>";
  }

  function dealCard(d) {
    return '<article class="deal">' +
      '<div class="deal-img"><img data-img="' + d.img + '" alt="' + esc(d.title) + ' poster" loading="lazy"><p class="deal-price">' + rs(d.price) + "</p></div>" +
      '<div class="deal-body"><h3>' + esc(d.title) + "</h3><p>" + esc(d.items) + '</p><p class="deal-when">' + esc(d.when) + "</p>" +
      '<button class="btn btn-add" type="button" data-add="' + d.id + '">Order this deal</button></div></article>';
  }

  if (page === "home") {
    const pop = MENU.filter(function (m) { return m.popular && m.price !== null; });
    document.getElementById("popular-list").innerHTML = pop.map(menuRow).join("");
    document.getElementById("deals-preview").innerHTML = DEALS.slice(0, 3).map(dealCard).join("");
  }
  if (page === "menu") {
    const cats = [];
    MENU.forEach(function (m) { if (cats.indexOf(m.cat) === -1) cats.push(m.cat); });
    document.getElementById("menu-jump").innerHTML = cats.map(function (c) {
      return '<a href="#cat-' + c.toLowerCase() + '">' + c + "</a>";
    }).join("");
    document.getElementById("menu-sections").innerHTML = cats.map(function (c) {
      return '<section class="menu-section" id="cat-' + c.toLowerCase() + '"><h2>' + c + '</h2><ul class="menu-list">' +
        MENU.filter(function (m) { return m.cat === c; }).map(menuRow).join("") + "</ul></section>";
    }).join("");
  }
  if (page === "deals") {
    document.getElementById("deals-all").innerHTML = DEALS.map(dealCard).join("");
  }
  if (page === "contact") {
    document.querySelectorAll("[data-site]").forEach(function (n) {
      const key = n.dataset.site;
      if (key === "phone") { n.textContent = SITE.phoneDisplay; n.href = "tel:+" + SITE.phoneIntl; }
      if (key === "whatsapp") { n.href = "https://wa.me/" + SITE.phoneIntl; }
      if (key === "email") { n.textContent = SITE.email; n.href = "mailto:" + SITE.email; }
      if (key === "address") { n.textContent = SITE.address; }
      if (key === "hours") { n.textContent = SITE.hours; }
      if (key === "map") { n.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SITE.address); }
    });
  }

  const everything = MENU.concat(DEALS.map(function (d) { return { id: d.id, name: d.title, price: d.price }; }));
  document.addEventListener("click", function (e) {
    const b = e.target.closest("[data-add]");
    if (!b) return;
    const item = everything.find(function (x) { return x.id === b.dataset.add; });
    if (!item || item.price === null) return;
    Cart.add(item);
    window.showToast("Added: " + item.name);
  });

  fillImages();
})();
