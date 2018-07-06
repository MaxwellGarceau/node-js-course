console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const getNote = (title) => {
  const notes = fetchNotes();
  const foundNote = notes.filter((note) => note.title === title);
  return foundNote[0];
};

const removeNote = (title) => {
  let notes = fetchNotes();
  const remainingNotes = notes.filter((note) => note.title !== title);
  saveNotes(remainingNotes);

  return notes.length !== remainingNotes.length;
};

const logNote = (note) => {
  debugger;
  console.log('Note:', `Title: ${note.title}`, `Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
