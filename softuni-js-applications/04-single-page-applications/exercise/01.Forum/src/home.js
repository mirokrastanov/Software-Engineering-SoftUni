import { elements } from "./elements.js";
import { loadTopics } from "./topic.js";

export function loadHome(e) {
    e.preventDefault();
    document.querySelector('.new-topic-border').style.display = 'block';
    loadTopics();

}