const chalk = require('chalk');
const yargs = require('yargs');

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
  handler: ({title, body}) => {
    console.log('running add command')
    console.log(chalk.green('title: ', title))
    console.log(chalk.yellow('body: ', body))
  }
})

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
  handler: ({title}) => {
    console.log('running remove command');
    console.log(chalk.green('title: ', title))
  }
})

yargs.parse();