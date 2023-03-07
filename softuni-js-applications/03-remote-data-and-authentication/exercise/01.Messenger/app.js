function attachEvents() {
    let baseURL = 'http://localhost:3030/jsonstore/messenger';
    let sendBtn = document.querySelector('#submit');
    let sendAuthor = document.querySelector('input[name="author"]');
    let sendMessage = document.querySelector('input[name="content"]');
    let refreshBtn = document.querySelector('#refresh');
    let messageArea = document.querySelector('#messages');

    sendBtn.addEventListener('click', onSend);
    refreshBtn.addEventListener('click', onRefresh);

    function onSend() {
        if (sendAuthor.value == '' || sendMessage.value == '') return;
        let bodyObj = {
            'author': sendAuthor.value.trim(),
            'content': sendMessage.value.trim()
        };
        sendAuthor.value = '';
        sendMessage.value = '';
        fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(bodyObj),
        })
            .then(res => {
                if (!res.ok) throw new Error('Error');
                return res.json();
            })
            .catch(e => console.log(e.message));
    }

    function onRefresh() {
        messageArea.textContent = '';
        fetch(baseURL)
            .then(res => {
                if(!res.ok) throw new Error('Error');
                return res.json();
            })
            .then(data => {
                let values = [];
                Object.values(data).forEach(x => values.push(`${x.author}: ${x.content}`));
                messageArea.textContent = values.join('\n');
            })
            .catch(e => console.log(e.message));
    }
}

attachEvents();