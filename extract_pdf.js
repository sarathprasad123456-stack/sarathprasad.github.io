const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('C:\\Users\\sarat\\Downloads\\Resume full.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('C:\\Users\\sarat\\.gemini\\antigravity\\scratch\\sarathprasad.github.io\\resume_extracted.txt', data.text);
    console.log("Extraction Done");
});
