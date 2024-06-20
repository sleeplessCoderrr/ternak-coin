const rewardPlace = document.querySelector('.item-rewards');
const rewards = [
    {
        img : "../assets/resources/img/sepatu.png",  
        title : "Nike Air Force 1 React",
        reward : "Shoes"
    },
    {
        img : "../assets/resources/img/laptop.png",  
        title : "Asus ROG Strix G15",
        reward : "Laptop"
    },
    {
        img : "../assets/resources/img/earphone.png",  
        title : "NGWM 01 Mini Wireless",
        reward : "EarBud"
    },
    {
        img : "../assets/resources/img/jam.png",  
        title : "SKMEI Smartwatch",
        reward : "Smart Watch"
    }
];


function displayRewards(container, rewards) {
    rewards.forEach(element => {
        const rewardItem = document.createElement("div");
        rewardItem.classList.add("reward-item");
        rewardItem.innerHTML = `
            <img src="${element.img}" alt="reward">
            <h3>${element.title}</h3>
            <p>${element.reward}</p>
        `;
        container.appendChild(rewardItem);
    });
}

displayRewards(rewardPlace, rewards);