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
var TopChart;
(function (TopChart) {
    function showTopChart() {
        return __awaiter(this, void 0, void 0, function* () {
            const topChartPlace = document.querySelector('.gameCollection');
            const jsonUrl = '../../assets/json/games.json';
            const data = yield (0, fetch_1.default)(jsonUrl);
            if (data && topChartPlace) {
                display(topChartPlace, data);
            }
        });
    }
    TopChart.showTopChart = showTopChart;
    function display(container, games) {
        games.forEach(e => {
            const gameItem = document.createElement("div");
            gameItem.classList.add("game-item");
            gameItem.innerHTML = `
                <img src="${e.image}" alt="game">
                <h3>${e.title}</h3>
                <p>${e.reward}</p>
            `;
            container.appendChild(gameItem);
        });
    }
})(TopChart || (TopChart = {}));
exports.default = TopChart;
