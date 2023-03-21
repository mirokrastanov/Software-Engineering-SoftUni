import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import * as api from './api.js';

const body = document.querySelector('body');
const bodyTemplate = (bookInfo) => html`
    <button @click=${loadBooks} id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${bookInfo.map(book => 
                html`<tr id=${book.id}>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>
                        <button @click=${editBook}>Edit</button>
                        <button @click=${deleteBook}>Delete</button>
                    </td>
                </tr>`
            )}
        </tbody>
    </table>
    
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input @click=${createBook} type="submit" value="Submit">
    </form>
    
    <form id="edit-form" style="display:none">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input @click=${saveEditedBook} type="submit" value="Save">
    </form>
`;
update();
const addForm = document.querySelector('#add-form');
const editForm = document.querySelector('#edit-form');

function update(bookInfo = []) {
    render(bodyTemplate(bookInfo), body);
}

async function getBooks() {
    let books = await api.get('jsonstore/collections/books');
    let bookInfo = [];
    Object.entries(books).slice().forEach(x => {
        let id = x[0];
        let title = x[1].title;
        let author = x[1].author;
        let data = { id, title, author };
        bookInfo.push(data);
    })
    return bookInfo;
}

async function loadBooks(e) {
    e.preventDefault();
    let bookInfo = await getBooks();
    update(bookInfo);
    addForm.style.display = 'block';
    editForm.style.display = 'none';
}

async function editBook(e) {
    e.preventDefault();
    addForm.style.display = 'none';
    editForm.style.display = 'block';
    let id = e.target.parentElement.parentElement.getAttribute('id');
    let book = await api.get(`jsonstore/collections/books/${id}`);
    editForm.querySelector('[name="title"]').value = book.title;
    editForm.querySelector('[name="author"]').value = book.author;
    editForm.querySelector('input[type="submit"]').setAttribute('id', id);
}

async function deleteBook(e) {
    e.preventDefault();
    let id = e.target.parentElement.parentElement.getAttribute('id');
    let res = await api.del(`jsonstore/collections/books/${id}`);
    // console.log(res);
    let bookInfo = await getBooks();
    update(bookInfo);
    addForm.style.display = 'block';
    editForm.style.display = 'none';
}

async function createBook(e) {
    e.preventDefault();
    let formData = new FormData(e.target.parentElement);
    let inputs = Object.fromEntries(formData);
    let valid = true;
    Object.values(inputs).forEach(x => {
        if (x.trim() == '') valid = false;
        else x = x.trim();
    });
    if (!valid) {
        console.log('Inputs cannot be empty');
        return;
    }
    let res = await api.post('jsonstore/collections/books', inputs);
    // console.log(res);
    addForm.reset();
    let bookInfo = await getBooks();
    update(bookInfo);
}

async function saveEditedBook(e) {
    e.preventDefault();
    // console.log(e.target.parentElement);
    let formData = new FormData(e.target.parentElement);
    let inputs = Object.fromEntries(formData);
    if (inputs.id == '') {
        delete inputs.id;
    }
    let valid = true;
    Object.values(inputs).forEach(x => {
        if (x.trim() == '') valid = false;
        else x = x.trim();
    });
    if (!valid) {
        console.log('Inputs cannot be empty');
        return;
    }
    let id = editForm.querySelector('input[type="submit"]').getAttribute('id'); 
    let res = await api.put(`jsonstore/collections/books/${id}`, inputs);
    // console.log(res);
    editForm.reset();
    editForm.querySelector('input[type="submit"]').removeAttribute('id');
    let bookInfo = await getBooks();
    update(bookInfo);
    addForm.style.display = 'block';
    editForm.style.display = 'none';
}