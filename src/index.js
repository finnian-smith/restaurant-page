import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", home);
document.addEventListener("DOMContentLoaded", menu);
document.addEventListener("DOMContentLoaded", about);

// dropdown menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeMenu);
});

const homeTab = document.querySelector(".home-button");
const aboutTab = document.querySelector(".about-button");
const menuTab = document.querySelector(".menu-button");

document.addEventListener("DOMContentLoaded", () => {
  home();

  homeTab.addEventListener("click", () => {
    home();
  });

  menuTab.addEventListener("click", () => {
    menu();
  });

  aboutTab.addEventListener("click", () => {
    about();
  });
});
