import { elements } from "./app.js";

export function clearTopic(e) {
    e.preventDefault();


}


export async function postTopic(e) {
    e.preventDefault();




    try {
        let res = await fetch(url, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }




}