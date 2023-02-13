function validate() {
    
    let input = document.querySelector('#email');
    let regex = new RegExp(/[a-z]+@[a-z]+\.[a-z]+/, 'g');
    
    input.addEventListener('change', (e) => {
        let matches = (input.value).match(regex);
        if (matches && matches[0] == input.value) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    })

}