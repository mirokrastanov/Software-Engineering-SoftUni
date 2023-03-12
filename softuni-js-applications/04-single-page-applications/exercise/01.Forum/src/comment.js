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
        
    });
    postCtr.appendChild(post);
    postCtr.appendChild(commentForm);
    elements.mainEl.appendChild(postCtr);
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

