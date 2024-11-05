import { GameBanner } from "../models/games/game_banner.js";
import { GameSlider } from "../models/games/game_slider.js";
import { TopChart } from "../models/games/top_chart.js";
export var GamePage;
(function (GamePage) {
    function initialize() {
        GameBanner.showBanner();
        GameSlider.showSlider();
        TopChart.showTopChart();
    }
    GamePage.initialize = initialize;
})(GamePage || (GamePage = {}));
