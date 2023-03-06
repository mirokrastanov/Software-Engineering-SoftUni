async function attachEvents() {
    let btnLoadPosts = document.querySelector('#btnLoadPosts');
    let btnViewPost = document.querySelector('#btnViewPost');
    let selectElement = document.querySelector('#posts');
    let postTitleElement = document.querySelector('#post-title');
    let postBodyElement = document.querySelector('#post-body');
    let postCommentsUlElement = document.querySelector('#post-comments');

    btnLoadPosts.addEventListener('click', async function (e) {
        selectElement.innerHTML = '';
        postTitleElement.innerHTML = '';
        postBodyElement.innerHTML = '';
        postCommentsUlElement.innerHTML = '';
        let posts = await requestPosts();
        for (const el of Object.entries(posts)) {
            let valueProperty = el[0];
            let content = el[1].body;
            let title = el[1].title;
            let id = el[1].id;
            let optionTag = document.createElement('option');
            optionTag.textContent = title;
            optionTag.value = valueProperty;
            selectElement.appendChild(optionTag);
        }
    });
    btnViewPost.addEventListener('click', async function (e) {
        let selected = selectElement.value;
        if (!selected) return;
        let title = document.querySelector(`option[value=${selected}]`).textContent;
        let comments = await requestComments();
        let posts = await requestPosts();
        let found = [];
        let postBody = '';
        for (const comment of Object.entries(comments)) {
            if (comment[1].postId == selected) {
                found.push(comment[1].text);
                let body = Object.entries(posts).filter(x => x[1].title == title);
                postBody = body[0][1].body;
            }
        }
        postTitleElement.textContent = title;
        postBodyElement.textContent = postBody;
        postCommentsUlElement.innerHTML = '';
        found.forEach(x => {
            let el = document.createElement('li');
            el.textContent = x;
            postCommentsUlElement.appendChild(el); 
        });
    });

    async function requestPosts() {
        let url = 'http://localhost:3030/jsonstore/blog/posts';
        let res = await fetch(url);
        return await res.json();
    }
    async function requestComments() {
        let url = 'http://localhost:3030/jsonstore/blog/comments';
        let res = await fetch(url);
        return await res.json();
    }
}

attachEvents();