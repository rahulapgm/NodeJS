console.log("App Started");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var userInfo = os.userInfo();
//console.log(userInfo)

fs.appendFileSync('greetings.txt',`Hello ${userInfo.username}! You're ${notes.age}.`);


