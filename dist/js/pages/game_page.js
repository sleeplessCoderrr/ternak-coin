import { GameBanner } from "../models/games/game_banner.js";
import { GameSlider } from "../models/games/game_slider.js";
export var GamePage;
(function (GamePage) {
    function initialize() {
        GameBanner.showBanner();
        GameSlider.showSlider();
    }
    GamePage.initialize = initialize;
})(GamePage || (GamePage = {}));
