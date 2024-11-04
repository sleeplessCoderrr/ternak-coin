"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_page_1 = __importDefault(require("./pages/game_page"));
document.addEventListener("DOMContentLoaded", () => {
    //!!!!!needed to add the dataset in each page
    const currentPage = document.body.dataset.page;
    switch (currentPage) {
        case "games":
            game_page_1.default.initialize();
            break;
        // case "about":
        //     AboutPage.initialize();
        //     break;
        default:
            console.error("Page not recognized");
    }
});
