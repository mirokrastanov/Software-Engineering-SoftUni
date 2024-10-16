export interface Endpoints {
    players: string;
    games: string;
}

export interface Team {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    name: string;
    full_name: string;
}

export interface Player {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    height_feet: null | number;
    height_inches: null | number;
    weight_pounds: null | number;
    team: Team;
}