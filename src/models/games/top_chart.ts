import { Game } from "../types.js";
import { getData } from "../../utils/fetch.js";

export namespace TopChart{
    export async function showTopChart(){
        const topChartPlace:Element | null = document.querySelector('.gameCollection');
        const topChartPlace2:Element | null = document.getElementById('gameList');
        const jsonUrl = '../../assets/json/games.json';

        const data = await getData<{games_collections:Game[]}>(jsonUrl);
        if(data && topChartPlace){
            display(topChartPlace, data.games_collections);
        }

        if(data && topChartPlace2){
            display(topChartPlace2, data.games_collections);
        }
    }

    function display(container:Element, games:Game[]) {
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

    
}

