function generateReport() {
    // store all checkboxes with their name, position, and checked status
    let checkboxes = {};
    let columns = Array.from(document.querySelectorAll('thead tr th input'));
    for (let i = 0; i < columns.length; i++) {
        let inputState = columns[i].checked;
        let inputName = columns[i].parentElement.textContent;
        let inputPosition = i + 1;
        checkboxes[inputName] = [inputPosition, inputState];
    }
    // console.log(checkboxes);

    // extract the Names & Positions of all checked columns
    let checkedPositions = [];
    let checkedColumns = [];
    Object.entries(checkboxes).forEach(element => {
        if (element[1][1]) {
            checkedPositions.push(element[1][0]);
            // making sure the name is all lowercase and without the empty space at the end, that's present in the HTML
            checkedColumns.push(element[0].toLowerCase().trim());
        }
    });
    // console.log(checkedPositions);
    // console.log(checkedColumns);

    // Loop through all table rows in the main loop & all cells in a nested loop for easy counting of the column-cell relationship
    let rows = document.querySelectorAll('tbody tr');
    let resultArray = [];
    Array.from(rows).forEach(row => {
        // set a counter to keep track of the current cell (resets on each row, to match the position of the column/s that are going to be extracted) and increment it prior to cell operations to get the position, instead of the index of the cell in relative to the row its on
        let counter = 0;
        let cells = row.querySelectorAll('td');
        let obj = {};   // holds extracted data for the current row. Only gets filled with checked columns & their respective values
        Array.from(cells).forEach(cell => {
            counter++;
            // checking whether the current cell position should be extracted, by looping through the columns checked by the user
            for (let pos of checkedPositions) {
                if (pos == counter) {
                    let index = checkedPositions.indexOf(pos);
                    let name = checkedColumns[index];
                    obj[name] = cell.textContent;  //filling the object following the format given --> column name : column value for respective row
                }
            }
        });
        // the obj would be pushed to the result array ONLY if it holds any data
        if (Object.keys(obj).length > 0) {
            resultArray.push(obj);
            // console.log(obj);
        }
    });
    // console.log(resultArray);
    // console.log(JSON.stringify(resultArray));

    // lastly - define the output element and fill it with a stringified JSON version of the result array, holding all the requested data
    let outputElement = document.querySelector('#output');
    if (resultArray.length > 0) {
        outputElement.textContent = JSON.stringify(resultArray, null, 2);
    } else {
        outputElement.textContent = '';  // and it's cleared if no checkboxes are checked
    }

    // future TODO
    // if needed the "checked" state of checkboxes can be easily cleared to "false" via looping through the initial checkboxes object holding them - yet another benefit of choosing to keep the checkbox states there

}