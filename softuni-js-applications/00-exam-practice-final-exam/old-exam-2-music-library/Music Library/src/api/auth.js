import * as api from './api.js';

const endpoints = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'allAlbums': 'data/albums?sortBy=_createdOn%20desc'
};

export async function login(email, password) {
    const res = await api.post(endpoints.login, { email, password });
    localStorage.setItem('userData', JSON.stringify(res));
    return res;
}

export async function register(email, password) {
    const res = await api.post(endpoints.register, { email, password });
    localStorage.setItem('userData', JSON.stringify(res));
    return res;
}

export async function logout() {
    const res = await api.get(endpoints.logout);
    localStorage.removeItem('userData');
    return res;
}

export async function getAllAlbums() {
    const res = await api.get(endpoints.allAlbums);
    return res;
}

// export async function getMemeDetailsById(id) {
//     const res = await api.get(endpoints.memeDetails + id);
//     return res;
// }

// export async function updateMemeById(id, data) {
//     const res = await api.put(endpoints.memeDetails + id, data);
//     return res;
// }

// export async function createMeme(data) {
//     const res = await api.post(endpoints.createMeme, data);
//     return res;
// }

// export async function deleteMemeById(id) {
//     const res = await api.del(endpoints.memeDetails + id);
//     return res;
// }

// export async function getMyMemes() {
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     const userId = userData._id;
//     const url = endpoints.myMemes + userId + '%22&sortBy=_createdOn%20desc';
//     const res = await api.get(url);
//     return res;
// }
