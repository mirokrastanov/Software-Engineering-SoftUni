// Login Page ( Only for guest users )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';
import { errorHandler } from '../api/error.js';

let context = null;
export async function loginPage(ctx) {
    context = ctx;
    ctx.render(loginTemplate(onSubmit));
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
        // validation - done
        if (email == '' || password == '') {
            throw new Error('Both fields are required!');
        }
        await login(email, password);
        context.updateNav();
        context.page.redirect('/allMemes');
    } catch (error) {
        // console.log(error.message);
        errorHandler(error.message);
    }
}

function loginTemplate(onSubmit) {
    return html`
    <section id="login">
        <form @submit=${onSubmit} id="login-form">
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>`;
}