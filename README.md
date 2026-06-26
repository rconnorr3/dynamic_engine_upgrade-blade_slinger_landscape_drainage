# Blade Slinger Landscaping Storefront  
### Capstone Phase II — Dynamic Engine Upgrade

## Overview  
This project transforms a static landscaping website into a fully interactive, JavaScript‑powered storefront.  
The site uses HTML for structure, CSS for styling, and JavaScript for all dynamic behavior, including rendering product cards, filtering services, managing a cart, and handling form submissions.

The goal of this project was to follow the Capstone Phase II rubric by building a **data‑driven application interface** instead of a static mockup.

---

## Features

### Dynamic Product Rendering  
- All product cards are generated entirely through JavaScript.  
- The HTML catalog pages contain empty containers that JavaScript fills on page load.  
- Uses `createElement()` and `.textContent` for safe DOM construction.

### Data Architecture  
- Two complete catalogs stored as arrays of objects:  
  - Drainage Services  
  - Landscape Services  
- Each object includes:  
  - id  
  - name  
  - category  
  - price  
  - image  
  - description  
  - inStock  

### Interactive Filtering  
- Category filter buttons trigger JavaScript `.filter()` logic.  
- The product grid updates instantly without reloading the page.

### Add‑to‑Cart System  
- Users can add services to a cart from either catalog page.  
- Cart contents are displayed dynamically in the sidebar.  
- Cart persists across page navigation and refreshes.

### LocalStorage Persistence  
- Cart data is saved using `localStorage.setItem()` and loaded using `JSON.parse()`.  
- Ensures the cart remains intact even after refreshing or switching pages.

### Contact Page Integration  
- Selected services and total cost are loaded from localStorage.  
- Form validation uses `.checkValidity()`.  
- Submitting the form triggers a confirmation popup with a generated confirmation number.

### Responsive UI Components  
- Popup modal with fade‑in animation.  
- Flexbox and Grid layouts for clean, responsive structure.  
- Large, accessible buttons for mobile usability.

---

## File Structure

```
project-folder/
│
├── index.html
├── catalog.html
├── catalog2.html
├── contact.html
│
├── styles.css
├── app.js
│
└── assets/
    └── images/
```

---

## How It Works

### 1. HTML  
- Provides the structural layout only.  
- Catalog pages intentionally contain **empty product grids**.  
- No inline JavaScript is used anywhere.

### 2. CSS  
- Handles layout, spacing, colors, and responsive design.  
- Defines the look of product cards, navigation, forms, and the popup modal.

### 3. JavaScript  
- Detects which page is loaded.  
- Renders the correct catalog dynamically.  
- Handles filtering, cart updates, form submission, and modal behavior.  
- Saves and loads cart data using localStorage.

---

## Rubric Compliance Summary

### Script Rule  
- All JavaScript is stored in `app.js`.  
- No inline event handlers (no `onclick=""`).

### Render Loop  
- Product grids are empty in HTML.  
- JavaScript builds all product cards using loops and DOM creation.

### Data Architecture  
- Catalog data stored in arrays of objects.  
- No hardcoded product markup in HTML.

### Event Handling  
- All interactions use `addEventListener()`.  
- Includes filtering, add‑to‑cart, form submission, and popup controls.

### State Persistence  
- Cart data saved and restored using localStorage.  
- Cart remains intact across pages and refreshes.

### Responsive Interactions  
- Popup modal, flexible layout, and mobile‑friendly components.

---

## Future Improvements  
- Add backend support for real appointment submissions.  
- Add user accounts and authentication.  
- Add real‑time pricing or discount logic.  
- Add admin panel for managing services.

