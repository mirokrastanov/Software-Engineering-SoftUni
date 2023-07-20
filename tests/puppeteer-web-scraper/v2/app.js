import { scrapeStandings } from "./scrapers.js";
import { firebaseConfig } from './constants.js';

import { initializeApp } from 'firebase/app';
// import {
//     getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, connectAuthEmulator,
//     onAuthStateChanged, signOut,
// } from "firebase/auth";
import { getDatabase, ref, set, get, child } from 'firebase/database';

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
// const auth = getAuth(firebaseApp);


async function scrapeAll() {
    const standings = await scrapeStandings('https://www.nba.com/standings');
    console.log(standings);

    set(ref(db, 'nba/standings'), standings);

    console.log('Saved to Firebase!');

    return;
}

scrapeAll();