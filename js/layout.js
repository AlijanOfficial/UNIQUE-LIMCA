/* Header, footer aur cart drawer har page pe yahin se lagte hain. */
(function () {
  const page = document.body.dataset.page || "";
  const rs = function (n) { return "Rs. " + n.toLocaleString("en-US"); };
  const esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  const links = [
    ["home", "index.html", "Home"],
    ["menu", "menu.html", "Full Menu"],
    ["deals", "deals.html", "Our Deals"],
    ["contact", "contact.html", "Contact"]
  ];

  const nav = links.map(function (l) {
    return '<a href="' + l[1] + '"' + (l[0] === page ? ' aria-current="page"' : "") + ">" + l[2] + "</a>";
  }).join("");

  document.getElementById("site-header").innerHTML =
    '<header class="site-header">' +
      '<a class="brand" href="index.html" aria-label="' + esc(SITE.name) + ' home">' +
        '<img src="images/logo.svg" alt="" width="44" height="44">' +
        '<span class="brand-text">Unique<small>Limca &amp; Milk Soda</small></span>' +
      "</a>" +
      '<nav class="nav" id="nav" aria-label="Main">' + nav + "</nav>" +
      '<div class="header-actions">' +
        '<button class="cart-btn" type="button" data-open-cart aria-label="Open your order">Your order <span class="cart-count" id="cart-count">0</span></button>' +
        '<button class="menu-toggle" type="button" id="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>' +
      "</div>" +
    "</header>";

  document.getElementById("site-footer").innerHTML =
    '<footer class="site-footer">' +
      '<div class="footer-grid">' +
        '<div><p class="footer-brand">Unique Limca &amp; Milk Soda</p><p>' + esc(SITE.tagline) + ". Crispy broast, burgers, fries, fresh juices and milk soda, made to order.</p></div>" +
        '<div><p class="footer-title">Pages</p><ul>' + links.map(function (l) { return '<li><a href="' + l[1] + '">' + l[2] + "</a></li>"; }).join("") + "</ul></div>" +
        '<div><p class="footer-title">Get in touch</p><ul>' +
          '<li><a href="tel:+' + SITE.phoneIntl + '">' + esc(SITE.phoneDisplay) + "</a></li>" +
          '<li><a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + "</a></li>" +
          "<li>" + esc(SITE.address) + "</li>" +
          "<li>" + esc(SITE.hours) + "</li>" +
        "</ul></div>" +
      "</div>" +
      '<p class="copyright">© ' + new Date().getFullYear() + " " + esc(SITE.owner) + ". " + esc(SITE.name) + ". All rights reserved.</p>" +
    "</footer>";

  /* Cart drawer */
  const drawer = document.createElement("div");
  drawer.innerHTML =
    '<div class="drawer-backdrop" id="drawer-backdrop" hidden></div>' +
    '<aside class="drawer" id="drawer" aria-label="Your order" aria-hidden="true">' +
      '<div class="drawer-head"><h2>Your order</h2><button type="button" class="drawer-close" data-close-cart aria-label="Close your order">Close</button></div>' +
      '<ul class="cart-list" id="cart-list"></ul>' +
      '<p class="cart-empty" id="cart-empty">Your order is empty. Add something from the menu.</p>' +
      '<div class="drawer-foot" id="drawer-foot">' +
        '<div class="cart-total"><span>Total</span><strong id="cart-total">Rs. 0</strong></div>' +
        '<label for="cust-name">Your name</label><input id="cust-name" type="text" autocomplete="name">' +
        '<label for="cust-address">Delivery address (or write "pickup")</label><textarea id="cust-address" rows="2" autocomplete="street-address"></textarea>' +
        '<a class="btn btn-whatsapp" id="send-order" href="#" target="_blank" rel="noopener">Send order on WhatsApp</a>' +
        '<button type="button" class="btn-link" id="clear-cart">Clear order</button>' +
      "</div>" +
    "</aside>" +
    '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
  document.body.appendChild(drawer);

  const el = function (id) { return document.getElementById(id); };

  function render() {
    const items = Cart.list();
    el("cart-count").textContent = Cart.count();
    el("cart-list").innerHTML = items.map(function (i) {
      return '<li class="cart-item">' +
        '<div><p class="cart-item-name">' + esc(i.name) + '</p><p class="cart-item-price">' + rs(i.price) + " each</p></div>" +
        '<div class="qty">' +
          '<button type="button" data-qty="-1" data-id="' + esc(i.id) + '" aria-label="Remove one ' + esc(i.name) + '">−</button>' +
          "<span>" + i.qty + "</span>" +
          '<button type="button" data-qty="1" data-id="' + esc(i.id) + '" aria-label="Add one ' + esc(i.name) + '">+</button>' +
        "</div>" +
        '<p class="cart-line">' + rs(i.qty * i.price) + "</p>" +
      "</li>";
    }).join("");
    el("cart-empty").hidden = items.length > 0;
    el("drawer-foot").hidden = items.length === 0;
    el("cart-total").textContent = rs(Cart.total());
    updateLink();
  }

  function updateLink() {
    el("send-order").href = Cart.whatsappLink(el("cust-name").value.trim(), el("cust-address").value.trim());
  }

  function openCart() {
    el("drawer").classList.add("open");
    el("drawer").setAttribute("aria-hidden", "false");
    el("drawer-backdrop").hidden = false;
    document.body.classList.add("no-scroll");
  }
  function closeCart() {
    el("drawer").classList.remove("open");
    el("drawer").setAttribute("aria-hidden", "true");
    el("drawer-backdrop").hidden = true;
    document.body.classList.remove("no-scroll");
  }

  let toastTimer;
  window.showToast = function (text) {
    const t = el("toast");
    t.textContent = text;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1800);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-open-cart]")) { openCart(); return; }
    if (e.target.closest("[data-close-cart]") || e.target.id === "drawer-backdrop") { closeCart(); return; }
    const q = e.target.closest("[data-qty]");
    if (q) { Cart.change(q.dataset.id, Number(q.dataset.qty)); return; }
    if (e.target.id === "clear-cart") { Cart.clear(); return; }
    if (e.target.closest("#menu-toggle")) {
      const open = el("nav").classList.toggle("open");
      el("menu-toggle").setAttribute("aria-expanded", open ? "true" : "false");
    }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeCart(); });
  el("cust-name").addEventListener("input", updateLink);
  el("cust-address").addEventListener("input", updateLink);
  document.addEventListener("cart:change", render);
  render();
})();
