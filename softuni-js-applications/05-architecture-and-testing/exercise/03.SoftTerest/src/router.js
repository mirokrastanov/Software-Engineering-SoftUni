export function initializer(links) {
    const main = document.querySelector('#mainView');
    document.querySelector('nav').addEventListener('click', onNavigate);

    const context = {
        showSection,
        goTo,
        updateNav,
    };
    return context;
    
    function showSection(section) {
        main.replaceChildren(section);
    }
    function onNavigate(e) {
        e.preventDefault();
        let target = e.target;
        if (target.tagName == 'IMG') {
            target = target.parentElement;
        }
        if (target.tagName == 'A') {
            let url = new URL(target.href);
            goTo(url.pathname);
        }
    }
    function goTo(name, ...params) {
        const handler = links[name];
        if (typeof(handler) == 'function') {
            handler(context, ...params);
        }
    }
    function updateNav() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            document.querySelectorAll('.user').forEach(x => x.style.display = 'block');
            document.querySelectorAll('.guest').forEach(x => x.style.display = 'none');
        } else {
            document.querySelectorAll('.user').forEach(x => x.style.display = 'none');
            document.querySelectorAll('.guest').forEach(x => x.style.display = 'block');
        }
    }
}