const host = 'http://localhost:3030/';

async function requester(method, url, data) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const options = {
        method,
        headers: {},
    }
    if (data) {
        options.headers['Content-Type'] = 'applicaiton/json';
        options.body = JSON.stringify(data);
    }
    if (user) {
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }
    try {
        const res = await fetch(`${host}${url}`, options);
        if (!res.ok) {
            if (res.status == 403) {  // Un-Authorized
                sessionStorage.removeItem('user');
            }
            let err = await res.json();
            throw err;
        }
        if (res.status == 204) {
            return res;
        } else {
            return res.json();
        }
    } catch (error) {
        console.log(error.message);
    }
}
const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const del = requester.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del,
}