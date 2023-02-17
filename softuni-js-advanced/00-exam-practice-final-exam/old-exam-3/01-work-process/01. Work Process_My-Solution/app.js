function solve() {
    let hireBtn = target('#add-worker');
    let input = {
        fname: '#fname', lname: '#lname', email: '#email',
        birth: '#birth', pos: '#position', salary: '#salary',
    };
    let tableParent = target('#tbody');
    let sumElement = target('#sum');
    let totalSalary = 0;
    hireBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let validInputs = [];
        let inputValues = [];
        Object.values(input).forEach(x => {
            validInputs.push(Boolean(target(x).value));
            inputValues.push(target(x).value);
        });
        if (validInputs.filter(x => x == false).length > 0) return;
        Object.values(input).forEach(x => target(x).value = '');
        let row = create('tr');
        let currentSalary = 0;
        Object.entries(input).forEach((kvp, i) => {
            let td = create('td');
            td.textContent = inputValues[i];
            row.appendChild(td);
            if (kvp[0] == 'salary') currentSalary = Number(inputValues[i]);
        });
        totalSalary += currentSalary;
        let btnsTD = create('td');
        let firedBtn = create('button');
        firedBtn.textContent = 'Fired';
        firedBtn.classList.add('fired');
        let editBtn = create('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit');
        btnsTD.appendChild(firedBtn);
        btnsTD.appendChild(editBtn);
        row.appendChild(btnsTD);
        tableParent.appendChild(row);
        sumElement.textContent = totalSalary.toFixed(2);

        firedBtn.addEventListener('click', (e) => {
            row.parentElement.removeChild(row);
            totalSalary -= currentSalary;
            sumElement.textContent = totalSalary.toFixed(2);
        });
        editBtn.addEventListener('click', (e) => {
            Object.values(input).forEach((x, i) => target(x).value = inputValues[i]);
            row.parentElement.removeChild(row);
            totalSalary -= currentSalary;
            sumElement.textContent = totalSalary.toFixed(2);
        });
    });
    function target(selector) {
        return document.querySelector(selector);
    }
    function create(tag) {
        return document.createElement(tag);
    }
}
solve()