import * as api from './api.js';

//=> ADJUST ALL ENDPOINTS ACCORDINGLY - 1st thing !!!
//=> CHANGE ONLY {VALUES}, DO NOT TOUCH {KEYS} !!!!
//=> change keys ONLY if adding new views
const endpoints = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'allItems': 'data/pets?sortBy=_createdOn%20desc&distinct=name',
    'myItems': '...', // if MY ITEMS DASHBOARD is needed
    'addItem': 'data/pets',
    'details': 'data/pets/', // :id
    'likeItem': 'data/donation',
    'getTotalLikes': 'data/donation?where=petId%3D%22', // + id + '%22&distinct=_ownerId&count'
    'getMyLikes': 'data/donation?where=petId%3D%22', // ${petId}%22%20and%20_ownerId%3D%22${userId}%22&count

};

//=> CHECK EACH RESPONSE - takes correct data (id or object or else)
//=> CHECK the endpoing route !!!

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

export async function getAllItems() {
    const res = await api.get(endpoints.allItems);
    return res;
}

// IF getMyItems is needed - follow the above example and adjust endpoint

export async function createItem(data) {
    const res = await api.post(endpoints.addItem, data);
    return res;
}

export async function getItemDetails(id) {
    const res = await api.get(endpoints.details + id);
    return res;
}

export async function editItem(id, data) {
    const res = await api.put(endpoints.details + id, data);
    return res;
}

export async function deleteItem(id) {
    const res = await api.del(endpoints.details + id);
    return res;
}

export async function likeItem(id) {
    const res = await api.post(endpoints.likeItem, { petId: id });
    return res;
}

export async function getTotalLikes(id) {
    const res = await api.get(endpoints.getTotalLikes + id + '%22&distinct=_ownerId&count');
    return res;
}

export async function getMyLikes(id) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData._id;
    const res = await api.get(endpoints.getMyLikes + `${id}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    return res;
}
