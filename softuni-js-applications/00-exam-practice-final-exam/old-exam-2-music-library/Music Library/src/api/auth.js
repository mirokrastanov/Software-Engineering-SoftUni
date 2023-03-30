import * as api from './api.js';

const endpoints = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'allAlbums': 'data/albums?sortBy=_createdOn%20desc',
    'addAlbum': 'data/albums',
    'details': 'data/albums/', // :id
    'likeAlbum': 'data/likes',
    'getTotalLikes': 'data/likes?where=albumId%3D%22', // + id + '%22&distinct=_ownerId&count'
    'getMyLikes': 'data/likes?where=albumId%3D%22', // + id + '%22%20and%20_ownerId%3D%22' + userId + '%22&count'

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

export async function addNewAlbum(data) {
    const res = await api.post(endpoints.addAlbum, data);
    return res;
}

export async function getAlbumDetailsById(id) {
    const res = await api.get(endpoints.details + id);
    return res;
}

export async function likeAlbum(id) {
    const res = await api.post(endpoints.likeAlbum, { albumId: id });
    return res;
}

export async function getTotalLikes(id) {
    const res = await api.get(endpoints.getTotalLikes + id + '%22&distinct=_ownerId&count');
    return res;
}

export async function getMyLikes(id) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData._id;
    const add1 = '%22%20and%20_ownerId%3D%22';
    const add2 = '%22&count';
    const res = await api.get(endpoints.getMyLikes + id + add1 + userId + add2);
    return res;
}

export async function editAlbum(id, data) {
    const res = await api.put(endpoints.details + id, data);
    return res;
}

export async function deleteAlbum(id) {
    const res = await api.del(endpoints.details + id);
    return res;
}
