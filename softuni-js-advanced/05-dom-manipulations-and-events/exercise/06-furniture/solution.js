function solve() {
  let tableEl = document.querySelector('tbody');
  let inputEl = document.querySelector('#exercise textarea:nth-of-type(1)');
  let inputBtn = document.querySelector('#exercise button:nth-of-type(1)');
  let buyEl = document.querySelector('#exercise textarea:nth-of-type(2)');
  let buyBtn = document.querySelector('#exercise button:nth-of-type(2)');

  inputBtn.addEventListener('click', () => {
    let inputArr = JSON.parse(inputEl.value);
    for (let furniture of inputArr) {
      let obj = {
        img: furniture['img'],
        name: furniture['name'],
        price: furniture['price'],
        decFactor: furniture['decFactor'],
      };
      let row = document.createElement('tr');
      for (const [key, value] of Object.entries(obj)) {
        let cell = document.createElement('td');
        if (key == 'img') {
          let img = document.createElement('img');
          img.setAttribute('src', value);
          cell.appendChild(img);
        } else if (key == 'name' || key == 'price' || key == 'decFactor') {
          let p = document.createElement('p');
          p.textContent = value;
          cell.appendChild(p);
        }
        row.appendChild(cell);
      }
      let mark = document.createElement('input');
      mark.setAttribute('type', 'checkbox');
      let cell = document.createElement('td');
      cell.appendChild(mark);
      row.appendChild(cell);
      tableEl.appendChild(row);
    }
  });

  buyBtn.addEventListener('click', () => {
    let rows = tableEl.querySelectorAll('tr');
    let data = {
      items: [],
      total: 0,
      decFactor: 0,
    };
    for (const row of rows) {
      let checkbox = row.querySelector('td:last-child input');
      if (checkbox.checked) {
        let name = row.querySelector('td:nth-of-type(2) p');
        let price = row.querySelector('td:nth-of-type(3) p');
        let decF = row.querySelector('td:nth-of-type(4) p');
        data['items'].push(name.textContent);
        data['total'] += Number(price.textContent);
        data['decFactor'] += Number(decF.textContent);
      }
    }
    if (data['items'].length > 0) {
      let boughtItems = data['items'].slice().join(", ");
      let totalPrice = data['total'].toFixed(2);
      let avgDecFactor = data['decFactor'] / data['items'].length;
      
      buyEl.value = `Bought furniture: ${boughtItems}\nTotal price: ${totalPrice}\nAverage decoration factor: ${avgDecFactor}`;
    } else {
      buyEl.value = `Bought furniture: \nTotal price: 0.00\nAverage decoration factor: 0`;
    }

    // console.log(tableEl.querySelector('tr:last-child td:last-child input').checked);
  });

}