import { getData } from "../../utils/fetch.js";
import { Tutor } from "../types.js";

export namespace HowItWorks{
    export async function showHowItWorks(){
        const howPlace:Element | null = document.querySelector('.item-how');
        const jsonUrl = '../../assets/json/misc.json'; 

        const data = await getData<{how_it_works:Tutor[]}>(jsonUrl);
        if(data && howPlace){
            display(howPlace, data.how_it_works);
        }
    }

    function display(container:Element, tutor:Tutor[]) {
        tutor.forEach(e => {
            const tutorItem = document.createElement("div");
            tutorItem.classList.add("howList");
            tutorItem.innerHTML = `
            <img src="${e.image}" alt="tutor">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
        `;
        container.appendChild(tutorItem);
        });
    }
}

