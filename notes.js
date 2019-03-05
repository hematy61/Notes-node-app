const fs = require('fs');
const chalk = require('chalk');

//--------------------------------------------------------------------------
//-- General functions ------------------------------------------------------------
//--------------------------------------------------------------------------

// this function is saving the new or edited notes to the data.json file.
const saveNotes = (notes) => {
  fs.writeFileSync('./data.json', JSON.stringify(notes));
  console.log(loadNotes())
};


// this function is gonna load all notes from data.json.
const loadNotes = () => {
  // if there is data.json file "try" code is gonna run, otherwise it's gonna run "catch" code and return
  // an empty array which then writeFileSync in addNote function is gonna create the data.json file.
  try {
    const notes = JSON.parse(fs.readFileSync('./data.json').toString());
    return notes;
  } catch (error) {
    return [];
  }
};

//--------------------------------------------------------------------------
//-- List Notes ------------------------------------------------------------
//--------------------------------------------------------------------------
const getNotes = () => {
  return 'your notes ....';
};

//--------------------------------------------------------------------------
//-- Add Notes -------------------------------------------------------------
//--------------------------------------------------------------------------

// this function handles adding new notes
const addNote = (title, body) => {
  let notes = loadNotes();
  // checking for the note with the same title. we don't want to have same note.
  const duplicateNotes = notes.filter( note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({title, body});
    saveNotes(notes);
    console.log(chalk.greenBright.inverse.bold('new note added successfully!!!'));
  } else{
    console.log(chalk.redBright.inverse.bold('this title exist!!!'));
  }
};

//--------------------------------------------------------------------------
//-- Remove Notes ----------------------------------------------------------
//--------------------------------------------------------------------------

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter( note => note.title !== title );
  if (notesToKeep.length < notes.length) {
    console.log(chalk.greenBright.inverse('Note Removed.'))
    saveNotes(notesToKeep);
  }else{
    console.log(chalk.redBright.inverse("the title doesn't exist"));
  }
}





module.exports = exports = {
  getNotes,
  addNote,
  removeNote
}