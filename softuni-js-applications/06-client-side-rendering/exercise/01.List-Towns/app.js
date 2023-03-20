import { html, render } from '../node_modules/lit-html/lit-html.js';

const input = document.querySelector('#towns');
const root = document.querySelector('#root');
const townsTemplate = (data) => html`
<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>
`;

document.addEventListener('click', loadTowns);

function loadTowns(e) {
    e.preventDefault();
    if (input.value.trim() != '') {
        const towns = input.value.split(', ');
        input.value = '';

        render(townsTemplate(towns), root);
    }
}