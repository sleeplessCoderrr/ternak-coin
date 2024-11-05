import { getData } from "../../utils/fetch.js";
export var RewardBanner;
(function (RewardBanner) {
    async function showReward() {
        const rewardPlace = document.querySelector('.item-rewards');
        const jsonUrl = '../../assets/json/reward.json';
        const data = await getData(jsonUrl);
        if (data && rewardPlace) {
            displayRewards(rewardPlace, data.rewards);
        }
    }
    RewardBanner.showReward = showReward;
    function displayRewards(container, rewards) {
        rewards.forEach(element => {
            const rewardItem = document.createElement("div");
            rewardItem.classList.add("reward-item");
            rewardItem.innerHTML = `
                <img src="${element.image}" alt="reward">
                <h3>${element.title}</h3>
                <p>${element.reward}</p>
            `;
            container.appendChild(rewardItem);
        });
    }
})(RewardBanner || (RewardBanner = {}));
