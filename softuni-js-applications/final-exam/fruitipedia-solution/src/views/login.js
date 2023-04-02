import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';

let contextSpecific = null;
export async function loginPage(ctxAPP) {
    contextSpecific = ctxAPP;
    ctxAPP.render(loginLoadout());
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    try {
        let invalid = Object.values(data).map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            throw new Error('All fields are required!');
        }
        await login(data.email, data.password); 
        contextSpecific.updateNav();
        contextSpecific.page.redirect('/');
    } catch (error) {
        alert(error.message);
    }
}

const loginLoadout = () => html`
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form @submit=${onSubmit} class="login-form">
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">
                    Not registered? <a href="/register">Create an account</a>
                </p>
            </form>
        </div>
    </section>`;
