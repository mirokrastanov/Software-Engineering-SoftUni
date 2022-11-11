function browserHistory(inputObj, inputArr) {
    let commands = inputArr.slice();
    let browser = JSON.stringify(inputObj);
    browser = JSON.parse(browser);

    while (commands.length > 0) {
        let command = commands.shift().split(" ");
        let type = command.shift();
        let target = command.join(" ");
        let openTabs = browser["Open Tabs"];
        let valid = false;
        let toClear = false;
        switch (type) {
            case "Open":
                valid = true;
                openTabs.push(target);
                browser["Open Tabs"] = openTabs;
                break;
            case "Close":
                let tabs = openTabs.length;
                openTabs = openTabs.filter(a => a != target);
                if (tabs != openTabs.length) {
                    valid = true;
                }
                if (valid) {
                    browser["Recently Closed"].push(target);
                    browser["Open Tabs"] = openTabs;
                }
                break;
            case "Clear":
                toClear = true;
                break;
        }
        if (valid) {
            command.unshift(type);
            browser["Browser Logs"].push(command.join(" "));
        }
        if (toClear) {
            browser["Open Tabs"] = [];
            browser["Recently Closed"] = [];
            browser["Browser Logs"] = [];
        }
    }
    console.log(browser["Browser Name"]);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);

}

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);