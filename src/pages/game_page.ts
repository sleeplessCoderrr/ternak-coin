import { GameBanner } from "../models/games/game_banner.js";
import { GameSlider } from "../models/games/game_slider.js";
import { TopChart } from "../models/games/top_chart.js";

export namespace GamePage {
    export function initialize(){
        GameBanner.showBanner();
        GameSlider.showSlider();
        TopChart.showTopChart();
    }
}

