
let nav = document.querySelector(".primary-nav__list");
let navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    if (navToggle.getAttribute("aria-expanded", "false")) {
            navToggle.setAttribute("aria-expanded", "true")
    }

    else {
        navToggle.setAttribute("aria-expanded", "false")
    }
});
