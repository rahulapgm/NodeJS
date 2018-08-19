console.log("App Started");

const os = require('os');
const notes = require('./notes.js');

var userInfo = os.userInfo();
var fileName ="greetings.txt";

const res = notes.addNote(fileName, `Hello ${userInfo.username}! You're ${notes.age}.`);

// var userInfo = os.userInfo();
// //console.log(userInfo)

// fs.appendFileSync('greetings.txt',`Hello ${userInfo.username}! You're ${notes.age}.`);


