import * as api from './api.js';

const endpoints = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'allMemes': 'data/memes?sortBy=_createdOn%20desc',
    'memeDetails': 'data/memes/', // + id

    // 'createItem': 'data/catalog',
    // 'getItems': 'data/catalog',
    // 'details': 'data/catalog/', // + :id
    // 'myItems': 'data/catalog?where=_ownerId%3D%22', // + ownerid + %22
};

export async function login(email, password) {
    const res = await api.post(endpoints.login, { email, password });
    localStorage.setItem('userData', JSON.stringify(res));
    return res;
}

export async function register(username, email, password, repeatPass, gender) {
    const res = await api.post(endpoints.register, { username, email, password, repeatPass, gender });
    localStorage.setItem('userData', JSON.stringify(res));
    return res;
}

export async function logout() {
    const res = await api.get(endpoints.logout);
    localStorage.removeItem('userData');
    return res;
}

export async function getAllMemes() {
    const res = await api.get(endpoints.allMemes);
    return res;
}

export async function getMemeDetailsById(id) {
    const res = await api.get(endpoints.memeDetails + id);
    return res;
}

export async function updateMemeById(id, data) {
    const res = await api.put(endpoints.memeDetails + id, data);
    return res;
}

// export async function createItem(data) {
//     const res = await api.post(endpoints.createItem, data);
//     return res;
// }

// export async function deleteById(id) {
//     const res = await api.del(endpoints.details + id);
//     return res;
// }

// export async function getMyItems() {
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     const userId = userData._id;
//     const url = endpoints.myItems + userId + '%22';
//     const res = await api.get(url);
//     return res;
// }

