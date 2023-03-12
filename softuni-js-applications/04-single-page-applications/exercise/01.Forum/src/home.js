import { elements } from "./elements.js";
import { loadTopics } from "./topic.js";

export function loadHome(e) {
    e.preventDefault();
    elements.homeForm.style.display = 'block';
    loadTopics();

}