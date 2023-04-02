import * as api from './api.js';

// TODO CLEAR UNNECESSARY STUFF AT THE END !!!!! >>>

const subAddress = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'allItems': 'data/fruits?sortBy=_createdOn%20desc',
    'addItem': 'data/fruits',
    'details': 'data/fruits/', // + extra
    'search': 'data/fruits?where=name%20LIKE%20%22', // + extra
};

export async function login(email, password) {
    const res = await api.post(subAddress.login, { email, password });
    localStorage.setItem('userData', JSON.stringify(res));
    return res;
}

export async function register(email, password) {
    const res = await api.post(subAddress.register, { email, password });
    localStorage.setItem('userData', JSON.stringify(res));
    return res;
}

export async function logout() {
    const res = await api.get(subAddress.logout);
    localStorage.removeItem('userData');
    return res;
}

export async function getAllItems() {
    const res = await api.get(subAddress.allItems);
    return res;
}

export async function createItem(data) {
    const res = await api.post(subAddress.addItem, data);
    return res;
}

export async function getItemDetails(id) {
    const res = await api.get(subAddress.details + id);
    return res;
}

export async function editItem(id, data) {
    const res = await api.put(subAddress.details + id, data);
    return res;
}

export async function deleteItem(id) {
    const res = await api.del(subAddress.details + id);
    return res;
}

export async function searchFor(query){
    const res = api.get(subAddress.search + query + '%22');
    return res;
}
