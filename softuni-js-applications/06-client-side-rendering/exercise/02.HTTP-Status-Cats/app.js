import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js'; 
import { cats } from './catSeeder.js';

const catsTemplate = (data) => html`
<ul>
    ${data.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${toggle} class="showBtn">Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p class="card-text">${cat.statusMessage}</p>
            </div>
        </div>
    </li>
    `)}
</ul>
`;

function toggle(e) {
    e.preventDefault();
    let el = e.target;
    let content = el.parentElement.querySelector('div.status');
    el.textContent = el.textContent == 'Show status code'
        ? 'Hide status code'
        : 'Show status code';
    content.style.display = content.style.display == 'block'
        ? 'none'
        : 'block';
}

const allCats = document.querySelector('#allCats');
render(catsTemplate(cats), allCats);