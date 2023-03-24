import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/api.js';
import { getMyItems } from '../api/auth.js';
import { createItemTemplate } from './catalog.js';

let context = null;
export async function myFurniturePage(ctx) {
    context = ctx;
    const userData = JSON.parse(localStorage.getItem('userData'));
    const id = userData._id;
    const items = await getMyItems(id);
    ctx.render(myItemsTemplate(items))

}

function myItemsTemplate(items) {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${Object.values(items).map(x => createItemTemplate(x)) }
    </div>`;
}
