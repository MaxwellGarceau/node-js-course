console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = process.argv[2];
console.log('Command: ', command);
console.log('Process.argv', process.argv);
console.log('Yargs.argv', argv);

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('duplicate note');
  }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    const foundNote = notes.getNote(argv.title);
    console.log(notes.logNote(foundNote));
    // foundNote ? notes.logNote(foundNote) : console.log('Note not found');
} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}

const user = {
  name: 'Max',
  sayHi: () => {
    // console.log('arguments', arguments);
    // console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    // console.log(arguments);
    // console.log(`Hi. I'm ${this.name}`);
  }
}

user.sayHi(1, 2, 3);
