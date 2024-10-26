import { BannerCollection } from '../models/types'
import { getData } from '../utils/fetch';

namespace GamePage {
    export function showSlider(){
        const heroPlace : Element | null = document.querySelector('.banner');
        const jsonUrl = '../../assets/json/banner_images.json'
        let indexes : number = 0;

        const data:BannerCollection | null = getData(jsonUrl);
        if(data && data.images){
            slider(heroPlace, data.images, indexes);
        } else console.log("Failed loading images")
    }

    function slider(container:Element | null, img:string[], indexes:number) {
        showSlide(container, img, indexes);
    
        setInterval(() => {
            indexes = (indexes + 1) % img.length;
            showSlide(container, img, indexes);
        }, 3000);
    }

    function showSlide(container:Element | null, img:string[], indexes:number) {
        if(container){
            container.innerHTML = '';
            const div:Element = document.createElement('div');
            div.classList.add('hero-game');
            div.innerHTML = `
                <img src="${img[indexes]}" alt="games">
            `;
            container.appendChild(div);
        }
    }

}

export default GamePage;