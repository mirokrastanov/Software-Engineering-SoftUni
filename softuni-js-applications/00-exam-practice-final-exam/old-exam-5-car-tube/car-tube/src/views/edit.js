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
        data.year = Number(data.year);
        if (data.year < 0) {
            throw new Error('Year must be a positive number!');
        }
        data.price = Number(data.price);
        if (data.price < 0) {
            throw new Error('Price must be a positive number!');
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
    <section id="edit-listing">
        <div class="container">
            <form data-id=${item._id} @submit=${onEdit} id="edit-form">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>
                <p>Car Brand</p>
                <input .value=${item.brand} type="text" placeholder="Enter Car Brand" name="brand" value="">
                <p>Car Model</p>
                <input .value=${item.model} type="text" placeholder="Enter Car Model" name="model" value="">
                <p>Description</p>
                <input .value=${item.description} type="text" placeholder="Enter Description" name="description" value="">
                <p>Car Year</p>
                <input .value=${item.year} type="number" placeholder="Enter Car Year" name="year" value="">
                <p>Car Image</p>
                <input .value=${item.imageUrl} type="text" placeholder="Enter Car Image" name="imageUrl" value="">
                <p>Car Price</p>
                <input .value=${item.price} type="number" placeholder="Enter Car Price" name="price" value="">
                <hr>
                <input type="submit" class="registerbtn" value="Edit Listing">
            </form>
        </div>
    </section>`;
