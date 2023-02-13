function check(input) {

    let uriRegex = new RegExp(/[\d\w.]+[\d\w.]*/, 'g');
    let matches = input.uri.match(uriRegex)
    console.log(matches[0]);



}
check({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

// module.exports = check;