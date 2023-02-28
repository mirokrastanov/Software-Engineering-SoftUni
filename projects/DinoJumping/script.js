let character = document.getElementById("character");
let block = document.getElementById("block");
let counter = 0;
let listener = document.querySelector('html');
let gameENDED = false;
let newGameBtnElement = null;
listener.addEventListener('click', jump);
document.querySelector('html').addEventListener('click', (e) => {
    if (e.target.classList.contains('new-game-btn')) {
        window.location.reload();
    }
});

function jump() {
    if (gameENDED) {
        return;
    }
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 600);
}

let checkDead = setInterval(function () {
    if (gameENDED) {
        return;
    }
    let characterTop = parseInt(window.getComputedStyle(character)
        .getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block)
        .getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        // block.style.animation = "none";
        // alert("Game Over! SCORE: " + Math.floor(counter / 100));
        // counter = 0;
        // block.style.animation = "block 2s infinite linear";
        block.style.animationPlayState = 'paused';
        const gameBoard = document.querySelector('.game');
        gameBoard.innerHTML = '';
        document.querySelector('body p').remove();
        let finalScore = document.createElement('div');
        finalScore.classList.add('final-score');
        finalScore.textContent = `Score: ${Math.floor(counter / 100)}`;
        let wrapperScore = document.createElement('div');
        wrapperScore.classList.add('final-wrap');
        wrapperScore.appendChild(finalScore);
        let newGameBtn = document.createElement('button');
        newGameBtn.classList.add('new-game-btn');
        newGameBtn.textContent = 'New Game';
        wrapperScore.appendChild(newGameBtn);
        gameBoard.appendChild(wrapperScore);
        gameENDED = true;
        newGameBtnElement = newGameBtn;
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);