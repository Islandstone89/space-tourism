
let nav = document.querySelector(".primary-nav__list");
let navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    if (navToggle.getAttribute("aria-expanded", "false")) {
            navToggle.setAttribute("aria-expanded", "true")
            nav.style.display = "flex"
            navToggle.style.backgroundImage = "url('/assets/shared/icon-close.svg')"
    }

    else {
        navToggle.setAttribute("aria-expanded", "false")
        navToggle.style.backgroundImage = "url('/assets/shared/icon-hamburger.svg')"
    }
});
