const fs = require('fs');
var path = require('path')

const rootFolder = './abi/';

const dir={
  js:rootFolder+'js/',
  json:rootFolder+'json/'
}

fs.readdirSync(dir.json).forEach(folder => {

  fs.readdirSync(path.join(dir.json ,folder)).forEach(file => {

    if (path.extname(file) === '.json') {
      const content = fs.readFileSync(path.join(__dirname, dir.json , folder , file) );
      const minified = JSON.stringify(JSON.parse(content));

      // Write jsFile
      const jsfileName = file.substr(0, file.lastIndexOf(".")) + ".js";
      const jsContent="module.exports = " + minified;
      const outFolder = path.join(__dirname, dir.js , folder)
      if (!fs.existsSync(outFolder)) {
        fs.mkdirSync(outFolder);
      }

      fs.writeFileSync(path.join(outFolder , jsfileName), jsContent);
    }

  })

});

console.log("FINISHED MINI-FYING")
