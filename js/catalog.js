/* ==========================================================================
   LÓGICA DEL CATÁLOGO - EL BUEN CEBAR
   ========================================================================== */

let categoriaActiva = "todos";
let subcategoriaActiva = "todos";
let terminoBusqueda = "";
let ordenActivo = "default";

document.addEventListener("DOMContentLoaded", () => {
  leerParametrosURL();
  inicializarEventosFiltros();
  renderizarCatalogo();
});

// Lee parámetros de la URL para inicializar filtros (ej: ?cat=mates)
function leerParametrosURL() {
  const params = new URLSearchParams(window.location.search);
  
  const cat = params.get("cat");
  if (cat) {
    categoriaActiva = cat;
    actualizarBotonActivo(".filter-btn", "data-category", cat);
    if (cat === "mates") {
      document.getElementById("subcategories-bar").style.display = "flex";
    }
  }

  const sub = params.get("sub");
  if (sub) {
    subcategoriaActiva = sub;
    actualizarBotonActivo(".subfilter-btn", "data-subcategory", sub);
  }

  const focusSearch = params.get("focus");
  if (focusSearch === "search") {
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      setTimeout(() => {
        searchInput.focus();
      }, 300);
    }
  }
}

// Auxiliar para establecer la clase activa en los botones de filtro al iniciar
function actualizarBotonActivo(selectorBotones, atributo, valor) {
  const botones = document.querySelectorAll(selectorBotones);
  botones.forEach(btn => {
    if (btn.getAttribute(atributo) === valor) {
      btn.classList.add(btn.className.includes("sub") ? "subfilter-btn--active" : "filter-btn--active");
    } else {
      btn.classList.remove(btn.className.includes("sub") ? "subfilter-btn--active" : "filter-btn--active");
    }
  });
}

// Enlaza los filtros del DOM con las variables de estado y dispara la renderización
function inicializarEventosFiltros() {
  // Filtros de Categoría
  const catBotones = document.querySelectorAll(".filter-btn");
  const subBar = document.getElementById("subcategories-bar");

  catBotones.forEach(btn => {
    btn.addEventListener("click", () => {
      // Quitar clase activa previa y agregar a este
      catBotones.forEach(b => b.classList.remove("filter-btn--active"));
      btn.classList.add("filter-btn--active");

      categoriaActiva = btn.getAttribute("data-category");
      subcategoriaActiva = "todos"; // Reset subcategoría al cambiar de categoría principal

      // Mostrar/Ocultar barra de sub-mates si es "Mates"
      if (categoriaActiva === "mates") {
        subBar.style.display = "flex";
        // Reset clase activa en sub-botones
        const subBotones = document.querySelectorAll(".subfilter-btn");
        subBotones.forEach(b => {
          if (b.getAttribute("data-subcategory") === "todos") {
            b.classList.add("subfilter-btn--active");
          } else {
            b.classList.remove("subfilter-btn--active");
          }
        });
      } else {
        subBar.style.display = "none";
      }

      renderizarCatalogo();
    });
  });

  // Filtros de Subcategorías de Mates
  const subBotones = document.querySelectorAll(".subfilter-btn");
  subBotones.forEach(btn => {
    btn.addEventListener("click", () => {
      subBotones.forEach(b => b.classList.remove("subfilter-btn--active"));
      btn.classList.add("subfilter-btn--active");

      subcategoriaActiva = btn.getAttribute("data-subcategory");
      renderizarCatalogo();
    });
  });

  // Buscador de Texto
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      terminoBusqueda = e.target.value;
      renderizarCatalogo();
    });
  }

  // Ordenador de Precios / Alfabeto
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      ordenActivo = e.target.value;
      renderizarCatalogo();
    });
  }
}

// Filtra, ordena y pinta los productos en la grilla
function renderizarCatalogo() {
  const grid = document.getElementById("catalog-products-grid");
  if (!grid) return;

  // 1. Filtrar productos
  let productosFiltrados = [...PRODUCTOS];

  // Filtro Categoría
  if (categoriaActiva !== "todos") {
    productosFiltrados = productosFiltrados.filter(p => p.categoria === categoriaActiva);
  }

  // Filtro Subcategoría (solo aplica si está activo mates y se seleccionó algo distinto a "todos")
  if (categoriaActiva === "mates" && subcategoriaActiva !== "todos") {
    productosFiltrados = productosFiltrados.filter(p => p.subcategoria === subcategoriaActiva);
  }

  // Filtro de Búsqueda
  if (terminoBusqueda.trim() !== "") {
    const query = terminoBusqueda.toLowerCase().trim();
    productosFiltrados = productosFiltrados.filter(p => 
      p.nombre.toLowerCase().includes(query) || 
      p.descripcion.toLowerCase().includes(query)
    );
  }

  // 2. Ordenar productos
  if (ordenActivo === "price-asc") {
    productosFiltrados.sort((a, b) => a.precio - b.precio);
  } else if (ordenActivo === "price-desc") {
    productosFiltrados.sort((a, b) => b.precio - a.precio);
  } else if (ordenActivo === "name-asc") {
    productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  // 3. Imprimir en pantalla
  if (productosFiltrados.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: var(--color-text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">No encontramos productos que coincidan con tu búsqueda.</p>
        <p style="font-size: 0.9rem;">Probá buscando otra palabra o limpiando los filtros.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = productosFiltrados.map(p => {
    // Definimos variantes por defecto simples según su categoría para agregar rápido
    let opcionPorDefecto = "";
    if (p.variantes && p.variantes.length > 0) {
      opcionPorDefecto = p.variantes[0].nombre;
    } else if (p.categoria === "mates") {
      opcionPorDefecto = p.subcategoria === "algarrobo" ? "Natural" : "Marrón Oscuro";
    } else if (p.categoria === "termos") {
      opcionPorDefecto = p.id.includes("negro") ? "Negro Mate" : "Acero";
    }

    return `
      <div class="product-card">
        <div class="product-card__image-container" onclick="window.location.href='producto.html?id=${p.id}'">
          ${p.destacado ? `<span class="product-card__badge">Destacado</span>` : ""}
          <img src="${p.imagen}" alt="${p.nombre}" class="product-card__image">
        </div>
        <div class="product-card__content">
          <span class="product-card__meta">${p.categoria} ${p.subcategoria ? `· ${p.subcategoria}` : ''}</span>
          <h3 class="product-card__title">${p.nombre}</h3>
          <div class="product-card__price-box">
            <span class="product-card__price">$${p.precio.toLocaleString('es-AR')}</span>
          </div>
          <div class="product-card__actions">
            <a href="producto.html?id=${p.id}" class="btn btn--secondary btn--sm btn--full">Detalles</a>
            <button class="btn btn--primary btn--sm" onclick="agregarAlCarrito('${p.id}', 1, '${opcionPorDefecto}')">Agregar</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}
