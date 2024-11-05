import { getData }  from "../../utils/fetch.js";
import { Reward } from "../types.js";

export namespace RewardBanner{
    export async function showReward(){
        const rewardPlace:Element | null = document.querySelector('.item-rewards');
        const rewardPlace2:Element | null = document.querySelector('.item-rewardz');
        const jsonUrl = '../../assets/json/reward.json';

        const data = await getData<{rewards:Reward[]}>(jsonUrl);
        if(data && rewardPlace){
            displayRewards(rewardPlace, data.rewards);
        }

        if(data && rewardPlace2){
            displayRewards(rewardPlace2, data.rewards);
        }
    }

    function displayRewards(container:Element, rewards:Reward[]) {
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
}

