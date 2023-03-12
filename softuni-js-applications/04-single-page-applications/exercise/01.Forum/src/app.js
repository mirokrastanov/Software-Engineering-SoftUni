import { loadHome } from "./home.js";
import { clearTopic, postTopic } from "./topic.js";

export const elements = {
    homeBtn: document.querySelector('#home-btn'),
    cancelBtn: document.querySelector('.cancel'),
    postBtn: document.querySelector('.public'),
};
elements.homeBtn.addEventListener('click', async (e) => loadHome(e));
elements.cancelBtn.addEventListener('click', async (e) => clearTopic(e));
elements.postBtn.addEventListener('click', async (e) => postTopic(e));




