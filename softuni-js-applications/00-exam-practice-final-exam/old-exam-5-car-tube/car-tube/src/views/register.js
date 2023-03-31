import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/auth.js';

let context = null;
export async function registrationPage(ctx) {
    context = ctx;
    ctx.render(registerTemplate());
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
        if (data.password != data['repeatPass']) { //=> CHANGE the 2 password input[name]s
            throw new Error('Passwords do not match!');
        }
        await register(data.username, data.password); //=> CHANGE to what's needed & CHANGE in auth.js
        context.updateNav();
        context.page.redirect('/dashboard');
    } catch (error) {
        alert(error.message);
    }
}

//=> ADD @submit=${onSubmit} on the form or click if no <form>
//=> FILL template
const registerTemplate = () => html`
    <section id="register">
        <div class="container">
            <form @submit=${onSubmit} id="register-form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>
                <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
                <p>Already have an account?
                    <a href="/login">Sign in</a>.
                </p>
            </div>
        </div>
    </section>`; 
