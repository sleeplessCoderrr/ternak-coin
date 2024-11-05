import { getData } from "../../utils/fetch.js";
export var Testimonials;
(function (Testimonials) {
    async function showTestimonials() {
        const testimonialPlace = document.querySelector('.item-testimonials');
        const jsonUrl = '../../assets/json/misc.json';
        const data = await getData(jsonUrl);
        if (data && testimonialPlace) {
            display(testimonialPlace, data.testimonials);
        }
    }
    Testimonials.showTestimonials = showTestimonials;
    function display(container, testimonials) {
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
})(Testimonials || (Testimonials = {}));
