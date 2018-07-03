// console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Max'));

const filteredArray = _.uniq(['Max', 1, 2, 'Max', 3, 4, 1]);
console.log(filteredArray);

// console.log(notes.add(4, 5));

// let res = notes.addNote();
// console.log(res);

// let user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello, ${user.username}! You are ${notes.age}.`);
