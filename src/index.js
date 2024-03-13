import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";
import "./styles/main.css"; // is this needed here?

document.addEventListener("DOMContentLoaded", home);
// document.addEventListener("DOMContentLoaded", menu);
// document.addEventListener("DOMContentLoaded", about);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
