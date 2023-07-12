import axios from "axios";

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
    const website = 'https://www.espn.com/nba-summer-league/scoreboard';
    console.log('Pulling data from: ', website);

    const res = await axios.get(website, {
        headers: {
            
        }
    });
    const data = await res.text();

    html.elements.raw.textContent = data;
}
