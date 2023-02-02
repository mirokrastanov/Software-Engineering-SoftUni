function extractText() {
    const items = document.querySelectorAll("#items li");
    let result = [];
    
    Array.from(items).forEach(element => {
        result.push(element.textContent);
    });

    document.querySelector("#result").textContent = result.join("\n");

}