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
  const paramás = new URLSearchParamás(window.location.search);
  
  const cat = paramás.get("cat");
  if (cat) {
    categoriaActiva = cat;
    actualizarBotonActivo(".filter-btn", "data-category", cat);
    if (cat === "mates") {
      document.getElementById("subcategories-bar").style.display = "flex";
    }
  }

  const sub = paramás.get("sub");
  if (sub) {
    subcategoriaActiva = sub;
    actualizarBotonActivo(".subfilter-btn", "data-subcategory", sub);
  }

  const focusSearch = paramás.get("focus");
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
  const subBarMates = document.getElementById("subcategories-bar");
  const subBarYerbas = document.getElementById("subcategories-yerbas-bar");

  catBotones.forEach(btn => {
    btn.addEventListener("click", () => {
      // Quitar clase activa previa y agregar a este
      catBotones.forEach(b => b.classList.remove("filter-btn--active"));
      btn.classList.add("filter-btn--active");

      categoriaActiva = btn.getAttribute("data-category");
      subcategoriaActiva = "todos"; // Reset subcategoría al cambiar de categoría principal

      // Mostrar/Ocultar barras de subcategorías
      if (categoriaActiva === "mates") {
        subBarMates.style.display = "flex";
        subBarYerbas.style.display = "none";
        
        // Reset sub-botones de Mates
        const subBotones = subBarMates.querySelectorAll(".subfilter-btn");
        subBotones.forEach(b => {
          if (b.getAttribute("data-subcategory") === "todos") {
            b.classList.add("subfilter-btn--active");
          } else {
            b.classList.remove("subfilter-btn--active");
          }
        });
      } else {
        subBarMates.style.display = "none";
        subBarYerbas.style.display = "none";
      }

      renderizarCatalogo();
    });
  });

  // Filtros de Subcategorías
  const subBotones = document.querySelectorAll(".subfilter-btn");
  subBotones.forEach(btn => {
    btn.addEventListener("click", () => {
      // Quitar clase activa del mismo contenedor
      const siblingButtons = btn.parentNode.querySelectorAll(".subfilter-btn");
      siblingButtons.forEach(b => b.classList.remove("subfilter-btn--active"));
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

let renderTimeout = null;

// Filtra, ordena y pinta los productos en la grilla
function renderizarCatalogo() {
  const grid = document.getElementById("catalog-products-grid");
  if (!grid) return;

  // Cancelar renderizado anterior pendiente
  if (renderTimeout) {
    clearTimeout(renderTimeout);
  }

  // 1. Mostrar Skeletons Shimmer inmediatamente
  grid.innerHTML = Array(6).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="skeleton-image shimmer-sweep"></div>
      <div class="skeleton-text shimmer-sweep" style="width: 80%;"></div>
      <div class="skeleton-text shimmer-sweep" style="width: 50%;"></div>
    </div>
  `).join("");

  // 2. Programar la carga de los productos reales tras 600más
  renderTimeout = setTimeout(() => {
    // 3. Filtrar productos
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

    // 4. Ordenar productos
    if (ordenActivo === "price-asc") {
      productosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (ordenActivo === "price-desc") {
      productosFiltrados.sort((a, b) => b.precio - a.precio);
    } else if (ordenActivo === "name-asc") {
      productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    // 5. Imprimir en pantalla
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

      const imgHover = obtenerImagenHover(p);
      const hasHover = imgHover && imgHover !== p.imagen;

      return `
        <div class="product-card" style="animation: fadeIn 0.4s ease forwards;">
          <div class="product-card__image-container ${hasHover ? 'product-card__image-container--has-hover' : ''}" onclick="window.location.href='producto.html?id=${p.id}'">
            ${p.destacado ? `<span class="product-card__badge">Destacado</span>` : ""}
            <img src="${p.imagen}" alt="${p.nombre}" class="product-card__image product-card__image--primary">
            ${hasHover ? `<img src="${imgHover}" alt="${p.nombre}" class="product-card__image product-card__image--secondary">` : ""}
          </div>
          <div class="product-card__content">
            <span class="product-card__meta">${p.categoria} ${p.subcategoria ? `· ${p.subcategoria}` : ''}</span>
            <h3 class="product-card__title">${p.nombre}</h3>
            <div class="product-card__price-box">
              <span class="product-card__price">$${p.precio.toLocaleString('es-AR')}</span>
            </div>
            <div class="product-card__actions">
              <a href="producto.html?id=${p.id}" class="btn btn--secondary btn--sm btn--full">Detalles</a>
              <button class="btn btn--primary btn--sm" onclick="agregarAlCarrito('${p.id}', 1, '${opcionPorDefecto}', event)">Agregar</button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }, 600);
}

