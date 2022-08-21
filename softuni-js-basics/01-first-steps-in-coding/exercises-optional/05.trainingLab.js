function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);
    let wCm = w * 100;
    let hCm = h * 100;

    let workspaceW = 120;
    let workspaceH = 70; 
    
    let desksH = Math.floor((hCm - 100) / workspaceH);
    let desksW = Math.floor((wCm / workspaceW));
    let total = (desksH * desksW) - 3;

    console.log(total);
}

trainingLab(["15", "8.9"]);
trainingLab(["8.4", "5.2"]);
