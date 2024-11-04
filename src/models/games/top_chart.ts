import { Game } from "../types";
import getData from "../../utils/fetch";

namespace TopChart{
    export async function showTopChart(){
        const topChartPlace:Element | null = document.querySelector('.gameCollection');
        const jsonUrl = '../../assets/json/games.json';

        const data:Game[] | null = await getData(jsonUrl);
        if(data && topChartPlace){
            display(topChartPlace, data);
        }
    }

    function display(container:Element, games:Game[]) {
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

    
}

export default TopChart;