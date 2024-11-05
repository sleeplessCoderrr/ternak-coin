import { placeFooter } from "./models/footer/footer.js";
import { placeNavbar } from "./models/navbar/navbar.js";
import { GamePage } from "./pages/game_page.js";
import { HomePage } from "./pages/home_page.js";
let isNavbarRendered = false;
let isFooterRendered = false;
let isGamePageInitialized = false;
let isHomeInitialized = false;
document.addEventListener("DOMContentLoaded", () => {
    if (!isNavbarRendered) {
        placeNavbar();
        isNavbarRendered = true;
    }
    if (!isFooterRendered) {
        placeFooter();
        isFooterRendered = true;
    }
    const currentPage = document.body.dataset.page;
    switch (currentPage) {
        case "games":
            if (!isGamePageInitialized) {
                GamePage.initialize();
                isGamePageInitialized = true;
            }
            break;
        case "home":
            if (!isHomeInitialized) {
                HomePage.initialize();
                isHomeInitialized = true;
            }
            break;
        default:
            console.error("Page not recognized");
    }
});
