tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#1b1c1a",
        "primary-container": "#9a6950",
        "inverse-primary": "#f4ba9c",
        "secondary-fixed": "#ffdcbd",
        "on-tertiary-container": "#fffbff",
        "surface-container-low": "#f5f3ef",
        "outline-variant": "#d6c3ba",
        "primary": "#7e5139",
        "secondary-container": "#ffca98",
        "on-tertiary": "#ffffff",
        "surface-container-high": "#eae8e4",
        "surface-bright": "#fbf9f5",
        "surface-tint": "#80543b",
        "on-primary": "#ffffff",
        "surface-variant": "#e4e2de",
        "surface": "#fbf9f5",
        "outline": "#83746d",
        "on-secondary-fixed-variant": "#623f18",
        "surface-container-highest": "#e4e2de",
        "on-error-container": "#93000a",
        "on-surface-variant": "#51443e",
        "on-background": "#1b1c1a",
        "tertiary-fixed-dim": "#dcc497",
        "secondary-fixed-dim": "#f0bd8b",
        "on-primary-fixed": "#311302",
        "on-primary-fixed-variant": "#653d26",
        "on-tertiary-fixed": "#261a00",
        "on-primary-container": "#fffbff",
        "on-secondary": "#ffffff",
        "inverse-on-surface": "#f2f0ed",
        "background": "#fbf9f5",
        "error-container": "#ffdad6",
        "on-secondary-container": "#7a532a",
        "surface-container-lowest": "#ffffff",
        "tertiary-container": "#86724c",
        "surface-dim": "#dbdad6",
        "primary-fixed-dim": "#f4ba9c",
        "surface-container": "#efeeea",
        "primary-fixed": "#ffdbca",
        "secondary": "#7d562d",
        "on-tertiary-fixed-variant": "#554422",
        "tertiary": "#6c5a35",
        "error": "#ba1a1a",
        "on-secondary-fixed": "#2c1600",
        "on-error": "#ffffff",
        "tertiary-fixed": "#f9dfb1",
        "inverse-surface": "#30312e"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        unit: "8px",
        "margin-desktop": "64px",
        gutter: "24px",
        "container-max": "1280px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "display-lg": ["Playfair Display"],
        "label-sm": ["Montserrat"],
        "headline-sm": ["Playfair Display"],
        "display-lg-mobile": ["Playfair Display"],
        "label-md": ["Montserrat"],
        "body-lg": ["Montserrat"],
        "body-md": ["Montserrat"],
        "headline-md": ["Playfair Display"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "1.2", letterSpacing: "0.03em", fontWeight: "500" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "500" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "500" }]
      }
    }
  }
};

(function () {
  var style = document.createElement("style");
  style.textContent =
    ".material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 300,'GRAD' 0,'opsz' 24}" +
    ".scrolled{box-shadow:0 4px 30px rgba(0,0,0,0.03)}" +
    "@media(min-width:1200px){.nav-desktop{display:flex!important}.nav-hamburger{display:none!important}}" +
    "@media(max-width:1199px){.nav-desktop{display:none!important}.nav-hamburger{display:flex!important}}" +
    ".sidebar-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.2);z-index:60;opacity:0;visibility:hidden;transition:opacity .3s,visibility .3s}" +
    ".sidebar-overlay.active{opacity:1;visibility:visible}" +
    ".sidebar{position:fixed;top:0;right:-320px;width:320px;max-width:85vw;height:100vh;background:#fbf9f5;z-index:70;display:flex;flex-direction:column;transition:right .3s ease;box-shadow:-10px 0 40px rgba(0,0,0,.05)}" +
    ".sidebar.open{right:0}" +
    ".sidebar-header{display:flex;justify-content:space-between;align-items:center;padding:24px;border-bottom:1px solid #d6c3ba}" +
    ".sidebar-close{width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;color:#7e5139;border-radius:9999px;transition:background .2s}" +
    ".sidebar-close:hover{background:#f5f3ef}" +
    ".sidebar-nav{flex:1;display:flex;flex-direction:column;padding:8px 0;overflow-y:auto}" +
    ".sidebar-link{display:block;padding:14px 24px;font-family:Montserrat;font-size:14px;font-weight:600;letter-spacing:.05em;line-height:1.2;color:#51443e;text-decoration:none;transition:all .2s}" +
    ".sidebar-link:hover{color:#7e5139;background:#f5f3ef}" +
    ".sidebar-link.active{color:#7e5139;font-weight:700;border-left:3px solid #7e5139;background:#f5f3ef}" +
    ".sidebar-footer{padding:16px 24px 32px;border-top:1px solid #d6c3ba}" +
    "body.scroll-lock{overflow:hidden!important}";
  document.head.appendChild(style);

  var HEADER_HTML =
    '<header class="fixed top-0 w-full z-50 transition-all duration-300 bg-surface/90 backdrop-blur-md">' +
    '<nav class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">' +
    '<a href="index.html" class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight whitespace-nowrap">Komugi</a>' +
    '<div class="nav-desktop items-center gap-6">' +
    '<a href="index.html" class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md whitespace-nowrap" data-nav="index">Inicio</a>' +
    '<a href="catalog.html" class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md whitespace-nowrap" data-nav="catalog">Cat\u00e1logo</a>' +
    '<a href="category_girl.html" class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md whitespace-nowrap" data-nav="category_girl">Ni\u00f1as</a>' +
    '<a href="category_women.html" class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md whitespace-nowrap" data-nav="category_women">Mujeres</a>' +
    '<a href="custom_made.html" class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md whitespace-nowrap" data-nav="custom_made">Hecho a medida</a>' +
    '<a href="about_us.html" class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md whitespace-nowrap" data-nav="about_us">Nosotros</a>' +
    '<a href="contact.html" class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md whitespace-nowrap" data-nav="contact">Contacto</a>' +
    "</div>" +
    '<a href="contact.html" class="nav-desktop bg-primary text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:opacity-80 transition-opacity active:scale-95 transition-transform shadow-sm whitespace-nowrap">Consultar por WhatsApp</a>' +
    '<button id="hamburger-btn" class="nav-hamburger items-center justify-center w-10 h-10 text-primary bg-transparent border-none cursor-pointer" aria-label="Abrir men\u00fa de navegaci\u00f3n" aria-expanded="false" aria-controls="mobile-sidebar-panel"><span class="material-symbols-outlined text-[28px]">menu</span></button>' +
    "</nav></header>" +
    '<div id="mobile-sidebar-overlay" class="sidebar-overlay" role="presentation" aria-hidden="true"></div>' +
    '<aside id="mobile-sidebar-panel" class="sidebar" role="dialog" aria-modal="true" aria-label="Men\u00fa de navegaci\u00f3n">' +
    '<div class="sidebar-header">' +
    '<span class="font-display-lg text-display-lg-mobile text-primary">Komugi</span>' +
    '<button class="sidebar-close" aria-label="Cerrar men\u00fa"><span class="material-symbols-outlined text-[28px]">close</span></button>' +
    "</div>" +
    '<nav class="sidebar-nav">' +
    '<a href="index.html" class="sidebar-link" data-nav="index">Inicio</a>' +
    '<a href="catalog.html" class="sidebar-link" data-nav="catalog">Cat\u00e1logo</a>' +
    '<a href="category_girl.html" class="sidebar-link" data-nav="category_girl">Ni\u00f1as</a>' +
    '<a href="category_women.html" class="sidebar-link" data-nav="category_women">Mujeres</a>' +
    '<a href="custom_made.html" class="sidebar-link" data-nav="custom_made">Hecho a medida</a>' +
    '<a href="about_us.html" class="sidebar-link" data-nav="about_us">Nosotros</a>' +
    '<a href="contact.html" class="sidebar-link" data-nav="contact">Contacto</a>' +
    "</nav>" +
    '<div class="sidebar-footer">' +
    '<a href="contact.html" class="bg-primary text-on-primary w-full text-center block px-6 py-3 rounded-full font-label-md text-label-md hover:opacity-80 transition-opacity">Consultar por WhatsApp</a>' +
    "</div>" +
    "</aside>";

  var FOOTER_HTML =
    '<footer class="bg-surface-container-low py-16 px-margin-mobile md:px-margin-desktop">' +
    '<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter items-start max-w-container-max mx-auto">' +
    '<div class="flex flex-col gap-4">' +
    '<div class="font-display-lg text-display-lg-mobile text-primary">Komugi</div>' +
    '<p class="text-on-surface-variant font-body-md max-w-xs">Confecci\u00f3n artesanal de prendas delicadas y atemporales para acompa\u00f1ar los momentos m\u00e1s especiales de la vida.</p>' +
    "</div>" +
    '<div class="grid grid-cols-2 gap-8">' +
    '<div class="flex flex-col gap-3">' +
    '<span class="font-label-md text-primary mb-2">Explorar</span>' +
    '<a href="index.html" class="text-on-surface-variant hover:text-primary transition-colors text-label-sm">Inicio</a>' +
    '<a href="catalog.html" class="text-on-surface-variant hover:text-primary transition-colors text-label-sm">Cat\u00e1logo</a>' +
    '<a href="category_girl.html" class="text-on-surface-variant hover:text-primary transition-colors text-label-sm">Ni\u00f1as</a>' +
    '<a href="category_women.html" class="text-on-surface-variant hover:text-primary transition-colors text-label-sm">Mujeres</a>' +
    "</div>" +
    '<div class="flex flex-col gap-3">' +
    '<span class="font-label-md text-primary mb-2">Komugi</span>' +
    '<a href="custom_made.html" class="text-on-surface-variant hover:text-primary transition-colors text-label-sm">Hecho a medida</a>' +
    '<a href="about_us.html" class="text-on-surface-variant hover:text-primary transition-colors text-label-sm">Nosotros</a>' +
    '<a href="contact.html" class="text-on-surface-variant hover:text-primary transition-colors text-label-sm">Contacto</a>' +
    "</div></div>" +
    '<div class="flex flex-col gap-4 md:items-end">' +
    '<div class="flex gap-4">' +
    '<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">' +
    '<span class="material-symbols-outlined text-[20px]">photo_camera</span></a>' +
    '<a href="contact.html" class="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">' +
    '<span class="material-symbols-outlined text-[20px]">chat</span></a>' +
    "</div>" +
    '<p class="text-on-surface-variant font-label-sm md:text-right mt-4">&copy; 2024 Komugi. Confecci\u00f3n artesanal en Montevideo.</p>' +
    "</div></div></footer>";

  document.addEventListener("DOMContentLoaded", function () {
    var headerPlaceholder = document.getElementById("header-placeholder");
    var footerPlaceholder = document.getElementById("footer-placeholder");

    if (headerPlaceholder) headerPlaceholder.outerHTML = HEADER_HTML;
    if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

    var page = location.pathname.split("/").pop().replace(".html", "") || "index";
    document.querySelectorAll("[data-nav]").forEach(function (el) {
      if (el.getAttribute("data-nav") === page) {
        if (el.classList.contains("sidebar-link")) {
          el.classList.add("active");
        } else {
          el.classList.add("text-primary", "font-bold", "border-b-2", "border-primary", "pb-1");
          el.classList.remove("text-on-surface-variant");
        }
      }
    });

    var hamburger = document.getElementById("hamburger-btn");
    var sidebarPanel = document.getElementById("mobile-sidebar-panel");
    var sidebarOverlay = document.getElementById("mobile-sidebar-overlay");

    function openSidebar() {
      if (!sidebarPanel || !sidebarOverlay || !hamburger) return;
      sidebarPanel.classList.add("open");
      sidebarOverlay.classList.add("active");
      document.body.classList.add("scroll-lock");
      hamburger.setAttribute("aria-expanded", "true");
    }

    function closeSidebar() {
      if (!sidebarPanel || !sidebarOverlay || !hamburger) return;
      sidebarPanel.classList.remove("open");
      sidebarOverlay.classList.remove("active");
      document.body.classList.remove("scroll-lock");
      hamburger.setAttribute("aria-expanded", "false");
    }

    if (hamburger) hamburger.addEventListener("click", openSidebar);

    var sidebarClose = document.querySelector(".sidebar-close");
    if (sidebarClose) sidebarClose.addEventListener("click", closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && sidebarPanel && sidebarPanel.classList.contains("open")) {
        closeSidebar();
      }
    });

    if (sidebarPanel) {
      sidebarPanel.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeSidebar);
      });
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1200 && sidebarPanel && sidebarPanel.classList.contains("open")) {
        closeSidebar();
      }
    });

    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      if (!header) return;
      if (window.scrollY > 50) {
        header.classList.add("scrolled", "py-2");
        header.classList.remove("py-4");
      } else {
        header.classList.remove("scrolled", "py-2");
        header.classList.add("py-4");
      }
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
})();
