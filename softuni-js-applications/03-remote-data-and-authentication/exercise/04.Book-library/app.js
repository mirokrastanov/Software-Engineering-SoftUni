async function main() {
    let elements = {
        loadBtn: '#loadBooks', title: 'input[name="title"]',
        author: 'input[name="author"]', submitBtn: '#submit',
        tBody: 'table tbody',
    };
    document.querySelector(elements.tBody).replaceChildren();
    document.querySelector(elements.loadBtn).addEventListener('click', (e) => {
        getBooks(elements);
    });
    document.querySelector(elements.submitBtn).addEventListener('click', (e) => {
        e.preventDefault();
        addBook(elements);
    });



}

main();

async function getBooks(elements) {
    let url = 'http://localhost:3030/jsonstore/collections/books';
    let res = await fetch(url);
    let data = await res.json();
    reloadTable(data, elements);
}

async function addBook(elements) {
    let url = 'http://localhost:3030/jsonstore/collections/books';
    let inputs = {
        author: document.querySelector(elements.author).value.trim(),
        title: document.querySelector(elements.title).value.trim(),
    };
    if (inputs.author == '' || inputs.title == '') {
        return;
    } else {
        document.querySelector(elements.title).value = '';
        document.querySelector(elements.author).value = '';
    }
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });
    getBooks(elements);
}

async function editBook(elements, id) {
    let url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    let newData = {
        author: document.querySelector(elements.author).value = data.author,
        title: document.querySelector(elements.title).value = data.title,
    };
    let form = document.querySelector('form');
    form.querySelector('h3').textContent = 'Edit FORM';
    let submitBtn = document.querySelector(elements.submitBtn);
    form.removeChild(submitBtn);
    let saveBtn = document.createElement('button');
    saveBtn.setAttribute('id', 'save');
    saveBtn.textContent = 'Save';
    form.appendChild(saveBtn);
    saveBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        if (document.querySelector(elements.title).value == '' ||
            document.querySelector(elements.author).value == '') {
            return;
        } else {
            newData = {
                author: document.querySelector(elements.author).value,
                title: document.querySelector(elements.title).value,
            };
            document.querySelector(elements.title).value = '';
            document.querySelector(elements.author).value = '';
        }

        let put = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });
        saveBtn.remove();
        form.appendChild(submitBtn);
        form.querySelector('h3').textContent = 'FORM';
        getBooks(elements);
    });
    getBooks(elements);
}

async function deleteBook(elements, id) {
    let url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    let res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    getBooks(elements);
}

async function reloadTable(data, elements) {
    document.querySelector(elements.tBody).replaceChildren();
    Object.entries(data).forEach(x => {
        let book = x[1];
        let id = x[0];
        let tr = document.createElement('tr');
        tr.setAttribute('id', id);
        let td = document.createElement('td');
        td.textContent = book.title;
        let td2 = td.cloneNode();
        td2.textContent = book.author;
        let td3 = td.cloneNode();
        let editBtn = document.createElement('button');
        let deleteBtn = editBtn.cloneNode();
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';
        td3.appendChild(editBtn);
        td3.appendChild(deleteBtn);
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.querySelector(elements.tBody).appendChild(tr);
        editBtn.addEventListener('click', (e) => {
            let row = e.target.parentElement.parentElement;
            let id = row.getAttribute('id');
            editBook(elements, id);
        });
        deleteBtn.addEventListener('click', (e) => {
            let row = e.target.parentElement.parentElement;
            let id = row.getAttribute('id');
            deleteBook(elements, id);
        });
    });
}