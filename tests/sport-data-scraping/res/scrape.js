
const html = {
    elements: {
        btn: () => document.querySelector('#pull-data'),
        parsed: () => document.querySelector('#left'),
        raw: () => document.querySelector('#right'),
    },
};

html.elements.btn().addEventListener('click', async (e) => {
    await fetchData();
});

const fetchData = async () => {
    const website = 'https://scores.weaklytyped.com/api/v1/sports/nba/events';
    console.log('Pulling data from: ', website);

    const res = await axios.get(website);
    console.log(res);
    const data = await res;

    html.elements.raw.textContent = data;
}
