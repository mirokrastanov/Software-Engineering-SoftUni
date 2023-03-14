import { elements } from './app.js';

async function request(url, options) {
    try {
        let res = await fetch(url, options);
        let data = await res.json();
        if (!res.ok) {
            return null;
        }
        return data;
    } catch (error) {
        return null;
    }
}

export {
    request,

}