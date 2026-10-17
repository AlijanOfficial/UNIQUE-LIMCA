# Unique Limca & Milk Soda - Website

Static website (sirf HTML, CSS, JavaScript). Kisi build ya install ki zarurat nahi.

## Folder structure

    unique-limca/
    ├── index.html        Home page
    ├── menu.html         Full menu
    ├── deals.html        Deals
    ├── contact.html      Contact page
    ├── 404.html          Page not found
    ├── vercel.json       Vercel settings
    ├── robots.txt        Search engines ke liye
    ├── .gitignore        Git ke liye
    ├── css/
    │   └── style.css     Poora design
    ├── js/
    │   ├── data.js       MENU, DEALS, phone, address (yahin se sab badlo)
    │   ├── cart.js       Order cart + WhatsApp message
    │   ├── layout.js     Header, footer, cart drawer
    │   └── pages.js      Har page ka content
    └── images/
        ├── logo.svg
        ├── favicon.svg
        └── README.md

## Content kaise badlein

Sab kuch `js/data.js` mein hai: prices, naam, phone number, address, photos.
`price: null` ka matlab "Ask price" dikhega.

## GitHub par upload

1. github.com par New repository banao (naam: `unique-limca`, Public).
2. "uploading an existing file" par click karo.
3. Is folder ke **andar ki saari files aur folders** drag-drop karo (index.html wahi upar dikhna chahiye).
4. Commit changes dabao.

## Vercel par publish (free)

1. vercel.com par GitHub se login karo.
2. Add New > Project > apni `unique-limca` repository ke saamne Import.
3. Framework Preset: **Other**. Build Command aur Output Directory khali chhod do.
4. Deploy dabao. 1 minute mein link mil jayega.
