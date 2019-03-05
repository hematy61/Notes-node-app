const chalk = require('chalk');
const yargs = require('yargs');

const {getNotes, addNote, removeNote} = require('./notes');

// create add command
yargs.command({
  command: 'add',
  desc: 'adds new note',
  builder: {
    title: {
      desc: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      desc: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler({title, body}) {
    console.log('running add command');
    console.log(addNote(title, body));
  }
});

// create remove command
yargs.command({
  command: 'remove',
  desc: 'removes a note',
  builder: {
    title: {
      desc: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler({title}) {
    console.log('running remove command');
    removeNote(title);
  }
});

// create list command
yargs.command({
  command: 'list',
  desc: 'lists all notes',
  handler() {
    console.log('running list command');
  }
});

// create edit command 
yargs.command({
  command: 'edit',
  desc: ' edit a note by title',
  builder: {
    title: {
      desc: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler({title}) {
    console.log('running edit command');
    console.log(chalk.green('title: ', title));
  }
});


yargs.parse();