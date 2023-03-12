import { elements } from "./elements.js";

export function clearTopic(e) {
    e.preventDefault();


}


export async function postTopic(e) {
    e.preventDefault();

    let inputs = [elements.titleEl.value,
    elements.userEl.value, elements.postTextEl.value];
    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    try {
        if (inputs.some(x => x.trim() == '')) {
            throw new Error('All fields are required!')
        }
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: inputs[0],
                username: inputs[1],
                post: inputs[2],
            }),
        };
        let res = await fetch(url, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        elements.titleEl.value = '';
        elements.userEl.value = '';
        elements.postTextEl.value = '';
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

export async function loadTopics() {
    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    try {
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = await fetch(url, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}


export function createTopicElement(data) {


}