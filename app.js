const express = require('express')

const app = express()

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'Hello from express',
//     app: 'Natours',
//   })
// })
//
// app.post('/', (req, res) => {
//   res.send('Posted.')
// })

app.get('/api/v1/tours', (req, res) => {})

const port = 8080
app.listen(port, () => {
  console.log(port)
})
