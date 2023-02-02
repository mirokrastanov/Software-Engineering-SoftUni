function sumTable() {

    const table = document.querySelector("table");
    const rows = table.querySelectorAll("tr :nth-child(even)");
    let sum = 0;
    let rowsArr = Array.from(rows);
    rowsArr.pop();

    rowsArr.forEach(row => {
        let current = row.textContent == Number(row.textContent) ? Number(row.textContent) : 0;
        sum += current;
    });

    table.querySelector("#sum").textContent = sum.toFixed(2);

}