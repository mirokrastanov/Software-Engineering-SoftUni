function extractEmails(input) {
    // let regex = /(?<user>[A-Za-z0-9][A-Za-z0-9\.\_]+[-]?[A-Za-z0-9\.\_]+)@(?<host>[A-Za-z][A-Za-z-]*[A-Za-z][^-][.]{1}[A-Za-z]*[.]?[A-Za-z]*)/g;
    let regex = /(?<user>[A-Za-z0-9\.\_\-]+[-]?[A-Za-z0-9\.\_]+)@(?<host>[A-Za-z][A-Za-z-]*[A-Za-z][^-][.]{1}[A-Za-z]*[.]?[A-Za-z]*)/g;

    let matches = input.matchAll(regex);
    for (let el of matches) {
        // console.log(el.groups);
        let user = el.groups.user.split("");
        let host = el.groups.host.split("");
        if (user[0] == "." || user[0] == "_" || user[0] == "-") {
            continue;
        } else if (user[user.length - 1] == "." || user[user.length - 1] == "_" || user[user.length - 1] == "-") {
            continue;
        } else if (host[0] == "." || host[0] == "_" || host[0] == "-") {
            continue;
        }
        // while (user[0] == "." || user[0] == "_" || user[0] == "-") {
        //     user.shift();
        // }
        // while (user[user.length - 1] == "." || user[user.length - 1] == "_" || user[user.length - 1] == "-") {
        //     user.pop();
        // }
        // while (host[0] == "." || host[0] == "_" || host[0] == "-") {
        //     host.shift();
        // }
        while (host[host.length - 1] == "." || host[host.length - 1] == "_" || host[host.length - 1] == "-") {
            host.pop();
        }
        console.log(user.join("") + "@" + host.join(""));
    }
    // console.log("----");
}

extractEmails("Please contact us at: support@github.com.");
extractEmails("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.");
extractEmails("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.");
// extractEmails("•	Examples of invalid emails: --123@gmail.com, …@mail.bg, .info@info.info, _steve@yahoo.cn, mike@helloworld, mike@.unknown.soft., s.johnson@invalid-.");
// extractEmails("•	Examples of valid emails: info@softuni-bulgaria.org, kiki@hotmail.co.uk, no-reply@github.com, s.peterson@mail.uu.net, info-bg@software-university.software.academy. ");