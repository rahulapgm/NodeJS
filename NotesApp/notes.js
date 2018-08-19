const fs = require('fs');

console.log("started notes module");
// console.log(module);
module.exports.age = 25;
module.exports.addNote = (fileName, text) => {
  fs.appendFileSync(fileName, text);
}