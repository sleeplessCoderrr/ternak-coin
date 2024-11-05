import { getData } from "../../utils/fetch.js";
export var HowItWorks;
(function (HowItWorks) {
    async function showHowItWorks() {
        const howPlace = document.querySelector('.item-how');
        const jsonUrl = '../../assets/json/misc.json';
        const data = await getData(jsonUrl);
        if (data && howPlace) {
            display(howPlace, data.how_it_works);
        }
    }
    HowItWorks.showHowItWorks = showHowItWorks;
    function display(container, tutor) {
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
})(HowItWorks || (HowItWorks = {}));
