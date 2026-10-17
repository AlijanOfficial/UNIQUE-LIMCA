/* Cart: items browser ki localStorage mein save hoti hain,
   aur order WhatsApp message ban kar jata hai. */
const Cart = (function () {
  const KEY = "unique-limca-cart-v1";
  let items = load();

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {}
    document.dispatchEvent(new CustomEvent("cart:change"));
  }
  function add(item) {
    const found = items.find(function (i) { return i.id === item.id; });
    if (found) { found.qty += 1; } else { items.push({ id: item.id, name: item.name, price: item.price, qty: 1 }); }
    save();
  }
  function change(id, delta) {
    const found = items.find(function (i) { return i.id === id; });
    if (!found) return;
    found.qty += delta;
    if (found.qty <= 0) items = items.filter(function (i) { return i.id !== id; });
    save();
  }
  function clear() { items = []; save(); }
  function list() { return items.slice(); }
  function count() { return items.reduce(function (n, i) { return n + i.qty; }, 0); }
  function total() { return items.reduce(function (n, i) { return n + i.qty * i.price; }, 0); }

  function whatsappLink(customerName, customerAddress) {
    let msg = "Assalam o Alaikum! Mujhe order dena hai:\n\n";
    items.forEach(function (i) {
      msg += i.qty + " x " + i.name + " = Rs. " + (i.qty * i.price).toLocaleString("en-US") + "\n";
    });
    msg += "\nTotal: Rs. " + total().toLocaleString("en-US");
    if (customerName) msg += "\nName: " + customerName;
    if (customerAddress) msg += "\nAddress: " + customerAddress;
    return "https://wa.me/" + SITE.phoneIntl + "?text=" + encodeURIComponent(msg);
  }

  return { add: add, change: change, clear: clear, list: list, count: count, total: total, whatsappLink: whatsappLink };
})();
