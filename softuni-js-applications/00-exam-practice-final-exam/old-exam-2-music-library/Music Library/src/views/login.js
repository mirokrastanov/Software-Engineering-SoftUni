// Login Page ( Only for guest users )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';

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
        context.page.redirect('/dashboard');
    } catch (error) {
        // console.log(error.message);
        alert(error.message);
    }
}

function loginTemplate(onSubmit) {
    return html`
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form @submit=${onSubmit} class="login-form">
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">
                    Not registered? <a href="javascript:void(0)">Create an account</a>
                </p>
            </form>
        </div>
    </section>`;
}