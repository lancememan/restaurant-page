import "./styles.css";
import renderHome from "./pages/home.js";
import renderMenu from "./pages/menu.js";
import renderAbout from "./pages/about.js";

const logo = document.getElementById("logo");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");
const buttons = document.querySelectorAll(".btn");


addEventListener("DOMContentLoaded", () => {
    loadContent();
});

function loadContent(page) {
    document.getElementById("content").innerHTML = "";

    switch (page) {
        case "home":
            renderHome();
            break;
        case "menu":
            renderMenu();
            break;
        case "about":
            renderAbout();
            break;
        default:
            renderHome();
    }
}

logo.addEventListener("click", () => loadContent('home'));
homeBtn.addEventListener("click", () => loadContent('home'));
menuBtn.addEventListener("click", () => loadContent('menu'));
aboutBtn.addEventListener("click", () => loadContent('about'));

document.body.addEventListener("click", function(event) {
    console.log('asdasd');
    // Check if the clicked element is a button with the class 'btn' and has a 'data-link' attribute
    if (event.target.classList.contains('btn') && event.target.hasAttribute('data-link')) {
        const page = event.target.getAttribute('data-link');
        loadContent(page);
        console.log('test');
    }
});