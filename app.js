const fs = require('fs')
const express = require('express')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log('Hello middleware')
  next()
})

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
    results: tours.length,
  })
}

const getTour = (req, res) => {
  const { id } = req.params
  const tour = tours.find((tour) => tour.id === parseInt(id))

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Not found',
    })
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  })
}

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1
  const newTour = Object.assign({ id: newId }, req.body)

  tours.push(newTour)

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        console.log(err)
        throw new Error(err)
      }

      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      })
    }
  )
}

app.route('/api/v1/tours').get(getAllTours).post(createTour)

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch((req, res) => {
    const { id } = req.params
  })

const port = 8080
app.listen(port, () => {
  console.log(port)
})
