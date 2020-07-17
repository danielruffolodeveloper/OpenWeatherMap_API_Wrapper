// server.js

const express = require('express')
const api_helper = require('./API_helper')
const morgan = require('morgan')
const port = 3000;

require('dotenv').config();

const app = express()
app.use(morgan('combined'))


app.get('/', (req, res) => {
    res.send('Tiny Weather Endpoint:V1.0.0')
})

app.get('/getweather/:location', (req, res) => {
    api_helper.make_API_call(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.location}&appid=${process.env.API_KEY}`)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => {
    console.log(`Server is up on ${port}`)
})