import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/auth.js';

let context = null;
export async function registrationPage(ctx) {
    context = ctx;
    ctx.render(registerTemplate(onSubmit));
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    try {
        // validation below
        let invalid = Object.values(data).map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            throw new Error('All fields are required!');
        }
        if (data.password != data['repeatPassword']) { //=> CHANGE the 2 password input[name]s
            throw new Error('Passwords do not match!');
        }
        await register(data.email, data.password); //=> CHANGE to what's needed & CHANGE in auth.js
        context.updateNav();
        context.page.redirect('/');
    } catch (error) {
        alert(error.message);
    }
}

//=> ADD @submit=${onSubmit} on the form or click if no <form>
//=> FILL template
function registerTemplate(onSubmit) {
    return html`
    <section id="registerPage">
        <form @submit=${onSubmit} class="registerForm">
            <img src="./images/logo.png" alt="logo" />
            <h2>Register</h2>
            <div class="on-dark">
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
            <div class="on-dark">
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
            <div class="on-dark">
                <label for="repeatPassword">Repeat Password:</label>
                <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
            </div>
            <button class="btn" type="submit">Register</button>
            <p class="field">
                <span>If you have profile click <a href="#">here</a></span>
            </p>
        </form>
    </section>`;
}

