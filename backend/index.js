// PACKAGES
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// EnvTemp, EnvHumidity, Wind Direction, Wind Speed

// Express App Creation
const app = express()

// MIDDLEWARES
app.use(cors())
// app.use(bodyParser)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send({
        envTemp: 'ashdj',
        EnvHumidity:'jhfewhf',
        WindDirection: 'abac',
        WindSpeed:'def',
    })
  })

// Listening on PORT=3000
// SERVER STARTS HERE
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})