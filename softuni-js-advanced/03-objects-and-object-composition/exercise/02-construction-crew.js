function constructionCrew(worker) {
    if (worker['dizziness']) {
        worker['levelOfHydrated'] += (worker['weight'] * 0.1 * worker['experience']);
        worker['dizziness'] = false;
    }
    // console.log(worker);
    return worker;
}

constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});