function extractFile(input) {
    let splitArr = input.split("\\");
    let last = splitArr.pop().split(".");
    let extension = last.pop().trim();
    let file = last.join(".").trim();

    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
    
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');
