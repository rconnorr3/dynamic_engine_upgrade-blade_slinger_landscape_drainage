/* -----------------------------------
   1. DATA LAYER (WITH IMAGES)
----------------------------------- */
const storeCatalog = [
  {
    id: "svc-01",
    category: "Subsurface & Surface Drainage",
    name: "French Drains",
    image: "assets/images/french-drain.jpg",
    description: "Subsurface trench systems that redirect groundwater and prevent flooding.",
    inStock: true
  },
  {
    id: "svc-02",
    category: "Subsurface & Surface Drainage",
    name: "Catch Basins",
    image: "assets/images/catch-basin.jpg",
    description: "Surface-level collection boxes that capture runoff and route it underground.",
    inStock: true
  },
  {
    id: "svc-03",
    category: "Subsurface & Surface Drainage",
    name: "Yard Drains",
    image: "assets/images/yard-drain.jpg",
    description: "Drain inlets that remove standing water from low-lying areas.",
    inStock: true
  },
  {
    id: "svc-04",
    category: "Subsurface & Surface Drainage",
    name: "Channel Drains",
    image: "assets/images/channel-drain.jpg",
    description: "Linear trench drains ideal for driveways, patios, and high-flow runoff.",
    inStock: true
  },
  {
    id: "svc-05",
    category: "Subsurface & Surface Drainage",
    name: "Dry Wells",
    image: "assets/images/dry-well.jpg",
    description: "Underground systems that disperse excess water deep into the soil.",
    inStock: true
  },

  {
    id: "svc-06",
    category: "Grading & Structural Management",
    name: "Yard Grading & Re-grading",
    image: "assets/images/yard-grading.jpg",
    description: "Reshaping soil elevations to ensure proper slope and drainage flow.",
    inStock: true
  },
  {
    id: "svc-07",
    category: "Grading & Structural Management",
    name: "Berms & Swales",
    image: "assets/images/berm.jpg",
    description: "Earth-shaped mounds and channels that redirect water naturally.",
    inStock: true
  },
  {
    id: "svc-08",
    category: "Grading & Structural Management",
    name: "Downspout Routing & Extensions",
    image: "assets/images/downspout-routing.jpg",
    description: "Redirecting roof runoff safely away from structures.",
    inStock: true
  },
  {
    id: "svc-09",
    category: "Grading & Structural Management",
    name: "Retaining Walls",
    image: "assets/images/retaining-wall.jpg",
    description: "Structural walls that stabilize slopes and prevent erosion.",
    inStock: true
  },

  {
    id: "svc-10",
    category: "Erosion Control & Landscape Features",
    name: "Rain Gardens",
    image: "assets/images/rain-garden.jpg",
    description: "Native plant basins designed to absorb runoff naturally.",
    inStock: true
  },
  {
    id: "svc-11",
    category: "Erosion Control & Landscape Features",
    name: "Dry River Beds",
    image: "assets/images/dry-river-bed.jpg",
    description: "Decorative stone channels that guide water flow and reduce erosion.",
    inStock: true
  },
  {
    id: "svc-12",
    category: "Erosion Control & Landscape Features",
    name: "Terracing",
    image: "assets/images/terracing.jpg",
    description: "Tiered landscape steps that control slope erosion.",
    inStock: true
  },

  {
    id: "svc-13",
    category: "System Maintenance & Diagnostic Tools",
    name: "Camera Inspections",
    image: "assets/images/camera-inspections.jpg",
    description: "High-resolution pipe camera scans to locate blockages and system failures.",
    inStock: true
  },
  {
    id: "svc-14",
    category: "System Maintenance & Diagnostic Tools",
    name: "Hydro Jetting",
    image: "assets/images/hydro-jetting.jpg",
    description: "High-pressure water jet cleaning that clears roots and debris.",
    inStock: true
  },
  {
    id: "svc-15",
    category: "System Maintenance & Diagnostic Tools",
    name: "Sump Pump Installations",
    image: "assets/images/sump-pump.jpg",
    description: "Pump systems that automatically remove rising groundwater.",
    inStock: true
  }
];

/* -----------------------------------
   2. DOM REFERENCES
----------------------------------- */
const productGrid = document.getElementById("product-grid");
const cartList = document.getElementById("cart-list");
const cartCount = document.getElementById("cart-count");
const filterButtons = document.querySelectorAll(".filter-button");

/* -----------------------------------
   3. CART STATE
----------------------------------- */
let cart = JSON.parse(localStorage.getItem("bladeSlingerCart")) || [];

/* -----------------------------------
   4. RENDER GRID
----------------------------------- */
function renderGrid(items) {
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

    const categoryTag = document.createElement("span");
    categoryTag.classList.add("category-tag");
    categoryTag.textContent = item.category;

    const button = document.createElement("button");
    button.textContent = "Add to Service List";
    button.addEventListener("click", () => addToCart(item.id));

    card.append(img, title, desc, categoryTag, button);
    productGrid.appendChild(card);
  });
}

/* -----------------------------------
   5. RENDER CART
----------------------------------- */
function renderCart() {
  cartList.textContent = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.category})`;
    cartList.appendChild(li);
  });

  cartCount.textContent = cart.length;
}

/* -----------------------------------
   6. CART LOGIC
----------------------------------- */
function addToCart(id) {
  const service = storeCatalog.find(item => item.id === id);
  if (!service) return;

  cart.push(service);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("bladeSlingerCart", JSON.stringify(cart));
}

/* -----------------------------------
   7. FILTERING
----------------------------------- */
function filterByCategory(category) {
  if (category === "All") {
    renderGrid(storeCatalog);
    return;
  }

  const filtered = storeCatalog.filter(item => item.category === category);
  renderGrid(filtered);
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    filterByCategory(category);
  });
});

/* -----------------------------------
   8. INITIAL LOAD
----------------------------------- */
renderGrid(storeCatalog);
renderCart();
