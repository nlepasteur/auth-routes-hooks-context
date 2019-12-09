const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const connection = require('./conf')

const SELECT_ALL_CLIENTS_QUERY = 'SELECT * FROM clients'

connection.connect(err => {
  if (err) {
    console.error(`Something wrong happened while connecting to database ${err.stack}`)
  } else {
    console.log(`Connection to database enabled ${connection.threadId}`)
  }
})

app.use(cors())

app.get('/', (req, res) => {
  res.send('go to /clients to see clients')
})


app.get('/clients', (req, res) => {
  connection.query(SELECT_ALL_CLIENTS_QUERY, (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json(results)
    }
  })
})

app.listen(port, err => {
  if (err) {
    throw new Error('Something wrong happened')
  } else {
    console.log(`Server is listening on port ${port}`)
  }
})