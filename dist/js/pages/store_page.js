import { RewardBanner } from "../models/reward/reward_banner.js";
export var Store;
(function (Store) {
    function initialize() {
        RewardBanner.showReward();
    }
    Store.initialize = initialize;
})(Store || (Store = {}));
