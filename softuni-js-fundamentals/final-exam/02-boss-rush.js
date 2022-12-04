function bossRush(input) {
    let regExp = /(?<del1>[|])(?<boss>[A-Z]{4,})(\k<del1>):(?<del2>[#])(?<title>[A-Za-z]+[ ][A-Za-z]+)(\k<del2>)/g;
    let inputCount = Number(input.shift());
    for (let i = 0; i < inputCount; i++) {
        let current = input[i];
        let match = current.matchAll(regExp);
        let boss = null;
        let title = null;
        for (let  el of match) {
            boss = el.groups.boss;
            title = el.groups.title;
        }
        if (boss && title) {
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}
bossRush(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#']);
bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#']);
