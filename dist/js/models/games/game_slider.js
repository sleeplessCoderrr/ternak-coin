"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = __importDefault(require("../../utils/fetch"));
var GameSlider;
(function (GameSlider) {
    function showSlider() {
        return __awaiter(this, void 0, void 0, function* () {
            const gamePlace = document.getElementById("itemContainer");
            const jsonUrl = '../../assets/json/games.json';
            let indexes = 0;
            const data = yield (0, fetch_1.default)(jsonUrl);
            if (data && data.games) {
                console.log(data.games);
                start(gamePlace, data.games);
            }
            else {
                console.log("Failed loading images");
            }
        });
    }
    GameSlider.showSlider = showSlider;
    function start(container, games) {
        const dir = 1;
        displayGames(container, games);
        slider(container, 0);
        setInterval(() => {
            slider(container, dir);
        }, 5000);
    }
    function displayGames(container, games) {
        if (!container)
            return;
        games.forEach(element => {
            const gameItem = document.createElement("div");
            gameItem.classList.add("game-item");
            gameItem.innerHTML = `
                <img src="${element.image}" alt="game">
                <h3>${element.title}</h3>
                <p>${element.reward} points</p>
            `;
            container.appendChild(gameItem);
        });
    }
    let indexes = 0;
    function slider(container, direction) {
        if (!container)
            return;
        const items = container.querySelectorAll(".game-item");
        const itemWidth = items[0].offsetWidth + 20;
        const visibleItems = 3;
        indexes += direction;
        if (indexes < 0) {
            indexes = items.length - visibleItems;
        }
        else if (indexes > items.length - 6) {
            indexes = 0;
        }
        const offset = -indexes * itemWidth;
        container.style.transform = `translateX(${offset}px)`;
    }
})(GameSlider || (GameSlider = {}));
exports.default = GameSlider;
