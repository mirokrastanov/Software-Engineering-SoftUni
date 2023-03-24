import { render, html } from '../../node_modules/lit-html/lit-html.js';

export async function catalogPage(ctx) {
    const test = html`<h1>Test title</h1>`;
    ctx.render(test);
    console.log('catalog');
}