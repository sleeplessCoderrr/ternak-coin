const games = [
    {   
        img: "../assets/resources/img/nation.png",
        title: "Nation Guess",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/thumb.png",
        title: "Thumb War",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/bomb.png",
        title: "Bomb It",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/2k-shoot.png",
        title: "2k shoot",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/brick-breaker.png",
        title: "Brick Breaker",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/parkour.png",
        title: "Parkour Race",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/trackto.png",
        title: "Tracktor Off-road",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/mad.png",
        title: "Mad King",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/badminton.png",
        title: "Badmin League",
        reward: "10",  
    },
];

const gamePlace = document.getElementById("itemContainer");

function displayGames(container, games) {
    games.forEach(element => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");
        gameItem.innerHTML = `
            <img src="${element.img}" alt="game">
            <h3>${element.title}</h3>
            <p>${element.reward} points</p>
        `;
        container.appendChild(gameItem);
    });
}

let currentIndex = 0; // Track current index for the slider

function slider(container, direction){
    const items = container.querySelectorAll(".game-item");
    const itemWidth = items[0].offsetWidth + 20; // Item width plus margin
    const visibleItems = 3; // Number of items visible at a time

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - visibleItems;
    } else if (currentIndex > items.length - 6) {
        currentIndex = 0;
    }

    const offset = -currentIndex * itemWidth;
    container.style.transform = `translateX(${offset}px)`;
}

document.addEventListener("DOMContentLoaded", () => {
    displayGames(gamePlace, games);

    // Initialize slider
    slider(gamePlace, 0);

    // Auto-slide to the right every 5 seconds
    setInterval(() => {
        slider(gamePlace, 1);
    }, 5000);
});
