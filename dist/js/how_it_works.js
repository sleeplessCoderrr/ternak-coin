const how = [
    {
        img : "../assets/resources/illustration/sign_up.svg",
        title : "Sign Up",
        text : "Create your account"
    },
    {
        img : "../assets/resources/illustration/gaming.svg",
        title : "Play Games",
        text : "Choose from our exciting collection"
    },
    {
        img : "../assets/resources/illustration/coin.svg",
        title : "Earn Coins",
        text : "Get rewarded for playing"
    },
    {
        img : "../assets/resources/illustration/gifts.svg",
        title : "Redeem Rewards",
        text : "Exchange coins for awesome items"
    },
];
const howPlace = document.querySelector('.item-how');

function howItWorks(container, how){
    how.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('howList');
        div.innerHTML = `
            <img src="${item.img}" alt="icon">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        `;
        container.appendChild(div);
    });
}

howItWorks(howPlace, how);