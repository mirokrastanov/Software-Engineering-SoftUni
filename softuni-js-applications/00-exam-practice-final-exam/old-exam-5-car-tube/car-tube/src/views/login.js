import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';

let context = null;
export async function loginPage(ctx) {
    context = ctx;
    ctx.render(loginTemplate());
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
        await login(data.username, data.password);  //=> if needed CHANGE to what's needed & CHANGE in auth.js
        context.updateNav();
        context.page.redirect('/dashboard');
    } catch (error) {
        alert(error.message);
    }
}

//=> ADD @submit=${onSubmit} on the form or click if no <form>
const loginTemplate = () => html`
   <section id="login">
        <div class="container">
            <form @submit=${onSubmit} id="login-form" action="" method="">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>
                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>`; // FILL template
