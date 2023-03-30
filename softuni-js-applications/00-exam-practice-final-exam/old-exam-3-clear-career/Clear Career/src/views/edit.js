import { html } from '../../node_modules/lit-html/lit-html.js';
import { editItem, getItemDetails } from '../api/auth.js';

let context = null;
export async function editPage(ctx) {
    context = ctx;
    let album = await getItemDetails(ctx.params.id);
    ctx.render(editTemplate(album));
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
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form data-id=${item._id} @submit=${onEdit} class="edit-form">
            <input .value=${item.title} type="text" name="title" id="job-title" placeholder="Title" />
            <input .value=${item.imageUrl} type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input .value=${item.category} type="text" name="category" id="job-category" placeholder="Category" />
            <textarea .value=${item.description} id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea .value=${item.requirements} id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input .value=${item.salary} type="text" name="salary" id="job-salary" placeholder="Salary" />
            <button type="submit">post</button>
        </form>
    </div>
</section>`;
