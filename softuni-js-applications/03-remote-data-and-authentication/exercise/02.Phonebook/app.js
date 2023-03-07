function attachEvents() {
    let baseURL = 'http://localhost:3030/jsonstore/phonebook';
    let loadBtn = document.querySelector('#btnLoad');
    let createBtn = document.querySelector('#btnCreate');
    let personInput = document.querySelector('#person');
    let phoneInput = document.querySelector('#phone');
    let phonebookUl = document.querySelector('#phonebook');

    loadBtn.addEventListener('click', (e) => {
        sendRequest(baseURL, 'GET');
    });
    createBtn.addEventListener('click', (e) => {
        let bodyData = {
            'person': personInput.value.trim(),
            'phone': phoneInput.value.trim(),
        };
        if (bodyData.person == '' || bodyData.phone == '') {
            console.log('Invalid Inputs');
            return;
        }
        personInput.value = '';
        phoneInput.value = '';
        sendRequest(baseURL, 'POST', bodyData);
    });

    function sendRequest(url, type, body) {
        if (type == 'GET') {
            fetch(url)
                .then(res => {
                    if (!res.ok) throw new Error('invalid responce');
                    return res.json();
                })
                .then(data => {
                    phonebookUl.replaceChildren();
                    Object.values(data).forEach(x => {
                        let li = document.createElement('li');
                        li.textContent = `${x.person}: ${x.phone}`;
                        li.setAttribute('id', x._id);
                        let del = document.createElement('button');
                        del.textContent = 'Delete';
                        li.appendChild(del);
                        phonebookUl.appendChild(li);
                        del.addEventListener('click', async (e) => {
                            let targetID = e.target.parentElement.getAttribute('id');
                            let delURL = `${baseURL}/${targetID}`;
                            let parent = e.target.parentElement;
                            parent.remove();
                            sendRequest(delURL, 'DELETE');
                        });
                    });
                })
                .catch(e => console.log(e.message));
        } else if (type == 'POST') {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                'body': JSON.stringify(body),
            })
                .then(res => {
                    if (!res.ok) throw new Error('invalid responce');
                    return res.json();
                })
                .then(data => {
                    sendRequest(baseURL, 'GET');
                })
                .catch(e => console.log(e.message));
        } else if (type == 'DELETE') {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then(res => {
                    if (!res.ok) throw new Error('invalid responce');
                    return res.json();
                })
                .then(data => {
                    sendRequest(baseURL, 'GET');
                })
                .catch(e => console.log(e.message));
        }
    }
}

attachEvents();
