/* ---------------------------------------------------
   1. DRAINAGE CATALOG (EXISTING)
--------------------------------------------------- */

const drainageCatalog = [
  {
    id: "svc-01",
    category: "Subsurface & Surface Drainage",
    name: "French Drains",
    price: 4250,
    image: "assets/images/french-drain.jpg",
    description: "Subsurface trench systems that redirect groundwater and prevent flooding.",
    inStock: true
  },
  {
    id: "svc-02",
    category: "Subsurface & Surface Drainage",
    name: "Catch Basins",
    price: 775,
    image: "assets/images/catch-basin.jpg",
    description: "Surface-level collection boxes that capture runoff and route it underground.",
    inStock: true
  },
  {
    id: "svc-03",
    category: "Subsurface & Surface Drainage",
    name: "Yard Drains",
    price: 650,
    image: "assets/images/yard-drain.jpg",
    description: "Drain inlets that remove standing water from low-lying areas.",
    inStock: true
  },
  {
    id: "svc-04",
    category: "Subsurface & Surface Drainage",
    name: "Channel Drains",
    price: 650,
    image: "assets/images/channel-drain.jpg",
    description: "Linear trench drains ideal for driveways and patios.",
    inStock: true
  },
  {
    id: "svc-05",
    category: "Subsurface & Surface Drainage",
    name: "Dry Wells",
    price: 1700,
    image: "assets/images/dry-well.jpg",
    description: "Underground systems that disperse excess water deep into the soil.",
    inStock: true
  },
  {
    id: "svc-06",
    category: "Grading & Structural Management",
    name: "Yard Grading",
    price: 2500,
    image: "assets/images/yard-grading.jpg",
    description: "Reshaping soil elevations to ensure proper slope and drainage flow.",
    inStock: true
  },
  {
    id: "svc-07",
    category: "Grading & Structural Management",
    name: "Berms & Swales",
    price: 1900,
    image: "assets/images/berm.jpg",
    description: "Earth-shaped mounds and channels that redirect water naturally.",
    inStock: true
  },
  {
    id: "svc-08",
    category: "Grading & Structural Management",
    name: "Downspout Routing",
    price: 375,
    image: "assets/images/downspout-routing.jpg",
    description: "Redirecting roof runoff safely away from structures.",
    inStock: true
  },
  {
    id: "svc-09",
    category: "Grading & Structural Management",
    name: "Retaining Walls",
    price: 7250,
    image: "assets/images/retaining-wall.jpg",
    description: "Structural walls that stabilize slopes and prevent erosion.",
    inStock: true
  },
  {
    id: "svc-10",
    category: "Erosion Control & Landscape Features",
    name: "Rain Gardens",
    price: 2850,
    image: "assets/images/rain-garden.jpg",
    description: "Native plant basins designed to absorb runoff naturally.",
    inStock: true
  },
  {
    id: "svc-11",
    category: "Erosion Control & Landscape Features",
    name: "Dry River Beds",
    price: 3750,
    image: "assets/images/dry-river-bed.jpg",
    description: "Decorative stone channels that guide water flow.",
    inStock: true
  },
  {
    id: "svc-12",
    category: "Erosion Control & Landscape Features",
    name: "Terracing",
    price: 9000,
    image: "assets/images/terracing.jpg",
    description: "Tiered landscape steps that control slope erosion.",
    inStock: true
  },
  {
    id: "svc-13",
    category: "System Maintenance & Diagnostic Tools",
    name: "Camera Inspections",
    price: 250,
    image: "assets/images/camera-inspections.jpg",
    description: "High-resolution pipe camera scans to locate blockages.",
    inStock: true
  },
  {
    id: "svc-14",
    category: "System Maintenance & Diagnostic Tools",
    name: "Hydro Jetting",
    price: 600,
    image: "assets/images/hydro-jetting.jpg",
    description: "High-pressure water jet cleaning that clears roots and debris.",
    inStock: true
  },
  {
    id: "svc-15",
    category: "System Maintenance & Diagnostic Tools",
    name: "Sump Pump Installations",
    price: 1700,
    image: "assets/images/sump-pump.jpg",
    description: "Pump systems that automatically remove rising groundwater.",
    inStock: true
  }
];

/* ---------------------------------------------------
   2. LANDSCAPE CATALOG (NEW)
--------------------------------------------------- */

const landscapeCatalog = [
  {
    id: "land-01",
    category: "Lawn & Turf Care",
    name: "Lawn Maintenance",
    price: 100,
    image: "assets/images/lawn-maintenance.jpg",
    description: "Residential & commercial mowing, edging, trimming, and blowing to keep turf sharp, clean, and professionally maintained.",
    inStock: true
  },
  {
    id: "land-02",
    category: "Planting & Garden Design",
    name: "Precision Tree & Shrub Pruning",
    price: 450,
    image: "assets/images/tree-shrub-pruning.jpg",
    description: "Expert pruning to shape trees and shrubs, improve plant health, and maintain clean property lines.",
    inStock: true
  },
  {
    id: "land-03",
    category: "Planting & Garden Design",
    name: "Planting (Annuals, Perennials, Shrubs, Small Trees)",
    price: 500,
    image: "assets/images/planting.jpg",
    description: "Installation of seasonal flowers, shrubs, and small trees designed to enhance curb appeal and landscape structure.",
    inStock: true
  },
  {
    id: "land-04",
    category: "Beds, Rock & Stone",
    name: "Flower Bed Installation, Preparation, & Maintenance",
    price: 1500,
    image: "assets/images/flower-beds.jpg",
    description: "Bed layout, soil prep, mulching, and maintenance to keep flower beds vibrant, healthy, and weed-free.",
    inStock: true
  },
  {
    id: "land-05",
    category: "Planting & Garden Design",
    name: "Shrub, Hedge, & Plant Care",
    price: 150,
    image: "assets/images/shrub-care.jpg",
    description: "Routine trimming, shaping, and health management for shrubs, hedges, and ornamental plants.",
    inStock: true
  },
  {
    id: "land-06",
    category: "Planting & Garden Design",
    name: "Garden Planning & Design",
    price: 500,
    image: "assets/images/garden-design.jpg",
    description: "Custom garden layouts balancing color, texture, and seasonal interest for long-term beauty.",
    inStock: true
  },
  {
    id: "land-07",
    category: "Planting & Garden Design",
    name: "Seasonal Color Installation",
    price: 1000,
    image: "assets/images/seasonal-color.jpg",
    description: "Installation of seasonal annuals and accent plants to refresh beds and entryways year-round.",
    inStock: true
  },
  {
    id: "land-08",
    category: "Soil & Fertility",
    name: "Soil Health & Fertilization for Garden Beds",
    price: 125,
    image: "assets/images/soil-fertilization.jpg",
    description: "Soil conditioning and targeted fertilization to promote strong root systems and healthy plant growth.",
    inStock: true
  },
  {
    id: "land-09",
    category: "Soil & Fertility",
    name: "Topsoil, Sand & Gravel Installation",
    price: 750,
    image: "assets/images/topsoil-sand-gravel.jpg",
    description: "Leveling, backfilling, and surface preparation using topsoil, sand, and gravel for clean, stable finishes.",
    inStock: true
  },
  {
    id: "land-10",
    category: "Lawn & Turf Care",
    name: "Sod Installation",
    price: 3200,
    image: "assets/images/sod-installation.jpg",
    description: "Professional sod installation with proper grading, soil prep, and watering guidance for instant lawns.",
    inStock: true
  },
  {
    id: "land-11",
    category: "Beds, Rock & Stone",
    name: "Rock & Stone Bed Installation",
    price: 2700,
    image: "assets/images/rock-stone-bed.jpg",
    description: "Decorative rock and stone bed installations that reduce maintenance and enhance landscape features.",
    inStock: true
  }
];

/* ---------------------------------------------------
   3. DOM REFERENCES
--------------------------------------------------- */

const productGrid = document.getElementById("product-grid");
const cartList = document.getElementById("cart-list");
const selectedServicesList = document.getElementById("selected-services");
const filterButtons = document.querySelectorAll(".filter-button");

/* ---------------------------------------------------
   4. CART STATE
--------------------------------------------------- */

let cart = JSON.parse(localStorage.getItem("bladeSlingerCart")) || [];

/* ---------------------------------------------------
   5. PAGE DETECTION
--------------------------------------------------- */

const path = window.location.pathname;
const isDrainagePage = path.includes("catalog.html");
const isLandscapePage = path.includes("catalog2.html");

/* ---------------------------------------------------
   6. RENDER GRID
--------------------------------------------------- */

function renderGrid(items) {
  if (!productGrid) return;

  productGrid.textContent = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("service-card");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    const title = document.createElement("h3");
    title.textContent = item.name;

    const desc = document.createElement("p");
    desc.textContent = item.description;

    const price = document.createElement("p");
    price.textContent = `Average Price: $${item.price.toLocaleString()}`;
    price.classList.add("price-tag");

    const categoryTag = document.createElement("span");
    categoryTag.classList.add("category-tag");
    categoryTag.textContent = item.category;

    const button = document.createElement("button");
    button.textContent = "Add to Service List";
    button.addEventListener("click", () => addToCart(item.id));

    card.append(img, title, desc, price, categoryTag, button);
    productGrid.appendChild(card);
  });
}

/* ---------------------------------------------------
   7. RENDER CART
--------------------------------------------------- */

function renderCart() {
  if (!cartList) return;

  cartList.textContent = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.category})`;
    cartList.appendChild(li);
  });
}

/* ---------------------------------------------------
   8. ADD TO CART
--------------------------------------------------- */

function addToCart(id) {
  const allItems = [...drainageCatalog, ...landscapeCatalog];
  const service = allItems.find(item => item.id === id);
  if (!service) return;

  cart.push(service);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("bladeSlingerCart", JSON.stringify(cart));
}

/* ---------------------------------------------------
   9. FILTERING
--------------------------------------------------- */

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    let sourceCatalog = drainageCatalog;
    if (isLandscapePage) sourceCatalog = landscapeCatalog;

    if (category === "All") {
      renderGrid(sourceCatalog);
    } else {
      const filtered = sourceCatalog.filter(item => item.category === category);
      renderGrid(filtered);
    }
  });
});

/* ---------------------------------------------------
   SUBMIT SELECTED SERVICES → GO TO CONTACT PAGE
--------------------------------------------------- */

const submitServicesButton = document.getElementById("submit-services");

if (submitServicesButton) {
  submitServicesButton.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
}

/* ---------------------------------------------------
   10. SUBMIT SERVICES → CONTACT PAGE
--------------------------------------------------- */

const submitApptButton = document.getElementById("submit-appt");

if (submitApptButton) {
  submitApptButton.addEventListener("click", () => {

    const form = document.getElementById("contact-form");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const confirmationNumber = "BS-" + Math.floor(100000 + Math.random() * 900000);

    const message = `
      Your request has been successfully submitted and is now being processed.<br><br>
      A Sales Associate will contact you within 24–48 hours with your onsite visit details.<br><br>

      <strong>Confirmation Number: ${confirmationNumber}</strong><br><br>

      For questions, email customerservice@bladeslinger.org 
      or call <strong>1-800-GOBLADE</strong>.<br><br>

      Thank you for choosing Blade Slinger Landscaping & Drainage Solutions!<br><br>
    `;

    const popup = document.getElementById("confirmation-popup");
    const text = document.getElementById("confirmation-text");
    text.innerHTML = message;

    popup.classList.remove("hidden");

    document.getElementById("close-popup").addEventListener("click", () => {
      popup.classList.add("hidden");
    });
  });
}


/* ---------------------------------------------------
   DELETE ALL SERVICES
--------------------------------------------------- */

const deleteButton = document.getElementById("delete-services");

if (deleteButton) {
  deleteButton.addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
  });
}

/* ---------------------------------------------------
   11. CONTACT PAGE: SHOW SELECTED SERVICES
--------------------------------------------------- */

function renderSelectedServices() {
  if (!selectedServicesList) return;

  const savedCart = JSON.parse(localStorage.getItem("bladeSlingerCart")) || [];

  selectedServicesList.textContent = "";

  savedCart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.category}) - $${item.price.toLocaleString()}`;
    selectedServicesList.appendChild(li);
  });
}

function renderTotal() {
  const savedCart = JSON.parse(localStorage.getItem("bladeSlingerCart")) || [];
  const total = savedCart.reduce((sum, item) => sum + (item.price || 0), 0);

  const totalCostElement = document.getElementById("total-cost");
  if (totalCostElement) {
    totalCostElement.textContent = `$${total.toLocaleString()}`;
  }
}

if (selectedServicesList) {
  renderSelectedServices();
  renderTotal();
}

/* ---------------------------------------------------
   12. INITIAL LOAD
--------------------------------------------------- */

if (isDrainagePage) {
  renderGrid(drainageCatalog);
} else if (isLandscapePage) {
  renderGrid(landscapeCatalog);
}

renderCart();
