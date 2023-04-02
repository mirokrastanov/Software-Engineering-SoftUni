import { html } from '../../node_modules/lit-html/lit-html.js';
import { editItem, getItemDetails } from '../api/auth.js';

let contextSpecific = null;
export async function editPage(ctxAPP) {
    contextSpecific = ctxAPP;
    let item = await getItemDetails(ctxAPP.params.id);
    ctxAPP.render(editLoadout(item));
}

async function onEdit(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let id = form.dataset.id;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); 
    // console.log(data);
    try {
        let invalid = Object.values(data).map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            throw new Error('All fields are required!');
        }
        await editItem(id, data); 
        contextSpecific.page.redirect(`/details/${id}`);
    } catch (error) {
        alert(error.message);
    }
}

const editLoadout = (item) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Fruit</h2>
            <form data-id=${item._id} @submit=${onEdit} class="edit-form">
                <input .value=${item.name} type="text" name="name" id="name" placeholder="Fruit Name" />
                <input .value=${item.imageUrl} type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" />
                <textarea .value=${item.description} id="fruit-description" name="description" placeholder="Description" rows="10"
                    cols="50"></textarea>
                <textarea .value=${item.nutrition} id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10"
                    cols="50"></textarea>
                <button type="submit">post</button>
            </form>
        </div>
    </section>`;
