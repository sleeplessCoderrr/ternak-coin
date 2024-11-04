import { Testimonial } from "../types";
import getData from "../../utils/fetch";

namespace Testimonials{
    export async function showTestimonials(){
        const testimonialPlace:Element | null = document.querySelector('.item-testimonials');
        const jsonUrl = '../../assets/json/misc.json';

        const data:Testimonial[] | null = await getData(jsonUrl);
        if(data && testimonialPlace){
            display(testimonialPlace, data);
        }
    }

    function display(container:Element, testimonials:Testimonial[]) {
        testimonials.forEach(e => {
            const testimonialItem = document.createElement("div");
            testimonialItem.classList.add("testimonial");
            testimonialItem.innerHTML = `
                <img src="${e.image}" alt="testimonial">
                <p>${e.description}</p>
            `;
            container.appendChild(testimonialItem);
        });
    }
}

export default Testimonials;