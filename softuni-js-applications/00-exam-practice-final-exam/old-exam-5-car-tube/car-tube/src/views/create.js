import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/auth.js';

let context = null;
export async function creationPage(ctx) {
    context = ctx;
    ctx.render(createTemplate());
}

async function onCreate(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()); // CHANGE in case NOT all inputs are required
    // console.log(data);
    try {
        // validation below
        let invalid = Object.values(data).map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            throw new Error('All fields are required!');
        }
        data.year = Number(data.year);
        if (data.year < 0) {
            throw new Error('Year must be a positive number!');
        }
        data.price = Number(data.price);
        if (data.price < 0) {
            throw new Error('Price must be a positive number!');
        }
        await createItem(data); // CHECK auth.js to confirm if JSON.parse is needed
        context.page.redirect(`/dashboard`);
    } catch (error) {
        alert(error.message);
    }
}

//=> ADD  @submit=${onCreate} on THE FORM
//=> FILL template
const createTemplate = () => html`
    <section id="create-listing">
        <div class="container">
            <form @submit=${onCreate} id="create-form">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand">
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model">
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description">
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year">
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl">
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price">
                <hr>
                <input type="submit" class="registerbtn" value="Create Listing">
            </form>
        </div>
    </section>`;
