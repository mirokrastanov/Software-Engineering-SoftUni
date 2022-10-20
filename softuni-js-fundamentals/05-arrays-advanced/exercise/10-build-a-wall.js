function buildAWall(inputArr) {
    let sections = inputArr.map(Number);
    let days = 0;
    let concrete = 0;
    let finished = false;
    let dailyConcrete = [];

    while (!finished) {
        days++;
        let concreteUsedToday = 0;
        let sectionLength = sections.length;
        for (let current = 0; current < sectionLength; current++) {
            let section = sections[current];
            if (section < 0) {
                section = 0;
            } else if (section > 30) {
                section = 30;
            }
            if (section < 30) {
                section++;
                concrete += 195;
                concreteUsedToday += 195;
                sections.splice(current, 1, section);
            }
        }
        dailyConcrete.push(concreteUsedToday);
        let unfinished = sections.filter(a => a != 30);
        if (unfinished.length == 0) {
            finished = true;
            break;
        }
    }
    let costs = concrete * 1900;
    console.log(`${dailyConcrete.join(", ")}`);
    console.log(`${costs} pesos`);
}

buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);