const testimonialPlace = document.querySelector('.item-testimonials');
const testimonials = [
    {
        text : "“Ternak Coin is amazing! Fun games and real rewards. Highly recommended!”",
        img : "../assets/resources/element/yupen.png",
    },
    {
        text : "“Hooked since day one. Great games and community. Love it!”",
        img : "../assets/resources/element/kayla.png",
    },
    {
        text : "“Best gaming platform ever! Fun and rewarding experience.”",
        img : "../assets/resources/element/mici.png",
    },
];

function displayTestimonials(container, testimonials){
    testimonials.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('testimonial');
        div.innerHTML = `
            <p>${item.text}</p>
            <img src="${item.img}" alt="user">
        `;
        container.appendChild(div);
    });
}

displayTestimonials(testimonialPlace, testimonials);