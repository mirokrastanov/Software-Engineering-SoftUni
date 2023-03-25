import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/api.js';
import { getItemById, updateById } from '../api/auth.js';

let context = null;
export async function editPage(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const item = await getItemById(id);
    // console.log(item);
    ctx.render(editTemplate(item));
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { make, model, year, description, price, img, material } = Object.fromEntries(formData);
    const id = e.target.dataset.id;
    const item = await getItemById(id);

    // validation
    let errorOccurred = false;
    const validityCheck = {
        validMake: 'is-valid', validModel: 'is-valid', validYear: 'is-valid',
        validDescription: 'is-valid', validPrice: 'is-valid', validImg: 'is-valid',
    };
    if (!make || make.length < 4) {
        validityCheck.validMake = 'is-invalid';
        errorOccurred = true;
    }
    if (!model || model.length < 4) {
        validityCheck.validModel = 'is-invalid';
        errorOccurred = true;
    }
    if (!year || year < 1950 || year > 2050) {
        validityCheck.validYear = 'is-invalid';
        errorOccurred = true;
    }
    if (!description || description.length < 10) {
        validityCheck.validDescription = 'is-invalid';
        errorOccurred = true;
    }
    if (!price || price < 0) {
        validityCheck.validPrice = 'is-invalid';
        errorOccurred = true;
    }
    if (!img) {
        validityCheck.validImg = 'is-invalid';
        errorOccurred = true;
    }

    if (errorOccurred) return context.render(editTemplate(item, validityCheck));

    await updateById(id, { make, model, year, description, price, img, material });
    context.page.redirect('/');
}

function editTemplate(item, stateForm = {}) {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit} data-id=${item._id}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control ${stateForm.validMake}" id="new-make" type="text" name="make"
                        .value=${item.make}>
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control ${stateForm.validModel}" id="new-model" type="text" name="model"
                        .value=${item.model}>
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control ${stateForm.validYear}" id="new-year" type="number" name="year"
                        .value=${item.year}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control ${stateForm.validDescription}" id="new-description" type="text"
                        name="description" .value=${item.description}>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control ${stateForm.validPrice}" id="new-price" type="number" name="price"
                        .value=${item.price}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control ${stateForm.validImg}" id="new-image" type="text" name="img"
                        .value="${item.img}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
                </div>
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>`;
}