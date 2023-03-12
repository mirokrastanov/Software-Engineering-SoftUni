import { loadCommentMenu } from "./comment.js";
import { elements } from "./elements.js";

export function clearTopic(e) {
    e.preventDefault();
    let inputs = [elements.titleEl, elements.userEl, elements.postTextEl];
    inputs.forEach(x => {
        x.value = '';
    });
}


export async function postTopic(e) {
    e.preventDefault();

    let inputs = [elements.titleEl.value,
    elements.userEl.value, elements.postTextEl.value];
    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    try {
        if (inputs.some(x => x.trim() == '')) {
            throw new Error('All fields are required!')
        }
        let postTime = (new Date()).toISOString().split('');
        postTime.splice(10, 1, ' ');
        postTime.splice(19, 5);
        postTime = postTime.join('');
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: inputs[0],
                username: inputs[1],
                post: inputs[2],
                date: postTime,
            }),
        };
        let res = await fetch(url, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        clearTopic(e);
        let data = await res.json();
        loadTopics();
    } catch (error) {
        console.log(error.message);
    }
}

export async function loadTopics() {
    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    try {
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = await fetch(url, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        let data = await res.json();
        elements.topicCtr.replaceChildren();
        document.querySelectorAll('.comment').forEach(x => x.remove());
        Object.values(data).forEach(x => {
            createTopicElement(x);
        });
    } catch (error) {
        console.log(error.message);
    }
}


export function createTopicElement(data) {
    let topic = document.createElement('div');
    topic.classList.add('topic-name-wrapper');
    topic.innerHTML = `
    <div class="topic-name">
        <a href="javascript:void(0)" class="normal">
            <h2 data-id="${data._id}">${data.title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${data.date}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${data.username}</span></p>
                </div>
            </div>
        </div>
    </div>
    <button data-id="${data._id}">DELETE</button>
    `;
    elements.topicCtr.appendChild(topic);
    topic.querySelector('.topic-name a h2')
        .addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.target.dataset.id;
            openTopic(id);
        });
    topic.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();
        let id = e.target.dataset.id;
        deleteTopic(id);
        loadTopics();
    });
}



export async function openTopic(id) {
    elements.homeForm.style.display = 'none';
    elements.topicCtr.querySelectorAll('.topic-name-wrapper')
        .forEach(x => x.style.display = 'none');

    let url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`;
    try {
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = await fetch(url, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        let data = await res.json();
        createTopicView(data);
    } catch (error) {
        console.log(error.message);
    }
}

export async function deleteTopic(id) {
    let url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`;
    try {
        let options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = await fetch(url, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        let data = await res.json();
        loadTopics();
    } catch (error) {
        console.log(error.message);
    }
}

export function createTopicView(data) {
    // console.log(data);
    loadCommentMenu(data);


    // at the end - attach post comments
    // also - attach post comment div
}

