import { getData } from '../../utils/fetch.js';
export var GameBanner;
(function (GameBanner) {
    async function showBanner() {
        const heroPlace = document.querySelector('.banner');
        const jsonUrl = '../../assets/json/banner_images.json';
        let indexes = 0;
        const data = await getData(jsonUrl);
        if (data && heroPlace) {
            slider(heroPlace, data, indexes);
        }
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
