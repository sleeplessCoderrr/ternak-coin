import GamePage from "./pages/game_page";

document.addEventListener("DOMContentLoaded", ()=>{
    //!!!!!needed to add the dataset in each page
    const currentPage = document.body.dataset.page; 
    switch (currentPage) {
        case "games":
            GamePage.intialize();
            break;
        // case "about":
        //     AboutPage.initialize();
        //     break;
        default:
            console.error("Page not recognized");
    }
})



