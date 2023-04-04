const mainAddress = 'http://localhost:3030/';

async function seeker(method, subAddress, dataObject) {
    try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const additions = { method, headers: {} };
        if (userData != null) additions.headers['X-Authorization'] = userData.accessToken;
        if (dataObject != undefined) {
            additions.headers['Content-Type'] = 'application/json';
            additions.body = JSON.stringify(dataObject);
        }
        const resRAW = await fetch(mainAddress + subAddress, additions);
        let resDATA;
        if (resRAW.status != 204) resDATA = await resRAW.json();
        if (resRAW.ok == false) {
            if (resRAW.status == 403) localStorage.removeItem('userData');
            let error = resDATA;
            throw error;
        }
        return resDATA;
    } catch (err) {
        alert(err.message);
        throw err;
    }
}
const get = seeker.bind(null, 'GET');
const post = seeker.bind(null, 'POST');
const put = seeker.bind(null, 'PUT');
const del = seeker.bind(null, 'DELETE');

export { get, post, put, del }
