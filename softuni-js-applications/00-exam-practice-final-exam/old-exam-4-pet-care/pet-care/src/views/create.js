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
        context.page.redirect(`/`);
    } catch (error) {
        alert(error.message);
    }
}

//=> ADD  @submit=${onCreate} on THE FORM
//=> FILL template
const createTemplate = () => html`
    <section id="createPage">
        <form @submit=${onCreate} class="createForm">
            <img src="./images/cat-create.jpg">
            <div>
                <h2>Create PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" placeholder="Max">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" placeholder="2 years">
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" placeholder="5kg">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                </div>
                <button class="btn" type="submit">Create Pet</button>
            </div>
        </form>
    </section>`;
