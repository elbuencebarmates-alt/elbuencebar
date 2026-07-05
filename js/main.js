/* ==========================================================================
   INTERACTIVIDAD GLOBAL - EL BUEN CEBAR
   ========================================================================== */

// Detección inicial del modo oscuro (inmediato para evitar flash visual)
(function initDarkMode() {
  const darkModeSaved = localStorage.getItem('dark-mode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (darkModeSaved === 'true' || (darkModeSaved === null && prefersDark)) {
    document.documentElement.classList.add('dark-mode');
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  inicializarHeader();
  inicializarMenuMovil();
  actualizarFechaCopyright();
  inicializarScrollReveal();
  inicializarModoOscuro();
});

// 1. Efecto Scroll en la Cabecera (Header shadow & shrink)
function inicializarHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const chequearScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  };

  // Ejecutar al cargar la página por si inicia con scroll
  chequearScroll();
  window.addEventListener("scroll", chequearScroll);
}

// 2. Menú de Navegación en Dispositivos Móviles
function inicializarMenuMovil() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("mobile-nav--open");
    
    if (isOpen) {
      mobileNav.classList.remove("mobile-nav--open");
      hamburger.classList.remove("hamburger--active");
      document.body.style.overflow = ""; // Restaura scroll
    } else {
      mobileNav.classList.add("mobile-nav--open");
      hamburger.classList.add("hamburger--active");
      document.body.style.overflow = "hidden"; // Deshabilita scroll de fondo
    }
  });

  // Cerrar menú móvil si se hace clic en un enlace
  const enlaces = mobileNav.querySelectorAll(".nav__link");
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
      mobileNav.classList.remove("mobile-nav--open");
      hamburger.classList.remove("hamburger--active");
      document.body.style.overflow = "";
    });
  });
}

// 3. Actualización dinámica del año en el pie de página
function actualizarFechaCopyright() {
  const copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
}

// 4. Revelado suave de elementos al hacer scroll
function inicializarScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (elements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-on-scroll--visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(element => {
    observer.observe(element);
  });
}

// 5. Soporte y botón flotante de Modo Oscuro (Dark Mode)
function inicializarModoOscuro() {
  // Crear el botón flotante dinámicamente
  const btn = document.createElement("button");
  btn.className = "dark-mode-toggle";
  btn.id = "dark-mode-btn";
  btn.setAttribute("aria-label", "Cambiar modo de color");
  
  // Icono SVG dinámico sol/luna
  const sunIcon = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  const actualizarIcono = () => {
    const isDark = document.documentElement.classList.contains("dark-mode");
    btn.innerHTML = isDark ? sunIcon : moonIcon;
  };

  actualizarIcono();
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDark ? "true" : "false");
    actualizarIcono();
    
    // Feedback táctil con micro-animación en click
    btn.style.transform = "scale(0.9) translateY(0)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  });
}

