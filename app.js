// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This is a new note'),

// fs.appendFileSync('notes.txt', ' I am a big star!')

// const add = require ('./utils.js')

// const sum = add(4,2)
// console.log(sum)

// const getNotes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

// loading npm libraries 

var validator = require('validator')
var chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Using the validator method

// console.log(validator.isEmail('email@yahoo.com'))

// console.log(chalk.bold.blue('hello world'))
// var greenMsg = chalk.green.bold('Obynokase')
// console.log(greenMsg)

// const command = process.argv[2]

// if (command === 'add'){
//     console.log('Adding note!')
// }else if (command === 'remove'){
//     console.log('Removing note!')

// Adding a new note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title', // description
            demandOption: true, // needs to be provided
            type: 'string' // type
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote (argv.title, argv.body)
    }
})

// Removing a note

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
        // console.log('Removing a note!')
    }
})

// Listing a note

yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler(){
        notes.listNotes()
        // console.log('Listing notes!')
    }
})

// Reading Notes

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        // console.log('Reading a note!')
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)