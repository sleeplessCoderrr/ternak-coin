import getData from "../../utils/fetch";
import { Tutor } from "../types";

namespace HowItWorks{
    export async function showHowItWorks(){
        const howPlace:Element | null = document.querySelector('.item-how');
        const jsonUrl = '../../assets/json/misc.json'; 

        const data:Tutor[] | null = await getData(jsonUrl);
        if(data && howPlace){
            display(howPlace, data);
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

export default HowItWorks;