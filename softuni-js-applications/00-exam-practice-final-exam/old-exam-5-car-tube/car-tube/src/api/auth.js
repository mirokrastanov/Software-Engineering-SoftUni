import * as api from './api.js';

//=> ADJUST ALL ENDPOINTS ACCORDINGLY - 1st thing !!!
//=> CHANGE ONLY {VALUES}, DO NOT TOUCH {KEYS} !!!!
//=> change keys ONLY if adding new views
const endpoints = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'allItems': 'data/cars?sortBy=_createdOn%20desc',
    'myItems': 'data/cars?where=_ownerId%3D%22', // {userId}%22&sortBy=_createdOn%20desc
    'addItem': 'data/cars',
    'details': 'data/cars/', // :id
    'search': 'data/cars?where=year%3D', //  + query
    'likeItem': 'data/likes',
    'getTotalLikes': 'data/likes?where=albumId%3D%22', // + id + '%22&distinct=_ownerId&count'
    'getMyLikes': 'data/likes?where=albumId%3D%22', // + id + '%22%20and%20_ownerId%3D%22' + userId + '%22&count'

};

//=> CHECK EACH RESPONSE - takes correct data (id or object or else)
//=> CHECK the endpoing route !!!

export async function login(username, password) {
    const res = await api.post(endpoints.login, { username, password });
    localStorage.setItem('userData', JSON.stringify(res));
    return res;
}

export async function register(username, password) {
    const res = await api.post(endpoints.register, { username, password });
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

// IF getMyItems is needed - COPY the ABOVE function and adjust endpoint
export async function getMyItems() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData._id;
    const res = await api.get(endpoints.myItems + `${userId}%22&sortBy=_createdOn%20desc`);
    return res;
}

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
    const res = await api.post(endpoints.likeItem, { albumId: id });
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

// IF SEARCH is needed - follow the below example and adjust endpoint
export async function searchFor(query){
    const res = api.get(endpoints.search + query);
    return res;
}

