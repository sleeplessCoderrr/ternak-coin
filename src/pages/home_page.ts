import { GameSlider}  from "../models/games/game_slider.js";
import { HowItWorks } from "../models/misc/how_it_works.js";
import { Testimonials } from "../models/misc/testimonials.js";
import { RewardBanner } from "../models/reward/reward_banner.js";

export namespace HomePage {
    export function initialize(){
        GameSlider.showSlider();
        HowItWorks.showHowItWorks();
        RewardBanner.showReward();
        Testimonials.showTestimonials();
    }
}
