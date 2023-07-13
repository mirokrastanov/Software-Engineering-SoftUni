import { Endpoints } from "./types";

export const proxy: string = 'https://proxy-1.mirokrastanov.repl.co/';

export const apiDomain: string = 'www.balldontlie.io/api/v1';

export const endpoints: any = { // any to avoid property checking errors
    players: apiDomain + '/players',
    games: apiDomain + '/games',
    teams: apiDomain + '/teams',
    stats: apiDomain + '/stats',
};

