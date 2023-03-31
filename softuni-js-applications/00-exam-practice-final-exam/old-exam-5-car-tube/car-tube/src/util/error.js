export function errorHandler(message) {
    showError(message);
    setInterval(() => {
        clearError()
    }, 3000);
}

//=> ADJUST selectors
function showError(message) {
    document.querySelector('.notification').style.display = 'block';
    document.querySelector('#errorBox span').textContent = message;
}

function clearError() {
    document.querySelector('.notification').style.display = 'none';
    document.querySelector('#errorBox span').textContent = '';
}