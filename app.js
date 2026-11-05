
/*
  PERSONALIZA TU CATÁLOGO AQUÍ:
  1. WHATSAPP_NUMBER: código de país + número, solo dígitos.
  2. Edita los productos dentro de PRODUCTS.
  3. Guarda las imágenes en img/ y actualiza image / images.
     image es la foto principal; images contiene las fotos del carrusel.
*/

const WHATSAPP_NUMBER = "51942359900"; // Perú (+51)

const PRODUCTS = [
  {
    id: "CN-001",
    name: "Brazalete Lacoste",
    category: "Accesorios",
    price: 89.90,
    stock: 38, // Coloca aquí las unidades reales disponibles; null = por confirmar.
    tag: "",
    description: "Incluye: <br>* Pulsera Lacoste 💛 <br>* Bolsa de tela Lacoste  <br>* Certificado con QR <br>* Caja Lacoste",
    image: "img/producto-01x1.png",
    images: ["img/producto-01x1.png"]
  },
  {
    id: "CN-002",
    name: "Reloj de pulsera",
    category: "Relojes",
    price: 149.00,
    stock: null,
    tag: "Nuevo",
    description: "La hora XD.",
    image: "img/producto-02x1.png",
    images: ["img/producto-02x1.png"]
  },
  {
    id: "CN-003",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-03x1.png",
    images: ["img/producto-03x1.png"]
  },
  {
    id: "CN-004",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-04x1.png",
    images: ["img/producto-04x1.png"]
  },
  {
    id: "CN-005",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-05x1.png",
    images: ["img/producto-05x1.png"]
  },
  {
    id: "CN-006",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-06x1.png",
    images: ["img/producto-06x1.png"]
  },
  {
    id: "CN-007",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-07x1.png",
    images: ["img/producto-07x1.png"]
  },
  {
    id: "CN-008",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-08x1.png",
    images: ["img/producto-08x1.png"]
  },
  {
    id: "CN-009",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-09x1.png",
    images: ["img/producto-09x1.png"]
  },
  {
    id: "CN-010",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-10x1.png",
    images: ["img/producto-10x1.png"]
  },
  {
    id: "CN-011",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-11x1.png",
    images: ["img/producto-11x1.png"]
  },
  {
    id: "CN-012",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-12x1.png",
    images: ["img/producto-12x1.png"]
  },
  {
    id: "CN-013",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-13x1.png",
    images: ["img/producto-13x1.png"]
  },
  {
    id: "CN-014",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-14x1.png",
    images: ["img/producto-14x1.png"]
  },
  {
    id: "CN-015",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-15x1.png",
    images: ["img/producto-15x1.png"]
  },
  {
    id: "CN-016",
    name: "Brazalete de acero",
    category: "Accesorios",
    price: 75.00,
    stock: null,
    tag: "Edición especial",
    description: "Brillo genial.",
    image: "img/producto-16x1.png",
    images: ["img/producto-16x1.png"]
  },
  {
    id: "CN-017",
    name: "Brazalete de acero",
    category: "Packs",
    price: 75.00,
    stock: null,
    tag: "",
    description: "Brillo genial.",
    image: "img/producto-17x1.png",
    images: ["img/producto-17x1.png"]
  }
];

// Formato de moneda peruana
const money = (n) =>
  new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN"
  }).format(n);

// Stock y ofertas: configura stock como número y originalPrice para las ofertas.
function productDiscount(p) {
  if (String(p.tag || "").trim().toLocaleLowerCase("es") !== "oferta") return null;
  const original = Number(p.originalPrice);
  if (!Number.isFinite(original) || original <= p.price || p.price < 0) return null;
  const amount = original - p.price;
  return { amount, percent: Math.round((amount / original) * 100), original };
}

function stockInfo(p) {
  if (!Number.isInteger(p.stock) || p.stock < 0) {
    return { label: "Stock por confirmar", className: "stock-unknown", available: true };
  }
  if (p.stock === 0) {
    return { label: "Agotado", className: "stock-out", available: false };
  }
  return { label: `${p.stock} disponible${p.stock === 1 ? "" : "s"}`, className: "stock-available", available: true };
}

function productPriceMarkup(p, detail = false) {
  const discount = productDiscount(p);
  return `${discount ? `<span class="${detail ? "detail-old-price" : "old-price"}">${money(discount.original)}</span>` : ""}
    <span class="${detail ? "detail-price-current" : "price-current"}">${money(p.price)}</span>
    ${discount ? `<span class="${detail ? "detail-discount" : "discount-label"}">-${discount.percent}% · Ahorras ${money(discount.amount)}</span>` : ""}`;
}

// Generar enlace de WhatsApp para cada producto
function whatsappLink(p) {
  const msg = `¡Hola! Quiero realizar un pedido:

Producto: ${p.name}
ID: ${p.id}
Precio: ${money(p.price)}
${productDiscount(p) ? `Precio anterior: ${money(productDiscount(p).original)}\nDescuento: ${productDiscount(p).percent}% (ahorras ${money(productDiscount(p).amount)})\n` : ""}Cantidad: 1

¿Me pueden ayudar con este pedido?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ==========================================
// PÁGINA PRINCIPAL DEL CATÁLOGO
// ==========================================

const grid = document.getElementById("productGrid");

if (grid) {
  const search = document.getElementById("searchInput");
  const sort = document.getElementById("sortSelect");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");

  let activeCategory = "Todos";

  function render() {
    const term = search
      ? search.value.trim().toLocaleLowerCase("es")
      : "";

    let items = PRODUCTS.filter((p) => {
      const matchesCategory =
        activeCategory === "Todos" ||
        p.category === activeCategory;

      const searchableText =
        `${p.name} ${p.id} ${p.category}`.toLocaleLowerCase("es");

      return matchesCategory && searchableText.includes(term);
    });

    // Ordenar productos
    if (sort?.value === "low") {
      items.sort((a, b) => a.price - b.price);
    }

    if (sort?.value === "high") {
      items.sort((a, b) => b.price - a.price);
    }

    if (sort?.value === "az") {
      items.sort((a, b) => a.name.localeCompare(b.name, "es"));
    }

    // Contador de resultados
    if (resultsCount) {
      resultsCount.textContent =
        `${items.length} producto${items.length === 1 ? "" : "s"} encontrado${items.length === 1 ? "" : "s"}`;
    }

    // Estado cuando no hay resultados
    if (emptyState) {
      emptyState.hidden = items.length !== 0;
    }

    // Generar tarjetas
    grid.innerHTML = items.map((p) => `
      <article class="product-card">

        <a
          class="product-image-link"
          href="producto.html?id=${encodeURIComponent(p.id)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver detalles de ${p.name}"
        >
          <div class="product-image-wrap">

            <img
              src="${p.image}"
              alt="${p.name}"
              loading="lazy"
              onerror="this.onerror=null;this.style.display='none';"
            >

            ${p.tag ? `
              <span class="product-tag ${String(p.tag).toLowerCase() === "oferta" ? "product-tag-offer" : ""}">${String(p.tag).toLowerCase() === "oferta" && productDiscount(p) ? `OFERTA -${productDiscount(p).percent}%` : p.tag}</span>
            ` : ""}

            <span class="view-product-hint">
              Ver producto ↗
            </span>

          </div>
        </a>

        <div class="product-info">

          <div class="product-meta">
            <span>${p.category.toUpperCase()}</span>
            <span>${p.id}</span>
          </div>

          <h3>${p.name}</h3>

          <div class="product-bottom">

            <span class="stock-indicator ${stockInfo(p).className}">${stockInfo(p).label}</span>
            <span class="price ${productDiscount(p) ? "price-offer" : ""}">
              ${productPriceMarkup(p)}
            </span>

            <a
              class="order-btn ${stockInfo(p).available ? "" : "order-btn-disabled"}"
              href="${stockInfo(p).available ? whatsappLink(p) : "#"}"
              aria-disabled="${stockInfo(p).available ? "false" : "true"}"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${stockInfo(p).available ? "◉ Pedir por WhatsApp" : "Producto agotado"} <span>→</span>
            </a>

          </div>

        </div>

      </article>
    `).join("");
  }

  // Evitar pedidos cuando el producto está agotado.
  grid.addEventListener("click", (event) => {
    const disabledOrder = event.target.closest(".order-btn-disabled");
    if (disabledOrder) event.preventDefault();
  });

  // Buscador
  search?.addEventListener("input", render);

  // Ordenamiento
  sort?.addEventListener("change", render);

  // Filtros de categoría
  document.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;

      document.querySelectorAll(".filter-chip").forEach((b) => {
        b.classList.toggle("active", b === btn);
      });

      render();
    });
  });

  // Filtros de personalidad
  document.querySelectorAll(".personality-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;

      document.querySelectorAll(".filter-chip").forEach((b) => {
        b.classList.toggle(
          "active",
          b.dataset.category === activeCategory
        );
      });

      if (search) search.value = "";

      render();

      document.getElementById("catalogo")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Limpiar búsqueda y filtros
  document.getElementById("clearSearch")?.addEventListener("click", () => {
    if (search) search.value = "";

    activeCategory = "Todos";

    document.querySelectorAll(".filter-chip").forEach((b) => {
      b.classList.toggle(
        "active",
        b.dataset.category === "Todos"
      );
    });

    render();
  });

  // WhatsApp general
  const generalWhatsapp = document.getElementById("generalWhatsapp");

  if (generalWhatsapp) {
    const generalMessage =
      "¡Hola! Quisiera más información sobre sus productos.";

    generalWhatsapp.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`;
  }

  // Menú móvil
  document.querySelector(".menu-toggle")?.addEventListener("click", () => {
    document.querySelector(".site-header nav")?.classList.toggle("open");
  });

  document.querySelectorAll(".site-header nav a").forEach((a) => {
    a.addEventListener("click", () => {
      document.querySelector(".site-header nav")?.classList.remove("open");
    });
  });

  // Atajo de teclado para buscar
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "/" &&
      !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
    ) {
      e.preventDefault();
      search?.focus();
    }
  });

  // Renderizar catálogo
  render();
}


// ==========================================
// PÁGINA INDIVIDUAL DEL PRODUCTO
// ==========================================

const detailRoot = document.getElementById("productDetail");

if (detailRoot) {
  const params = new URLSearchParams(window.location.search);

  const product = PRODUCTS.find(
    (p) => p.id === params.get("id")
  );

  if (!product) {
    detailRoot.innerHTML = `
      <div class="product-not-found">
        <p class="eyebrow">CATÁLOGO XIN YUAN IMPORTS</p>
        <h1>Producto no encontrado</h1>
        <a class="primary-btn" href="index.html#catalogo">
          Volver al catálogo ↗
        </a>
      </div>
    `;
  } else {
    const photos = (
      product.images?.length
        ? product.images
        : [product.image]
    ).filter(Boolean);

    detailRoot.innerHTML = `
      <div class="detail-gallery">

        <div class="detail-main-image">

          <img
            id="detailImage"
            src="${photos[0]}"
            alt="${product.name}"
          >

          ${photos.length > 1 ? `
            <button
              class="gallery-arrow prev"
              id="prevPhoto"
              aria-label="Imagen anterior"
            >‹</button>

            <button
              class="gallery-arrow next"
              id="nextPhoto"
              aria-label="Imagen siguiente"
            >›</button>
          ` : ""}

          <span class="gallery-counter" id="galleryCounter">
            1 / ${photos.length}
          </span>

        </div>

        <div class="gallery-thumbnails" id="galleryThumbs">

          ${photos.map((src, i) => `
            <button
              class="gallery-thumb ${i === 0 ? "active" : ""}"
              data-index="${i}"
              aria-label="Ver imagen ${i + 1}"
            >
              <img src="${src}" alt="">
            </button>
          `).join("")}

        </div>

      </div>

      <section class="detail-info">

        <p class="eyebrow">
          ${product.category.toUpperCase()} · ${product.id}
        </p>

        ${product.tag ? `
          <span class="detail-tag ${String(product.tag).toLowerCase() === "oferta" ? "product-tag-offer" : ""}">${String(product.tag).toLowerCase() === "oferta" && productDiscount(product) ? `OFERTA -${productDiscount(product).percent}%` : product.tag}</span>
        ` : ""}

        <h1>${product.name}</h1>

        <p class="detail-price ${productDiscount(product) ? "price-offer" : ""}">
          ${productPriceMarkup(product, true)}
        </p>

        <p class="detail-description">
          ${product.description}
        </p>

        <div class="detail-specs">

          <div>
            <small>CÓDIGO</small>
            <b>${product.id}</b>
          </div>

          <div>
            <small>CATEGORÍA</small>
            <b>${product.category}</b>
          </div>

          <div>
            <small>DISPONIBILIDAD</small>
            <b class="${stockInfo(product).className}">${stockInfo(product).label}</b>
          </div>

        </div>

        <a
          class="primary-btn detail-order ${stockInfo(product).available ? "" : "order-btn-disabled"}"
          href="${stockInfo(product).available ? whatsappLink(product) : "#"}"
          aria-disabled="${stockInfo(product).available ? "false" : "true"}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${stockInfo(product).available ? "Consultar / pedir por WhatsApp" : "Producto agotado"} <span>↗</span>
        </a>

        <a class="back-catalog" href="index.html#catalogo">
          ← Volver al catálogo
        </a>

      </section>
    `;

    // Evitar pedidos cuando el producto está agotado.
    document.querySelector(".detail-order")?.addEventListener("click", (event) => {
      if (!stockInfo(product).available) event.preventDefault();
    });

    // Funcionamiento de la galería
    let current = 0;

    const mainImage = document.getElementById("detailImage");
    const counter = document.getElementById("galleryCounter");

    function showPhoto(index) {
      current = (index + photos.length) % photos.length;

      mainImage.src = photos[current];

      if (counter) {
        counter.textContent =
          `${current + 1} / ${photos.length}`;
      }

      document.querySelectorAll(".gallery-thumb").forEach((b, i) => {
        b.classList.toggle("active", i === current);
      });
    }

    document.getElementById("prevPhoto")?.addEventListener(
      "click",
      () => showPhoto(current - 1)
    );

    document.getElementById("nextPhoto")?.addEventListener(
      "click",
      () => showPhoto(current + 1)
    );

    document.querySelectorAll(".gallery-thumb").forEach((b) => {
      b.addEventListener("click", () => {
        showPhoto(Number(b.dataset.index));
      });
    });

    // Navegación con flechas del teclado
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        showPhoto(current - 1);
      }

      if (e.key === "ArrowRight") {
        showPhoto(current + 1);
      }
    });
  }
}
