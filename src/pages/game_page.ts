import GameBanner from "../models/games/game_banner";
import GameSlider from "../models/games/game_slider";

namespace GamePage {
    export function initialize(){
        GameBanner.showBanner();
        GameSlider.showSlider();
    }

}

export default GamePage;
