const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describle: 'Content of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
const command = process.argv[2];
// console.log('Command: ', command);
// console.log('Process.argv', process.argv);
// console.log('Yargs.argv', argv);

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('duplicate note');
  }
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Printing: ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
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
