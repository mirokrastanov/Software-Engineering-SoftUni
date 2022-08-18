function pipesinAPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);
    let v1 = h * p1;
    let v2 = h * p2;
    let vTotal = v1 + v2;
    let vDiff = Math.abs(v - vTotal);
    if (vTotal <= v) {
        let vPercent = (vTotal / v) * 100;
        let v1Percent = (v1 / vTotal) * 100;
        let v2Percent = (v2 / vTotal) * 100;
        console.log(`The pool is ${vPercent.toFixed(2)}% full. Pipe 1: ${v1Percent.toFixed(2)}%. Pipe 2: ${v2Percent.toFixed(2)}%.`);
    } else {
        console.log(`For ${h} hours the pool overflows with ${vDiff} liters.`);
    }
}

pipesinAPool(["1000", "100", "120","3"]);
pipesinAPool(["100", "100", "100", "2.5"])
