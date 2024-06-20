const gameCollectionPlace = document.querySelectorAll('.gameCollection');
const gameCollection1 = [
    {
        img: "../assets/resources/img/chemistry.png",
        title: "ChemIsTry",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/conncect.png",
        title: "Connect iT",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/disrispect.png",
        title: "Mathematical Disrispect",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/it.png",
        title: "Quiz It",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/math-trivia.png",
        title: "Math Trivia",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/mind.png",
        title: "Mind Games",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/badminton.png",
        title: "Badmin League",
        reward: "10",  
    },
    {   
        img: "../assets/resources/img/multiplication.png",
        title: "Multiplication",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/search.png",
        title: "Word Search",
        reward: "10",  
    },
    {
        img: "../assets/resources/img/thumb.png",
        title: "Thumb War",
        reward: "10",  
    },
];

function displayGamesCollection1(container, games) {
    games.forEach(element => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-itemz");
        gameItem.innerHTML = `
            <img src="${element.img}" alt="game">
            <h3>${element.title}</h3>
            <p>${element.reward} points</p>
        `;
        container.appendChild(gameItem);
    });
}

gameCollectionPlace.forEach(element => {
    displayGamesCollection1(element, gameCollection1);
});