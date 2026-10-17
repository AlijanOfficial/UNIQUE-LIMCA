/* ==========================================================
   SITE DATA - saari website ka content yahin se aata hai.
   Price, naam, number ya photo badalni ho to sirf is file
   mein badlo, baaki kisi file ko haath lagane ki zarurat nahi.
   ========================================================== */

const SITE = {
  name: "Unique Limca & Milk Soda",
  tagline: "Taste Jo Unique Hai",
  owner: "Bilal & Team",
  phoneDisplay: "0315 3507853",
  phoneIntl: "923153507853",          // WhatsApp ke liye: 92 + number (bina 0 aur bina +)
  email: "bilal.qureshi.1122@gmail.com",
  address: "Near Nadra Office, 100 Feet Road, Sukkur",
  hours: "Open daily, 11am to 2:15am"
};

/* Photos. Abhi Landingsite ke links hain. Apni photos use karni hon to
   images/ folder mein daalo aur yahan likho: "images/broast.jpg" */
const BASE = "https://unique-limca-milk-soda-and-fast-food.share.landingsite.dev/assets/uploads/c8c8d0f7-45c5-466c-841c-3a1a235c341b/";
const IMG = {
  broast: BASE + "1fc7c187-c72b-4542-ae89-ba2152963096.jpg?w=1200",
  burger: BASE + "6dd52f98-bf99-4b23-8cdc-0373ff0ffb1e.jpg?w=1200",
  fries:  BASE + "f779638e-2466-403c-9f0a-9a8de21cb138.jpg?w=1200",
  limca:  BASE + "f657071c-a705-4bdb-a03d-c54554e971c8.jpg?w=1200",
  poster: BASE + "94b77039-d461-4d2a-9ba3-c65a0fc4dd16.jpg?w=1200",
  family: BASE + "bdbce588-c7fc-4794-b9be-8905fc231681.jpg?w=1200"
};

/* Menu. price: null likha ho to "Ask price" dikhega aur customer
   WhatsApp pe poochega. Price pata ho to number likh do (jaise 250).
   popular: true wali items home page pe "Popular" mein aati hain. */
const MENU = [
  { id: "chest-big-broast", cat: "Broast", name: "Chest Big Broast", desc: "Crispy, juicy half-chest broast fried golden.", price: 450, popular: true },
  { id: "broast-leg-piece", cat: "Broast", name: "Broast Leg Piece", desc: "Single leg piece, crispy outside and juicy inside.", price: null },

  { id: "zinger-burger", cat: "Burgers", name: "Zinger Burger", desc: "Crispy zinger fillet with lettuce and signature sauce.", price: 350, popular: true },
  { id: "zinger-cheez-burger", cat: "Burgers", name: "Zinger Cheez Burger", desc: "Zinger fillet with melted cheese and crunchy lettuce.", price: 500, popular: true },
  { id: "crispy-chicken-burger", cat: "Burgers", name: "Crispy Chicken Burger", desc: "Crispy chicken patty, fresh lettuce and sauce.", price: null },

  { id: "fries", cat: "Sides", name: "Fries", desc: "Crispy golden fries, salted and served hot.", price: 200, popular: true },

  { id: "unique-limca", cat: "Drinks", name: "Unique Limca", desc: "Our signature sparkling lemon-lime soda, served chilled.", price: 150, popular: true },
  { id: "milk-soda", cat: "Drinks", name: "Milk Soda", desc: "Creamy, fizzy milk soda, served ice cold.", price: null },
  { id: "fresh-juice", cat: "Drinks", name: "Fresh Juice", desc: "Fresh fruit juice, made when you order.", price: null },

  { id: "falooda", cat: "Desserts", name: "Falooda", desc: "Layered rose falooda with vermicelli and ice cream.", price: 400, popular: true },
  { id: "ice-cream", cat: "Desserts", name: "Ice Cream", desc: "Cold, creamy ice cream.", price: null }
];

/* Har menu item ki photo yahan se aati hai:
     images/<folder>/<item-id>.jpg   <- tumhari apni photo (agar daali ho)
     images/<folder>/<item-id>.svg   <- warna ye drawing dikhti hai
   Apni photo lagane ke liye bas wahi naam rakh ke .jpg file us folder mein daal do. */
const FOLDER = { Broast: "broast", Burgers: "burgers", Sides: "sides", Drinks: "drinks", Desserts: "desserts" };
MENU.forEach(function (m) {
  const base = "images/" + FOLDER[m.cat] + "/" + m.id;
  m.srcs = [base + ".jpg", base + ".svg"];
});

/* Home page ka slideshow banner. Photo lagani ho to images/banner/ mein
   slide-1.jpg, slide-2.jpg, slide-3.jpg, slide-4.jpg daal do. Aur slide chahiye
   to neeche ek block copy karke add kar do. */
const BANNER = [
  { title: "Taste Jo Unique Hai", text: "Crispy broast, juicy burgers, cold Limca and creamy milk soda, all in one place.", button: "See the full menu", link: "menu.html", bg: "#0e3b2c", alt: "Crispy fried broast", images: ["images/banner/slide-1.jpg", "images/banner/slide-1.svg"] },
  { title: "Zinger burgers, made to order", text: "Crispy zinger fillet, melted cheese and our signature sauce.", button: "Order a burger", link: "menu.html#cat-burgers", bg: "#7a2314", alt: "Zinger cheese burger", images: ["images/banner/slide-2.jpg", "images/banner/slide-2.svg"] },
  { title: "Ice-cold Limca and milk soda", text: "Served chilled, with fries on the side.", button: "See the drinks", link: "menu.html#cat-drinks", bg: "#16513c", alt: "Chilled Limca soda", images: ["images/banner/slide-3.jpg", "images/banner/slide-3.svg"] },
  { title: "Falooda and ice cream", text: "Finish with something sweet.", button: "See the desserts", link: "menu.html#cat-desserts", bg: "#5a1d3a", alt: "Falooda with ice cream", images: ["images/banner/slide-4.jpg", "images/banner/slide-4.svg"] }
];

/* Deals. Naam (title) apni marzi se badal sakte ho. */
const DEALS = [
  { id: "deal-monday-leg", title: "Monday Leg Deal", price: 1100, items: "3 Quarter Leg Broast with Fries + 3 Limca Soda", when: "Available Monday morning", img: "poster" },
  { id: "deal-monday-student", title: "Monday Student Deal", price: 550, items: "2 Crispy Chicken Burger + 2 Limca Soda", when: "Monday, 11am to 2:15am", img: "poster" },
  { id: "deal-monday-zinger", title: "Monday Zinger Deal", price: 500, items: "1 Zinger Burger + 1 Broast Leg Piece with Fries + 1 Limca Soda", when: "Available Monday morning", img: "burger" },
  { id: "deal-monday-drumstick", title: "Monday Drumstick Deal", price: 200, items: "1 Drum Stick with Fries", when: "Available Monday morning", img: "fries" },
  { id: "deal-monday-combo", title: "Monday Combo Deal", price: 1050, items: "2 Quarter Broast Leg with Fries + 1 Zinger Burger + 2 Limca Soda", when: "Available Monday morning", img: "limca" },
  { id: "deal-family-feast", title: "Family Feast Deal", price: 2100, items: "2 Quarter Broast Chest + 2 Quarter Broast Leg + 1 Zinger Burger + 1 Chicken Burger + 3 Limca Soda", when: "Every day", img: "family" }
];
