import { Game } from "../types";
import getData from "../../utils/fetch";

namespace GameSlider{
    export async function showSlider(){
        const gamePlace: Element | null = document.getElementById("itemContainer");
        const jsonUrl:string = '../../assets/json/games.json';
        let indexes : number = 0;

        const data:Game[] | null = await getData(jsonUrl);
        if(data && gamePlace){
            start(gamePlace, data);
        } else {
            console.log("Failed loading images")
        }
    }

    function start(container:Element, games:Game[]){
        const dir = 1;

        displayGames(container, games);
        slider(container, 0);

        setInterval(()=>{
            slider(container, dir);
        }, 5000); 
    }

    function displayGames(container:Element | null, games:Game[]) {
        if(!container) return;

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
    function slider(container:Element, direction:number){
        if(!container) return;

        const items = container.querySelectorAll(".game-item");
        const itemWidth = (items[0] as HTMLElement).offsetWidth + 20; 
        const visibleItems = 3; 
    
        indexes += direction;
    
        if (indexes < 0) {
            indexes = items.length - visibleItems;
        } else if (indexes > items.length - 6) {
            indexes = 0;
        }
    
        const offset = -indexes * itemWidth;
        (container as HTMLElement).style.transform = `translateX(${offset}px)`;
    }
}

export default GameSlider;

