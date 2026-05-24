# Web1 — Multi‑Page Front‑End Demo

A small, static multi-page website demonstrating basic front-end patterns: navigation, layout, and simple JavaScript utilities (QR code and password generators).

**Live demo:** https://midhunmanesh01-code.github.io/webpage1/

**Quick preview:** Open [index.html](index.html) in a browser to start at the login page.

---

**What this project shows**
- **Multi-page structure:** separate HTML pages for Home, About, Contact, QR code, and Password generator.
- **Responsive-first CSS:** modular styles under the `css/` folder.
- **Small JS utilities:** generators implemented in `js/` (UI + basic logic).

---

**Files of interest**
- **Home / entry:** [index.html](index.html)
- **Pages:** [html/home.html](html/home.html), [html/about.html](html/about.html), [html/contact.html](html/contact.html)
- **Generators:** [html/qrcode.html](html/qrcode.html), [html/password.html](html/password.html)
- **Styles:** [css/home.css](css/home.css), [css/about.css](css/about.css), [css/contact.css](css/contact.css), [css/qrcode.css](css/qrcode.css), [css/password.css](css/password.css)
- **Scripts:** [js/qrcode.js](js/qrcode.js), [js/password.js](js/password.js)

---

**Local preview / development**
- Open the site directly: double-click `index.html` or open it from your browser.
- Or serve with a lightweight HTTP server (recommended for relative paths):

```bash
# From project root
python -m http.server 8000
# then open http://localhost:8000/
```

**Edit → Test**
- Modify HTML under `html/` or styles under `css/`, then refresh the browser.
- JavaScript lives in `js/`; changes load on refresh.

---

**Project structure**

```
Web1/
├─ index.html
├─ README.md
├─ requirement.txt
├─ style.css
├─ css/
│  ├─ about.css
│  ├─ contact.css
│  ├─ home.css
│  ├─ password.css
│  └─ qrcode.css
├─ html/
│  ├─ about.html
│  ├─ contact.html
│  ├─ home.html
│  ├─ password.html
│  └─ qrcode.html
└─ js/
   ├─ password.js
   └─ qrcode.js
```

---

**Contributing / Next steps**
- Add form validation and accessibility improvements.
- Make the QR generator produce downloadable images (client-side).
- Improve password options (length, character sets) and copy-to-clipboard UX.
- Add automated linting / formatting for CSS/JS.

---

**Author**: Midhun Manesh

---

**Contact**

- **College:** College of Engineering, Chengannur
- **Email:** midhunmanesh01@gmail.com
- **Phone:** 8590392681


