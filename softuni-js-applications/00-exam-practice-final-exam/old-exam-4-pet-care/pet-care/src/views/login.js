import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';

let context = null;
export async function loginPage(ctx) {
    context = ctx;
    ctx.render(loginTemplate(onSubmit));
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    try {
        // validation below
        let invalid = Object.values(data).map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            throw new Error('All fields are required!');
        }
        await login(data.email, data.password);  //=> if needed CHANGE to what's needed & CHANGE in auth.js
        context.updateNav();
        context.page.redirect('/');
    } catch (error) {
        alert(error.message);
    }
}

function loginTemplate(onSubmit) { //=> ADD @submit=${onSubmit} on the form or click if no <form>
    return html`
    <section id="loginPage">
        <form @submit=${onSubmit} class="loginForm">
            <img src="./images/logo.png" alt="logo" />
            <h2>Login</h2>
            <div>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
            <div>
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
            <button class="btn" type="submit">Login</button>
            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </form>
    </section>`;
}
