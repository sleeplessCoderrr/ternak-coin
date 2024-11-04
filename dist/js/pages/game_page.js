"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_banner_1 = __importDefault(require("../models/games/game_banner"));
const game_slider_1 = __importDefault(require("../models/games/game_slider"));
var GamePage;
(function (GamePage) {
    function initialize() {
        game_banner_1.default.showBanner();
        game_slider_1.default.showSlider();
    }
    GamePage.initialize = initialize;
})(GamePage || (GamePage = {}));
exports.default = GamePage;
