window.addEventListener("load", solve);

function solve() {
  // selling price should have a GREATER number than original cost
  // if any input is empty or original cost is greater than selling price 
  // - do nothing
  let input = {
    make: '#make', model: '#model', year: '#year',
    fuel: '#fuel', cost: '#original-cost', price: '#selling-price',
  };
  let totalProfit = 0;
  let publishBtn = document.querySelector('#publish');
  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let validInputs = [];
    let inputValues = [];
    Object.values(input).forEach(x => validInputs.push(Boolean(target(x).value)));
    if (validInputs.includes(false) || Number(target(input.cost).value) > Number(target(input.price).value)) return;
    Object.values(input).forEach(x => inputValues.push(target(x).value));
    let tbody = document.querySelector('#table-body');
    let row = document.createElement('tr');
    row.classList.add('row');
    let brand = document.createElement('td');
    brand.textContent = target(input.make).value;
    let model = document.createElement('td');
    model.textContent = target(input.model).value;
    let year = document.createElement('td');
    year.textContent = target(input.year).value;
    let fuel = document.createElement('td');
    fuel.textContent = target(input.fuel).value;
    let cost = document.createElement('td');
    cost.textContent = target(input.cost).value;
    let price = document.createElement('td');
    price.textContent = target(input.price).value;
    let btnWrapper = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn', 'edit');
    editBtn.textContent = 'Edit';
    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn', 'sell');
    sellBtn.textContent = 'Sell';
    btnWrapper.appendChild(editBtn);
    btnWrapper.appendChild(sellBtn);
    row.appendChild(brand);
    row.appendChild(model);
    row.appendChild(year);
    row.appendChild(fuel);
    row.appendChild(cost);
    row.appendChild(price);
    row.appendChild(btnWrapper);
    tbody.appendChild(row);
    Object.values(input).forEach(x => target(x).value = '');

    editBtn.addEventListener('click', (e) => {
      Object.values(input).forEach(x => target(x).value = inputValues.shift());
      row.parentElement.removeChild(row);
    });
    sellBtn.addEventListener('click', (e) => {
      let currentRow = e.target.parentElement.parentElement;
      let ul = target('#cars-list');
      let li = document.createElement('li');
      li.classList.add('each-list');
      let brandSpan = document.createElement('span');
      brandSpan.textContent += currentRow.querySelector('td:nth-of-type(1)').textContent;
      brandSpan.textContent += ' ';
      brandSpan.textContent += currentRow.querySelector('td:nth-of-type(2)').textContent;
      let yearSpan = document.createElement('span');
      yearSpan.textContent = currentRow.querySelector('td:nth-of-type(3)').textContent;
      let soldForSpan = document.createElement('span');
      let earnings = Number(currentRow.querySelector('td:nth-of-type(6)').textContent) - Number(currentRow.querySelector('td:nth-of-type(5)').textContent);
      soldForSpan.textContent = earnings;
      li.appendChild(brandSpan);
      li.appendChild(yearSpan);
      li.appendChild(soldForSpan);
      ul.appendChild(li);
      currentRow.parentElement.removeChild(currentRow);
      totalProfit += earnings;
      let profitTag = target('#profit');
      profitTag.textContent = totalProfit.toFixed(2);
    });
  });
  function target(selector) {
    return document.querySelector(selector);
  }
}