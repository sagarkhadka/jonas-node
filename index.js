let fs = require('fs')

// ? sync
// read file
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)

// write file
// const textOut = `This is what we know about teh avocado: ${textIn}. \nCreated on ${Date.now()}`

// fs.writeFileSync('./txt/output.txt', textOut)

// * async
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  console.log(data)
})
console.log('Reading file...')
