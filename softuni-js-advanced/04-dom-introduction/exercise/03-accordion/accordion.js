function toggle() {
    const moreBtn = document.getElementsByClassName('button')[0].textContent;

    if (moreBtn == "More") {
        document.getElementsByClassName('button')[0].textContent = 'Less';
        document.getElementById("extra").style.display = 'block';
    } else {
        document.getElementsByClassName('button')[0].textContent = 'More';
        document.getElementById("extra").style.display = 'none';
    }

}