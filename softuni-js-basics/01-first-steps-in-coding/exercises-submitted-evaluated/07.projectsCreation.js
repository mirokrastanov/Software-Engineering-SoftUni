function projectsCreation(input) {
    let projectName = input[0];
    let projectTime = Number(input[1]) * 3;
    let projectCount = Number(input[1]);
    console.log(`The architect ${projectName} will need ${projectTime} hours to complete ${projectCount} project/s.`);
}

projectsCreation(["George", "4"]);