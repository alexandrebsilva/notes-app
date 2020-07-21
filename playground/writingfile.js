const fs = require('fs')

const books = [
    {
        author: "Alexandre Borges",
        title: "The company triumph"
    },
    {
        author: "Maria Vitoria",
        title: "The greatest researcher"
    }
]
//parse it to a recordable format (JSON string)
const booksJSON = JSON.stringify(books)
fs.writeFileSync('testing.json', booksJSON)

//read contet from file using fs
//binary format
const fileBuffer = fs.readFileSync('testing.json')

//extract its content
const fileContent = fileBuffer.toString()
console.log(fileContent)

// converts it back to jS Object
const fileContentObj = JSON.parse(fileContent)

console.log(fileContentObj[0].author)