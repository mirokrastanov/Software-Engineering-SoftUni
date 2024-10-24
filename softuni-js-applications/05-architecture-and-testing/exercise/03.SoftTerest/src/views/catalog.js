import { getAllIdeas } from "../api/data.js";

const section = document.querySelector('#dashboard-holder');
section.addEventListener('click', onDetails);


let ctx = null;
export async function showCatalog(context) {
    ctx = context;
    context.showSection(section);
    const ideas = await getAllIdeas();
    if (ideas.length == 0) {
        section.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`;
    } else {
        section.replaceChildren(...ideas.map(createIdea));
    }
}

function createIdea(idea) {
    const div = document.createElement('div');
    div.classList.add('card', 'overflow-hidden', 'current-card', 'details');
    div.style.widht = '20rem';
    div.style.height = '18rem';
    div.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a data-id="${idea._id}" class="btn" href="">Details</a>`;
    return div;
}

function onDetails(e) {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        let id = e.target.dataset.id;
        ctx.goTo(`/details`, id);
    }
}