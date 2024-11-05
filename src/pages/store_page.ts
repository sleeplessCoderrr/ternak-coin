import { RewardBanner } from "../models/reward/reward_banner.js";

export namespace Store{
    export function initialize(){
        RewardBanner.showReward();
    }
}