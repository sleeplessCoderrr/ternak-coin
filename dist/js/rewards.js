const rewardPlace = document.querySelector('.item-rewards');
const rewardPlacez = document.querySelector('.item-rewardz');
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
const rewardz = [
    {
        img : "../assets/resources/img/sepatu.png",  
        title : "Nike Air Force 1 React",
        reward : "Shoes",
        poin : '10'
    },
    {
        img : "../assets/resources/img/laptop.png",  
        title : "Asus ROG Strix G15",
        reward : "Laptop",
        poin : '10'
    },
    {
        img : "../assets/resources/img/earphone.png",  
        title : "NGWM 01 Mini Wireless",
        reward : "EarBud",
        poin : '10'
    },
    {
        img : "../assets/resources/img/jam.png",  
        title : "SKMEI Smartwatch",
        reward : "Smart Watch",
        poin : '10'
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

function displayRewardz(container, rewards) {
    rewards.forEach(element => {
        const rewardItem = document.createElement("div");
        rewardItem.classList.add("reward-item");
        rewardItem.innerHTML = `
            <a href="/pages/nike.html"><img src="${element.img}" alt="reward">
            <h3>${element.title}</h3>
            <div class="reward-info">
                <p>${element.reward}</p>
                <p class="p-rewa">${element.poin} Poin</p>
            </div>
        `;
        container.appendChild(rewardItem);
    });
}

if(rewardPlace) displayRewards(rewardPlace, rewards);
if(rewardPlacez) displayRewardz(rewardPlacez, rewardz);