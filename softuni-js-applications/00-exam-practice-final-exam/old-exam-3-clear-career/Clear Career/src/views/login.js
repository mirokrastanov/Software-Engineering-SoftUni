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
        await login(data.email, data.password); 
        context.updateNav();
        context.page.redirect('/dashboard');
    } catch (error) {
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
                    Not registered? <a href="#">Create an account</a>
                </p>
            </form>
        </div>
    </section>`;
}
