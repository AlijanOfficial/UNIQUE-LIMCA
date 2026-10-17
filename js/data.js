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
  { id: "chest-big-broast", cat: "Broast", name: "Chest Big Broast", desc: "Crispy, juicy half-chest broast fried golden.", price: 450, img: "broast", popular: true },
  { id: "broast-leg-piece", cat: "Broast", name: "Broast Leg Piece", desc: "Single leg piece, crispy outside and juicy inside.", price: null, img: "broast" },

  { id: "zinger-burger", cat: "Burgers", name: "Zinger Burger", desc: "Crispy zinger fillet with lettuce and signature sauce.", price: 350, img: "burger", popular: true },
  { id: "zinger-cheez-burger", cat: "Burgers", name: "Zinger Cheez Burger", desc: "Zinger fillet with melted cheese and crunchy lettuce.", price: 500, img: "burger", popular: true },
  { id: "crispy-chicken-burger", cat: "Burgers", name: "Crispy Chicken Burger", desc: "Crispy chicken patty, fresh lettuce and sauce.", price: null, img: "burger" },

  { id: "fries", cat: "Sides", name: "Fries", desc: "Crispy golden fries, salted and served hot.", price: 200, img: "fries", popular: true },

  { id: "unique-limca", cat: "Drinks", name: "Unique Limca", desc: "Our signature sparkling lemon-lime soda, served chilled.", price: 150, img: "limca", popular: true },
  { id: "milk-soda", cat: "Drinks", name: "Milk Soda", desc: "Creamy, fizzy milk soda, served ice cold.", price: null, img: "limca" },
  { id: "fresh-juice", cat: "Drinks", name: "Fresh Juice", desc: "Fresh fruit juice, made when you order.", price: null, img: null },

  { id: "falooda", cat: "Desserts", name: "Falooda", desc: "Layered rose falooda with vermicelli and ice cream.", price: 400, img: null, popular: true },
  { id: "ice-cream", cat: "Desserts", name: "Ice Cream", desc: "Cold, creamy ice cream.", price: null, img: null }
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
