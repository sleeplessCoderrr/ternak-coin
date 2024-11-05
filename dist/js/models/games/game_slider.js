import { getData } from "../../utils/fetch.js";
export var GameSlider;
(function (GameSlider) {
    async function showSlider() {
        const gamePlace = document.getElementById("itemContainer");
        const jsonUrl = '../../assets/json/games.json';
        let indexes = 0;
        const data = await getData(jsonUrl);
        if (data && gamePlace) {
            start(gamePlace, data.game_collections2);
        }
        else {
            console.log("Failed loading images");
        }
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
