import * as api from './api.js';

const endpoints = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'allMemes': 'data/memes?sortBy=_createdOn%20desc',
    'memeDetails': 'data/memes/', // + id
    'createMeme': 'data/memes',
    'myMemes': 'data/memes?where=_ownerId%3D%22' // + ownerid + extra
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

export async function createMeme(data) {
    const res = await api.post(endpoints.createMeme, data);
    return res;
}

export async function deleteMemeById(id) {
    const res = await api.del(endpoints.memeDetails + id);
    return res;
}

export async function getMyMemes() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData._id;
    const url = endpoints.myMemes + userId + '%22&sortBy=_createdOn%20desc';
    const res = await api.get(url);
    return res;
}
