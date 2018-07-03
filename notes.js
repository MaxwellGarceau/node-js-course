console.log('Starting notes.js');

const addNote = (title, body) => {
  console.log('Adding note', title, body);
};

const getAll = () => {
  console.log('Getting all notes');
};

const getNote = (title, body) => {
  console.log('Getting a note', title, body);
};

const removeNote = (title) => {
  console.log('Removing a note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
