export interface BannerCollection {
    image: string[];
}

export interface Game {
    image: string;
    title: string;
    reward: number;
}

export interface GameCollection {
    games: Game[];
}

export interface Reward {
    image: string;
    title: string;
    reward: string;
    point: number;
}
