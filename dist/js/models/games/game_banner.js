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
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("../../utils/fetch");
var GameBanner;
(function (GameBanner) {
    function showBanner() {
        return __awaiter(this, void 0, void 0, function* () {
            const heroPlace = document.querySelector('.banner');
            const jsonUrl = '../../assets/json/banner_images.json';
            let indexes = 0;
            const data = yield (0, fetch_1.getData)(jsonUrl);
            if (data && heroPlace) {
                slider(heroPlace, data, indexes);
            }
        });
    }
    GameBanner.showBanner = showBanner;
    function slider(container, img, indexes) {
        showSlide(container, img, indexes);
        setInterval(() => {
            indexes = (indexes + 1) % img.length;
            showSlide(container, img, indexes);
        }, 3000);
    }
    function showSlide(container, img, indexes) {
        container.innerHTML = '';
        const div = document.createElement('div');
        div.classList.add('hero-game');
        div.innerHTML = `
            <img src="${img[indexes]}" alt="games">
        `;
        container.appendChild(div);
    }
})(GameBanner || (GameBanner = {}));
exports.default = GameBanner;
