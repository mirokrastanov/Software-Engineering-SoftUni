function destinationMapper(input) {
    let regExp = /(?<delim1>[=\/])(?<place>[A-Z][A-Za-z][A-Za-z]+)(\k<delim1>)/g;
    let matches = input.matchAll(regExp);
    let locations = [];
    let travelPts = 0;
    
    for (let match of matches) {
        locations.push(match.groups.place);
        travelPts += match.groups.place.length;
    }

    console.log(`Destinations: ${locations.join(", ")}`);
    console.log(`Travel Points: ${travelPts}`);

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");