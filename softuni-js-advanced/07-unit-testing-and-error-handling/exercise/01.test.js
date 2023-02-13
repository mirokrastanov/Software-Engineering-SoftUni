function check(input) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = new RegExp(/[\d\w.]+[\d\w.]*/, 'gm');
    let messagePattern = new RegExp(/[\<\>\\\&\'\"]+/, 'gm'); // finds forbiden symbols -> hence use NOT for statements

    if (!input.method || !methods.includes(input.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (!input.uri || (!uriPattern.test(input.uri) && input.uri != "*")) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (!input.version || !versions.includes(input.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if ((!input.message && input.message != "") || (messagePattern.test(input.message) && input.message != "")) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return input;
}

// console.log(check({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }));
// console.log(check({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }));
console.log(check({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}));
