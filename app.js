const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const { argv } = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    //'Builder' property will config the parameters passed from command line 
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note description",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List your your notes',
    handler: () => {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading the new note',
    handler: (argv) => {
        notes.findNote(argv.title)
    }
})

//basically sends all the data to the proccess
yargs.parse()