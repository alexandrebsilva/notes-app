const fs = require('fs')
const chalk = require('chalk')


const loadNotesFromFile = () => {
    try {
        const fileBuffer = fs.readFileSync('notes.json')
        const content = JSON.parse(fileBuffer.toString())

        return content
    } catch (error) {
        return []
    }
}

const listNotes = function () {
    console.log(loadNotesFromFile())
}

const findNote = (title) => {
    const notes = loadNotesFromFile()
    const wantedNote = notes.find(note => title == note.title)

    if (wantedNote) {
        console.log(chalk.green.inverse('Note found!'))
        console.log(wantedNote)
    }
    else {
        console.log(chalk.red.inverse('Note not found :('))
    }
}

const addNote = (title, body) => {
    const notes = loadNotesFromFile()
    const duplicatedTitles = notes.find(note => note.title === title)

    if (duplicatedTitles === undefined) {
        notes.push({ title, body })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added successfully'))
    }
    else {
        console.log(chalk.red.inverse('Title already in use, please try another one'))
    }
}

const removeNote = (title) => {
    const notes = loadNotesFromFile()
    const notesToKeep = notes.filter(note => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse('Note not found :('))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


module.exports = {
    listNotes,
    addNote,
    removeNote,
    findNote
}