import "./styles.css";
import renderHome from "./pages/home.js";
import renderMenu from "./pages/menu.js";
import renderAbout from "./pages/about.js";

const nav = document.getElementById("navbar");
const logo = document.getElementById("logo");

addEventListener("DOMContentLoaded", () => {
    renderHome();
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const aboutBtn = document.getElementById("about");
    

    logo.addEventListener("click", () => {
        document.getElementById("content").innerHTML = "";
        renderHome();
    }
    );
    homeBtn.addEventListener("click", () => {
        document.getElementById("content").innerHTML = "";
        renderHome();
    });
    menuBtn.addEventListener("click", () => {
        document.getElementById("content").innerHTML = "";
        renderMenu();
    });
    aboutBtn.addEventListener("click", () => {
        document.getElementById("content").innerHTML = "";
        renderAbout();
    });
});