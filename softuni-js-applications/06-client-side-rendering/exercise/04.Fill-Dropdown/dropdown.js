import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';

const body = document.querySelector('body');
const contentTemplate = (data) => html`
<h1>Dropdown Menu</h1>
<article>
    <div>
        <select id="menu">
            ${Object.values(data).map(x =>
                html`<option value=${x._id}>${x.text}</option>`)}
        </select>
    </div>
    <form>
        <label for="itemText">
            Text: 
        </label>
        <input type="text" id="itemText" />
        <input @click=${addItem} type="submit" value="Add">
    </form>
</article>
`;

async function update() {
    let serverData = await request('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    render(contentTemplate(serverData), body);
    document.querySelector('#itemText').value = '';
}
update();

async function request(url, options) {
    const res = await fetch(url, options);
    return await res.json();
}

async function addItem(e) {
    e.preventDefault();
    let text = document.querySelector('#itemText').value;
    // if (inputValue == '') {
    //     console.log('The text should not be empty');
    //     return;
    // }
    let bodyObj = { text };
    let url = 'http://localhost:3030/jsonstore/advanced/dropdown';
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyObj),
    };
    let postRes = await request(url, options);
    update();
}