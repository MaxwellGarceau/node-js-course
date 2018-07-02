console.log('Starting notes.js');

// console.log(module);

module.exports.age = 26;

module.exports.addNote = () => {
  console.log('AddNote');
  return 'New Note';
}

module.exports.add = (a, b) => {
  return a + b;
}


console.log(module.exports);