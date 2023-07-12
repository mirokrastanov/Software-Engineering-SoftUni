import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', async (req, res) => {
    const data = await fetch('https://scores.weaklytyped.com/api/v1/sports/nba/events');
    res.json(await data.json());
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));