import { getData } from "../../utils/fetch.js";
var TopChart;
(function (TopChart) {
    async function showTopChart() {
        const topChartPlace = document.querySelector('.gameCollection');
        const jsonUrl = '../../assets/json/games.json';
        const data = await getData(jsonUrl);
        if (data && topChartPlace) {
            display(topChartPlace, data);
        }
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
export default TopChart;
