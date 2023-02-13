const { expect } = require("chai");

describe("Valid", function () {
    it("Test 1 from Word.docx", function () {
        let expected = {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: '',
        };
        let result = () => solve({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: '',
        });
        expect(result).to.be.eql(expected);
    });

    it("Test 2 from Word.docx", () => {
        let expectedMsg = "Invalid request header: Invalid Method";
        let result = () => solve({
            method: 'OPTIONS',
            uri: 'git.master',
            version: 'HTTP/1.1',
            message: '-recursive'
        });
        expect(result).to.throw(Error, expectedMsg);
    });

    it("Test 3 from Word.docx", () => {
        let expectedMsg = "Invalid request header: Invalid Version";
        let result = () => solve({
            method: 'POST',
            uri: 'home.bash',
            message: 'rm -rf /*'
        });
        expect(result).to.throw(Error, expectedMsg);
    });
});