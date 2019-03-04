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
  handler: (argv) => {
    console.log('running add command')
    console.log(chalk.green('title: ', argv.title))
    console.log(chalk.yellow('body: ', argv.body))
  }
})

yargs.parse();