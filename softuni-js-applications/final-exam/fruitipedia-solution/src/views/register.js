import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/auth.js';

let contextSpecific = null;
export async function registrationPage(ctxAPP) {
    contextSpecific = ctxAPP;
    ctxAPP.render(registerLoadout());
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    try {
        let invalid = Object.values(data).map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            throw new Error('All fields are required!');
        }
        if (data.password != data['re-password']) { 
            throw new Error('Passwords do not match!');
        }
        await register(data.email, data.password); 
        contextSpecific.updateNav();
        contextSpecific.page.redirect('/');
    } catch (error) {
        alert(error.message);
    }
}

const registerLoadout = () => html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="register-form">
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
        </div>
    </section>`; 