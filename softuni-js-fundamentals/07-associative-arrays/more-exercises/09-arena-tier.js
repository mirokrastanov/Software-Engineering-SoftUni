function arenaTier(input) {
    let workingArr = input.slice();
    let gladiators = {};
    let finish = false;

    workingArr.forEach(element => {
        if (element == "Ave Cesar") {  // end
            finish = true;
        } else {
            if (element.includes("->")) { // input 1
                let [gladiator, technique, skill] = element.split(" -> ");
                if (gladiators[gladiator]) {
                    let assets = gladiators[gladiator];
                    let techniqueIndex = assets.indexOf(technique);
                    if (techniqueIndex != -1) {
                        if (assets[techniqueIndex + 1] < skill) {
                            assets[techniqueIndex + 1] = Number(skill);
                        }
                    } else {
                        assets.push(technique);
                        assets.push(Number(skill));
                    }
                } else {
                    gladiators[gladiator] = [technique, Number(skill)];
                }
            } else {  // input 2
                let [glad1, glad2] = element.split(" vs ");
                if (gladiators[glad1] && gladiators[glad2]) {
                    let glad1Assets = gladiators[glad1];
                    let glad2Assets = gladiators[glad2];
                    for (let i = 0; i < glad1Assets.length; i += 2) {
                        let glad1technique = glad1Assets[i];
                        let glad1skill = glad1Assets[i + 1];
                        let fought = false;
                        for (let k = 0; k < glad2Assets.length; k += 2) {
                            let glad2technique = glad2Assets[k];
                            let glad2skill = glad2Assets[k + 1];
                            if (glad1technique == glad2technique) {
                                fought = true;
                                if (glad1skill > glad2skill) {
                                    delete gladiators[glad2];
                                } else if (glad2skill > glad1skill) {
                                    delete gladiators[glad1];
                                }
                                break;
                            }
                        }
                        if (fought) {
                            break;
                        }
                    }
                }
            }
        }
    });

    if (finish) {
        let totalSkill = {};
        for (let [gladiator, assets] of Object.entries(gladiators)) {  // sort gladiators 1st
            let sorted = assets.slice().filter(a => a == Number(a));
            let reduced = sorted.reduce((a, b) => a + b, 0);
            totalSkill[gladiator] = reduced;
        }
        let sortedSkill = Object.fromEntries(Object.entries(totalSkill).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
        // console.log(sortedSkill);

        for (let gladiator in sortedSkill) {   // sort by descending total skill - then sort by ascending technique name 
            console.log(`${gladiator}: ${sortedSkill[gladiator]} skill`); // FINAL PRINT
            let techNames = {};
            let currentGladTechniques = gladiators[gladiator];
            for (let i = 0; i < currentGladTechniques.length; i += 2) {
                techNames[currentGladTechniques[i]] = currentGladTechniques[i + 1];
            }
            let sortedNames = Object.entries(techNames).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            // console.log(Object.fromEntries(sortedNames));
            for (let [key, value] of sortedNames) {
                console.log(`- ${key} <!> ${value}`);  // FINAL PRINT
            }
        }
    }

}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);