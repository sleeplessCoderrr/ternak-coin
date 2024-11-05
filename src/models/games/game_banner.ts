import { Banner } from '../types.js';
import { getData }  from '../../utils/fetch.js';

export namespace GameBanner {
    export async function showBanner (){
        const heroPlace : Element | null = document.querySelector('.banner');
        const jsonUrl = '../../assets/json/banner_images.json'
        let indexes : number = 0;

        const data:Banner[] | null = await getData(jsonUrl);
        if(data && heroPlace){
            slider(heroPlace, data, indexes);
        } 
    }

    function slider(container:Element, img:Banner[], indexes:number) {
        showSlide(container, img, indexes);

        setInterval(() => {
            indexes = (indexes + 1) % img.length;
            showSlide(container, img, indexes);
        }, 3000);
    }

    function showSlide(container:Element, img:Banner[], indexes:number) {
        container.innerHTML = '';
        const div:Element = document.createElement('div');
        div.classList.add('hero-game');
        div.innerHTML = `
            <img src="${img[indexes]}" alt="games">
        `;
        container.appendChild(div);
    }

}

