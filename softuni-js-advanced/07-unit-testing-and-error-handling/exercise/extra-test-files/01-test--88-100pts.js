function check(input) {
    let m = false;
    if (input.hasOwnProperty('method')) {
        if (input.method == 'GET' || input.method == 'POST'
            || input.method == 'DELETE' || input.method == 'CONNECT') {
            m = true;
        }
    }
    let u = false;
    let uriRegex = new RegExp(/[\d\w.]+[\d\w.]*/, 'g');
    // let uriRegex = new RegExp(/\.*[a-z0-9]+\.*[a-z0-9]*\.*[a-z0-9]*/, 'gim');
    if (input.hasOwnProperty('uri')) {
        let uriMatch = input.uri.match(uriRegex);
        if (input.uri.length == uriMatch[0].length && input.uri.length > 0) {
            u = true;
        }
        if (input.uri == "*") {
            u = true;
        }
    }
    let v = false;
    if (input.hasOwnProperty('version')) {
        if (input.version == 'HTTP/0.9' || input.version == 'HTTP/1.0'
            || input.version == 'HTTP/1.1' || input.version == 'HTTP/2.0') {
            v = true;
        }
    }
    let me = false;
    let meRegex = new RegExp(/[^\<\>\\\&\'\"]*/, 'g');
    if (input.hasOwnProperty('message')) {
        let meMatch = input.message.match(meRegex);
        if (input.message.length == meMatch[0].length || input.message == "") {
            me = true;
        }
    }
    if (m && u && v && me) {
        return input;
    } else {
        if (!m) {
            throw new Error(`Invalid request header: Invalid Method`);
        } else if (!u) {
            throw new Error(`Invalid request header: Invalid URI`);
        } else if (!v) {
            throw new Error(`Invalid request header: Invalid Version`);
        } else if (!me) {
            throw new Error(`Invalid request header: Invalid Message`);
        }
    }
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
