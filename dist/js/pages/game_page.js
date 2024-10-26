"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("../utils/fetch");
var GamePage;
(function (GamePage) {
    function showSlider() {
        const heroPlace = document.querySelector('.banner');
        const jsonUrl = '../../assets/json/banner_images.json';
        let indexes = 0;
        const data = (0, fetch_1.getData)(jsonUrl);
        if (data && data.images) {
            slider(heroPlace, data.images, indexes);
        }
        else
            console.log("Failed loading images");
    }
    GamePage.showSlider = showSlider;
    function slider(container, img, indexes) {
        showSlide(container, img, indexes);
        setInterval(() => {
            indexes = (indexes + 1) % img.length;
            showSlide(container, img, indexes);
        }, 3000);
    }
    function showSlide(container, img, indexes) {
        if (container) {
            container.innerHTML = '';
            const div = document.createElement('div');
            div.classList.add('hero-game');
            div.innerHTML = `
                <img src="${img[indexes]}" alt="games">
            `;
            container.appendChild(div);
        }
    }
})(GamePage || (GamePage = {}));
exports.default = GamePage;
