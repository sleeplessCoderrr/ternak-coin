import { getData } from "../../utils/fetch.js";
export var TopChart;
(function (TopChart) {
    async function showTopChart() {
        const topChartPlace = document.querySelector('.gameCollection');
        const topChartPlace2 = document.getElementById('gameList');
        const jsonUrl = '../../assets/json/games.json';
        const data = await getData(jsonUrl);
        if (data && topChartPlace) {
            display(topChartPlace, data.games_collections);
        }
        if (data && topChartPlace2) {
            display(topChartPlace2, data.games_collections);
        }
    }
    TopChart.showTopChart = showTopChart;
    function display(container, games) {
        games.forEach(e => {
            const gameItem = document.createElement("div");
            gameItem.classList.add("game-itemz");
            gameItem.innerHTML = `
                <img src="${e.image}" alt="game">
                <h3>${e.title}</h3>
                <p>${e.reward} points</p>
            `;
            container.appendChild(gameItem);
        });
    }
})(TopChart || (TopChart = {}));
