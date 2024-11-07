
let body = document.getElementById("homePage");
let nav = document.querySelector(".primary-nav");
let navList = document.querySelector(".primary-nav__list");
let navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    if (navToggle.getAttribute("aria-expanded", "false")) {
            navToggle.setAttribute("aria-expanded", "true")
            navList.style.display = "flex"
            navToggle.style.backgroundImage = "url('/assets/shared/icon-close.svg')"
            nav.style.backgroundColor = "hsl(0 0 100% / .05)"
    }

    else {
            navToggle.setAttribute("aria-expanded", "false")
            navToggle.style.backgroundImage = "url('/assets/shared/icon-hamburger.svg')"
        }
    }
);

