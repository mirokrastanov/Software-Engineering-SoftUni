import { elements } from "./elements.js";

export function loadCommentMenu(data) {
    let postCtr = document.createElement('div');
    postCtr.setAttribute('class', 'comment');

    let post = document.createElement('div');
    post.classList.add('header');
    post.dataset.id = data._id;
    post.innerHTML = `
    <img src="./static/profile.png" alt="avatar">
    <p><span>${data.username}</span> posted on <time>${data.date}</time></p>
    <p class="post-content">${data.post}</p>
    `;

    // get comments and append in the middle

    let commentForm = document.createElement('form');
    commentForm.innerHTML = `
    <div class="new-topic-content">
        <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
    </div>
    <div class="new-topic-title" id="user-pview">
        <label for="username">Username <span class="red">*</span></label>
        <input type="text" name="username" id="username">
    </div>
    <div class="new-topic-buttons">
        <button>Post</button>
    </div>`;
    commentForm.querySelector('.new-topic-buttons button')
        .addEventListener('click', (e) => {
            e.preventDefault();
            let parentForm = e.target.parentElement.parentElement;
            let commentText = parentForm.querySelector('#postText');
            let username = parentForm.querySelector('#username');
            try {
                if (commentText.value.trim() == '' || username.value.trim() == '') {
                    throw new Error('All fields are required!');
                }
                let commentData = {
                    username: username.value.trim(),
                    comment: commentText.value.trim(),
                    postID: data._id,
                }
                commentText.value = '';
                username.value = '';
                postComment(commentData);
            } catch (error) {
                console.log(error.message);
            }
        });
    postCtr.appendChild(post);
    postCtr.appendChild(commentForm);
    elements.mainEl.appendChild(postCtr);
}


export async function postComment(data) {
    let url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: data.username,
            comment: data.comment,
            postID: data.postID,
            date: (new Date()).toLocaleString(),
        })
    };
    try {
        let res = await fetch(url, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}



export async function loadPostComments(id) {


    // pull all comments from the server
    // filter current post applicable
    // loop thru them and build a comment el for each
    // RETURN AN ARRAY WITH ALL COMMENT ELEMENTS 
}

export function buildCommentElement(data) {
    let comment = document.createElement('div');
    comment.setAttribute('id', 'user-comment');
    // inner html the rest
    // return element 

}

