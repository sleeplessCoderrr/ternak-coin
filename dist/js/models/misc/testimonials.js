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
var Testimonials;
(function (Testimonials) {
    function showTestimonials() {
        return __awaiter(this, void 0, void 0, function* () {
            const testimonialPlace = document.querySelector('.item-testimonials');
            const jsonUrl = '../../assets/json/misc.json';
            const data = yield (0, fetch_1.default)(jsonUrl);
            if (data && testimonialPlace) {
                display(testimonialPlace, data);
            }
        });
    }
    Testimonials.showTestimonials = showTestimonials;
    function display(container, testimonials) {
        testimonials.forEach(e => {
            const testimonialItem = document.createElement("div");
            testimonialItem.classList.add("testimonial");
            testimonialItem.innerHTML = `
                <img src="${e.image}" alt="testimonial">
                <p>${e.description}</p>
            `;
            container.appendChild(testimonialItem);
        });
    }
})(Testimonials || (Testimonials = {}));
exports.default = Testimonials;
