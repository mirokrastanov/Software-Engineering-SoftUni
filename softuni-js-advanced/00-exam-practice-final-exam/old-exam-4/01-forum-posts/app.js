window.addEventListener("load", solve);

function solve() {
  let input = { title: '#post-title', category: '#post-category', content: '#post-content' };
  let publishBtn = target('#publish-btn');
  let newUL = target('#published-list');
  publishBtn.addEventListener('click', (e) => {
    let validInputs = [];
    let inputValues = [];
    Object.values(input).forEach(x => {
      validInputs.push(Boolean(target(x).value));
      inputValues.push(target(x).value);
    });
    if (validInputs.filter(x => x == false).length != 0) return;
    let ul = target('#review-list');
    let li = create('li');
    li.classList.add('rpost');
    let article = create('article');
    let questionTag = create('h4');
    questionTag.textContent = inputValues[0];
    let categoryTag = create('p');
    categoryTag.textContent = `Category: ${inputValues[1]}`;
    let contentTag = create('p');
    contentTag.textContent = `Content: ${inputValues[2]}`;
    let editBtn = create('button');
    editBtn.classList.add('action-btn', 'edit');
    editBtn.textContent = 'Edit';
    let approveBtn = create('button');
    approveBtn.classList.add('action-btn', 'approve');
    approveBtn.textContent = 'Approve';
    article.appendChild(questionTag);
    article.appendChild(categoryTag);
    article.appendChild(contentTag);
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(approveBtn);
    ul.appendChild(li);
    Object.values(input).forEach(x => { target(x).value = '' });
    editBtn.addEventListener('click', (e) => {
      Object.values(input).forEach((x, i) => { target(x).value = inputValues[i] })
      ul.removeChild(li);
    });
    approveBtn.addEventListener('click', (e) => {
      newUL.appendChild(li);
      li.removeChild(editBtn);
      li.removeChild(approveBtn);
    });
    let clearBtn = target('#clear-btn');
    clearBtn.addEventListener('click', (e) => {
      newUL.innerHTML = '';
    });
  });
  function target(selector) {
    return document.querySelector(selector);
  }
  function create(tag) {
    return document.createElement(tag);
  }
}
