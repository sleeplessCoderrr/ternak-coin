import { BannerCollection } from '../models/types'
import { getData } from '../utils/fetch';

namespace GamePage {
    export function showSlider(){
        const heroPlace : Element | null = document.querySelector('.banner');
        const jsonUrl = '../../assets/json/banner_images.json'
        let index : number = 0;

        const data = getData(jsonUrl);
        

    }

    const showSlide = (container:Element, img:string, index:number):void => {
        container.innerHTML = '';
        const div:Element = document.createElement('div');
        div.classList.add('hero-game');
        div.innerHTML = `
        <img src="${img[index]}" alt="games">
    `;
        container.appendChild(div);
    }
}

export default{GamePage}