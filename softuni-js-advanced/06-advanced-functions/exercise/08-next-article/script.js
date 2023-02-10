function getArticleGenerator(articles) {
    let storage = [];
    let content = document.querySelector('#content');

    function showNext() {
        if (articles.length > 0) {
            storage.push(articles.shift());
            let article = document.createElement('article');
            article.textContent = storage[storage.length - 1];
            content.appendChild(article);
        }
    }

    return showNext;
}
