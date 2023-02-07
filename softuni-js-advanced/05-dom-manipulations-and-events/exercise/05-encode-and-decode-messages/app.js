function encodeAndDecodeMessages() {
    let sendEl = document.querySelector('#main div:nth-of-type(1) textarea');
    let receiveEl = document.querySelector('#main div:nth-of-type(2) textarea');
    let sendBtn = document.querySelector('#main div:nth-of-type(1) button');
    let receiveBtn = document.querySelector('#main div:nth-of-type(2) button');

    sendBtn.addEventListener('click', encode);
    receiveBtn.addEventListener('click', decode);

    function encode() {
        let input = sendEl.value.split("");
        let output = [];
        input.forEach(char => {
            let nextChar = String.fromCharCode(char.charCodeAt() + 1);
            output.push(nextChar);
        });
        receiveEl.value = output.join("");
        sendEl.value = '';
    }
    function decode() {
        let input = receiveEl.value.split("");
        let output = [];
        input.forEach(char => {
            let prevChar = String.fromCharCode(char.charCodeAt() - 1);
            output.push(prevChar);
        });
        receiveEl.value = output.join("");
    }
}