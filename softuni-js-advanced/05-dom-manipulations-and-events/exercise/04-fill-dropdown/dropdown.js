function addItem() {
    let textInput = document.querySelector('#newItemText');
    let textValue = document.querySelector('#newItemValue');
    let selectEl = document.querySelector('#menu');

    let optionEl = document.createElement('option');
    optionEl.textContent = textInput.value;
    optionEl.setAttribute('value', textValue.value);

    selectEl.appendChild(optionEl);

    textInput.value = '';
    textValue.value = '';

}