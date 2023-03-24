import * as api from './src/api/api.js';

const endpoints = {
    'login': 'users/login',
    'register': 'users/register',
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
