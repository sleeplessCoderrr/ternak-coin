import getData from "../../utils/fetch";
import { Reward } from "../types";

export namespace RewardBanner{
    export async function showReward(){
        const rewardPlace:Element | null = document.querySelector('.item-rewards');
        const jsonUrl = '../../assets/json/reward.json';

        const data:Reward[] | null = await getData(jsonUrl);
        if(data && rewardPlace){
            displayRewards(rewardPlace, data);
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