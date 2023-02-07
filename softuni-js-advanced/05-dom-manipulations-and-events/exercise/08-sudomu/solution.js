function solve() {
    let table = document.querySelector('#exercise table');
    let tbody = document.querySelector('tbody');
    let checkBtn = document.querySelector('tfoot tr td button:nth-of-type(1)');
    let clearBtn = document.querySelector('tfoot tr td button:nth-of-type(2)');
    let p = document.querySelector('#check p');

    checkBtn.addEventListener('click', () => {
        let rows = tbody.querySelectorAll('tr');
        let matrix = [];
        for (let row = 0; row < rows.length; row++) {
            let current = [];
            let rowInputs = rows[row].querySelectorAll('td input');
            for (let i = 0; i < rowInputs.length; i++) {
                current.push(Number(rows[row].querySelector(`td:nth-of-type(${i + 1}) input`).value));
                // console.log(Number(rows[row].querySelector(`td:nth-of-type(${i + 1}) input`).value));
            }
            matrix.push(current);
        }
        if (isSolved(matrix)) {
            table.style.border = '2px solid green';
            p.textContent = 'You solve it! Congratulations!'
            p.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            p.textContent = 'NOP! You are not done yet...'
            p.style.color = 'red';
        }
    });

    clearBtn.addEventListener('click', () => {
        table.style.border = 'none';
        p.textContent = ''
        p.style.color = 'unset';
        let cells = tbody.querySelectorAll('tbody input');
        for (const cell of cells) {
            cell.value = '';
        }
    });

    function isSolved(matrix) {
        let prevRow = 0;
        let prevCol = 0;
        let allNums = [];
        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let curRow = 0;
            let curCol = 0;
            let rowArr = [];
            let colArr = [];
            for (let j = 0; j < row.length; j++) {
                curRow += matrix[i][j];
                rowArr.push(matrix[i][j]);
                curCol += matrix[j][i];
                colArr.push(matrix[j][i]);
                allNums.push(matrix[i][j]);
            }
            if (prevRow == 0) prevRow = curRow;
            if (curRow != prevRow) return false;
            if (prevCol == 0) prevCol = curCol;
            if (curCol != prevCol) return false;
            if ([...new Set(rowArr)].length != rowArr.length) return false;
            if ([...new Set(colArr)].length != colArr.length) return false;
        }
        return true;
    }
}