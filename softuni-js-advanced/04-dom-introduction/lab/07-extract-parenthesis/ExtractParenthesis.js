function extract(content) {
    let regex = new RegExp(/[(][\w\d\s]*[)]/, 'g');
    const contentElement = document.querySelector("#content");

    let matches = contentElement.textContent.match(regex);
    let text = [];

    matches.forEach(element => {
        let current = element
            .split("")
            .filter(a => a != "(" && a != ")")
            .join("");
        text.push(current);
    });

    return text.join("; ");

}