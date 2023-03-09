async function main() {
    let elements = {
        tBody: '#results tbody', fName: 'input[name="firstName"]',
        lName: 'input[name="lastName"]', fNumber: 'input[name="facultyNumber"]',
        grade: 'input[name="grade"]', submitBtn: '#submit',
    };
    refreshTable(elements);
    document.querySelector(elements.submitBtn).addEventListener('click', (e) => {
        e.preventDefault();
        addStudent(elements);
    });
}

main();

async function getStudents() {
    let res = await fetch('http://localhost:3030/jsonstore/collections/students');
    let data = await res.json();
    return await data;
}
async function addStudent(elements) {
    let inputs = {
        firstName: document.querySelector(elements.fName).value.toString().trim(),
        lastName: document.querySelector(elements.lName).value.toString().trim(),
        facultyNumber: document.querySelector(elements.fNumber).value.toString().trim(),
        grade: document.querySelector(elements.grade).value.trim(),
    };
    let valid = [];
    Object.values(inputs).forEach(x => x != '' && x ? valid.push(true) : valid.push(false));
    if (valid.includes(false)) {
        return;
    } else {
        document.querySelector(elements.fName).value = '';
        document.querySelector(elements.lName).value = '';
        document.querySelector(elements.fNumber).value = '';
        document.querySelector(elements.grade).value = '';
    }
    let res = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });
    refreshTable(elements);
}


async function refreshTable(elements) {
    let data = await getStudents();
    document.querySelector(elements.tBody).replaceChildren();
    Object.values(data).forEach(student => {
        let row = createTableRow(student.firstName, student.lastName, student.facultyNumber, student.grade);
        row.setAttribute('id', student._id);
        document.querySelector(elements.tBody).appendChild(row);
    });
}

function createTableRow(fName, lName, fNumber, grade) {
    let tr = document.createElement('tr');
    for (let el of arguments) {
        let td = document.createElement('td');
        if (Number(el) == el && Number(el) < 6.01) {
            td.textContent = Number(el).toFixed(2);
        } else {
            td.textContent = el;
        }
        tr.appendChild(td);
    }
    return tr;
}