const check = require('./07.Form-Validation/formValidation');
const html = require('./07.Form-Validation/index.html');
const { expect, assert } = require('chai');

var submit = btn;
var companyFieldset = companyInfo;
var companyCheckbox = company;
var companyNumber = compNumber;
var validDiv = $("#valid");

var username = $("#username");
var password = $("#password");
var confirmPassword = $("#confirm-password");
var email = $("#email");

username.val("Pe");
password.val("12345");
confirmPassword.val("12346");
email.val("pesho");

var clickEvent = document.createEvent("MouseEvent");
clickEvent.initEvent("click", true, true);

submit.get(0).dispatchEvent(clickEvent);

expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(username.css("border-left-color"), "Username textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(username.css("border-top-color"), "Username textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(username.css("border-right-color"), "Username textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(username.css("border-bottom-color"), "Username textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(password.css("border-left-color"), "Password textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(password.css("border-top-color"), "Password textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(password.css("border-right-color"), "Password textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(password.css("border-bottom-color"), "Password textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(confirmPassword.css("border-left-color"), "ConfirmPassword textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(confirmPassword.css("border-top-color"), "ConfirmPassword textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(confirmPassword.css("border-right-color"), "ConfirmPassword textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(confirmPassword.css("border-bottom-color"), "ConfirmPassword textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(email.css("border-left-color"), "Email textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(email.css("border-top-color"), "Email textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(email.css("border-right-color"), "Email textbox's border did not become red!");
expect(["#ff0000", "rgb(255, 0, 0)", "red"]).to.include(email.css("border-bottom-color"), "Email textbox's border did not become red!");
expect(validDiv.css("display")).to.equal("none", "Div with id=\'valid\' did not have display style \'none\'!");