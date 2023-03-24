import * as api from '../api/api.js';

const endpoints = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'createItem': 'data/catalog',
    'getItems': 'data/catalog',
    'details': 'data/catalog/', // + :id
    'myItems': 'data/catalog?where=_ownerId%3D%22', // + ownerid + %22
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

export async function createItem(data) {
    const res = await api.post(endpoints.createItem, data);
    return res;
}

export async function getAllItems() {
    const res = await api.get(endpoints.getItems);
    return res;
}

export async function getItemById(id) {
    const res = await api.get(endpoints.details + id);
    return res;
}

export async function updateById(id, data) {
    const res = await api.put(endpoints.details + id, data);
    return res;
}

export async function deleteById(id) {
    const res = await api.del(endpoints.details + id);
    return res;
}

export async function getMyItems() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData._id;
    const url = endpoints.myItems + userId + '%22';
    const res = await api.get(url);
    return res;
}

