import {GameHeroCollection} from './GameCollection';

const heroPlace : Element | null = document.querySelector('.banner');
let index : number = 0;

class GameBanner{
    heroPlace:Element | null;
    constructor(heroPlace:Element) {
        this.heroPlace = heroPlace;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const showSlide = (container:Element, img:string, index:number):void => {
        container.innerHTML = '';
        const div:Element = document.createElement('div');
        div.classList.add('hero-game');
        div.innerHTML = `
        <img src="${img[index]}" alt="games">
    `;
        container.appendChild(div);
    }
})