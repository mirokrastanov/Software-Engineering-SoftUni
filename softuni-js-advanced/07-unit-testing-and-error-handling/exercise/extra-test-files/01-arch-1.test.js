const { expect, assert } = require('chai');

function check(input) {

    describe('check valid object', () => {
        let m = false;
        if (input.method == 'GET' || input.method == 'POST'
            || input.method == 'DELETE' || input.method == 'CONNECT') {
            m = true;
        }
        it('has valid method', () => {
            expect(m).to.equal(true);
        });
        let u = false;
        let uriRegex = new RegExp(/[\d\w.]+[\d\w.]*/, 'g');
        let uriMatch = input.uri.match(uriRegex);
        if (input.uri.length == uriMatch[0].length && input.uri != "" && input.uri) {
            u = true;
        }
        it('has valid uri', () => {
            expect(u).to.equal(true);
        })
        let v = false;
        if (input.version == 'HTTP/0.9' || input.version == 'HTTP/1.0'
            || input.version == 'HTTP/1.1' || input.version == 'HTTP/2.0') {
            v = true;
        }
        it('has valid version', () => {
            expect(v).to.equal(true);
        });
        let me = false;
        let meRegex = new RegExp(/[^\<\>\\\&\'\"]*/, 'g');
        let meMatch = input.message.match(meRegex);
        if (input.message.length == meMatch[0].length || input.message == "") {
            me = true;
        }
        it('has valid message', () => {
            expect(me).to.equal(true);
        });

    });



}
check({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
