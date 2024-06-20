const heroPlace = document.querySelector('.banner');
const image = [
    {
        img: "../assets/resources/img/parkour-header.png",
    },
    {
        img: "../assets/resources/img/tracktor-header.png",
    },
    {
        img: "../assets/resources/img/mad-header.png",
    },
    {
        img: "../assets/resources/img/badminton-header.png",
    }
];

let indexes = 0;
function showSlide(container, img, index) {
    container.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('hero-game');
    div.innerHTML = `
        <img src="${img[index].img}" alt="game">
    `;
    container.appendChild(div);
}

function slider(container, img) {
    showSlide(container, img, indexes);

    setInterval(() => {
        indexes = (indexes + 1) % img.length;
        showSlide(container, img, indexes);
    }, 3000);
}

slider(heroPlace, image);

