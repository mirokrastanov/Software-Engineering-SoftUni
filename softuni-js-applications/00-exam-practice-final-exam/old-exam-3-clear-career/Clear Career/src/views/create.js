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
        await createItem(data); // CHECK auth.js to confirm if JSON.parse is needed
        context.page.redirect(`/dashboard`);
    } catch (error) {
        alert(error.message);
    }
}

//=> ADD  @submit=${onCreate} on THE FORM
//=> FILL template
const createTemplate = () => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />
            <button type="submit">post</button>
        </form>
    </div>
</section>`;
