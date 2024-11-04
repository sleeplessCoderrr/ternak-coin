"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = __importDefault(require("../../utils/fetch"));
var RewardBanner;
(function (RewardBanner) {
    function showReward() {
        return __awaiter(this, void 0, void 0, function* () {
            const rewardPlace = document.querySelector('.item-rewards');
            const jsonUrl = '../../assets/json/reward.json';
            const data = yield (0, fetch_1.default)(jsonUrl);
            if (data && rewardPlace) {
                displayRewards(rewardPlace, data);
            }
        });
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
exports.default = RewardBanner;
