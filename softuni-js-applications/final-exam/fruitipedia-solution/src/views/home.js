import { html } from '../../node_modules/lit-html/lit-html.js';

let contextSpecific = null;
export async function homePage(ctxAPP) {
    // console.log(ctxAPP);
    contextSpecific = ctxAPP;
    ctxAPP.render(homeLoadout());
}

const homeLoadout = () => html`
    <section id="home">
        <h1>Learn more about your favorite fruits</h1>
        <img src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png" alt="home" />
    </section>`;
