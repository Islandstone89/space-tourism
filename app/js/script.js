
let openMenuBtn = document.querySelector(".menu-btn-open");
let closeMenuBtn = document.querySelector(".menu-btn-close");


openMenuBtn.addEventListener("click", () => {
    openMenuBtn.setAttribute("aria-expanded", "true")
    }
);

closeMenuBtn.addEventListener("click", () => {
        openMenuBtn.setAttribute("aria-expanded", "false")
    }
);