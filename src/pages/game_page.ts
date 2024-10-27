import GameBanner from "../models/games/game_banner";

namespace GamePage {
    export function intialize(){
        GameBanner.showBanner();
    }

}

export default GamePage;