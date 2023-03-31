import { html } from '../../node_modules/lit-html/lit-html.js';
import { editItem, getItemDetails } from '../api/auth.js';

let context = null;
export async function editPage(ctx) {
    context = ctx;
    let item = await getItemDetails(ctx.params.id);
    ctx.render(editTemplate(item));
}

async function onEdit(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let id = form.dataset.id;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); // CHANGE in case NOT all inputs are required
    // console.log(data);
    try {
        // validation below
        let invalid = Object.values(data).map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            throw new Error('All fields are required!');
        }
        await editItem(id, data);  // CHECK auth.js to confirm if JSON.parse is needed
        context.page.redirect(`/details/${id}`);
    } catch (error) {
        alert(error.message);
    }
}

//=> ADD .value=${item.ATRname} respectively on EACH INPUT
//=> ADD data-id=${item._id} @submit=${onEdit} on THE FORM
//=> FILL template
const editTemplate = (item) => html`
    <section id="editPage">
        <form data-id=${item._id} @submit=${onEdit} class="editForm">
            <img src="../${item.image}">
            <div>
                <h2>Edit PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input .value=${item.name} name="name" id="name" type="text" value="Max">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input .value=${item.breed} name="breed" id="breed" type="text" value="Shiba Inu">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input .value=${item.age} name="age" id="age" type="text" value="2 years">
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input .value=${item.weight} name="weight" id="weight" type="text" value="5kg">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input .value=${item.image} name="image" id="image" type="text" value="./image/dog.jpeg">
                </div>
                <button class="btn" type="submit">Edit Pet</button>
            </div>
        </form>
    </section>`;
