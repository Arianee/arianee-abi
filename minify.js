const fs = require('fs');
var path = require('path')

const testFolder = './abi/';

const dir={
  js:testFolder+'js/',
  json:testFolder+'json/'
}

if (!fs.existsSync(dir.js)) {
  fs.mkdirSync(dir.js);
};

if (!fs.existsSync( dir.json)) {
  fs.mkdirSync(dir.json);
};


const minifiedFiles = [];
fs.readdirSync(testFolder).forEach(file => {
  if (path.extname(file) === '.json') {
    minifiedFiles.push(testFolder + file);
    const content = fs.readFileSync(testFolder + file);
    var minified = JSON.stringify(JSON.parse(content));
    
    // Write jsFile
    const jsfileName = file.substr(0, file.lastIndexOf(".")) + ".js";
    const jsContent="module.exports = " + minified;
    fs.writeFileSync(dir.js + jsfileName, jsContent);

    // write json content
    fs.writeFileSync(dir.json + file, minified);
  }
});

console.log("FINISHED MINI-FYING")
console.log(minifiedFiles);