"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_banner_1 = __importDefault(require("../models/games/game_banner"));
var GamePage;
(function (GamePage) {
    function intialize() {
        game_banner_1.default.showBanner();
    }
    GamePage.intialize = intialize;
})(GamePage || (GamePage = {}));
exports.default = GamePage;
