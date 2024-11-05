export interface Banner {
    image: string;
}

export interface Game {
    image: string;
    title: string;
    reward: number;
}

export interface Reward {
    image: string;
    title: string;
    reward: string;
    point: number;
}

export interface Tutor{
    image: string;
    title: string;
    description: string;
}

export interface Testimonial{
    image: string;
    description: string;
}