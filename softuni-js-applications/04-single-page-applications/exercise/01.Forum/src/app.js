import { elements } from "./elements.js";
import { loadHome } from "./home.js";
import { clearTopic, postTopic } from "./topic.js";

export function main() {
    loadHome();

    elements.homeBtn.addEventListener('click', async (e) => loadHome(e));
    elements.cancelBtn.addEventListener('click', async (e) => clearTopic(e));
    elements.postBtn.addEventListener('click', async (e) => postTopic(e));
}

main();