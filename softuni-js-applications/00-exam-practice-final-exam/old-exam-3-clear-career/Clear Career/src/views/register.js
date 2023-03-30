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
        if (data.password != data['re-password']) { 
            throw new Error('Passwords do not match!');
        }
        await register(data.email, data.password); 
        context.updateNav();
        context.page.redirect('/dashboard');
    } catch (error) {
        alert(error.message);
    }
}

function registerTemplate(onSubmit) {
    return html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="login-form">
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
        </div>
    </section>`;
}