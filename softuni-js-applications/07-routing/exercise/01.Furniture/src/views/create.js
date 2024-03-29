import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/api.js';
import { createItem } from '../api/auth.js';

let context = null;
export async function createPage(ctx) {
    context = ctx;
    ctx.render(createTemplate(onSubmit));
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { make, model, year, description, price, img, material } = Object.fromEntries(formData);

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

    if (errorOccurred) return context.render(createTemplate(onSubmit, validityCheck));

    await createItem({ make, model, year, description, price, img, material });
    context.page.redirect('/');
}

function createTemplate(handler, stateForm = {}) {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${handler}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control ${stateForm.validMake}" id="new-make" type="text"
                        name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control ${stateForm.validModel}" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control ${stateForm.validYear}" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control ${stateForm.validDescription}" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control ${stateForm.validPrice}" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control ${stateForm.validImg}" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>`;
}