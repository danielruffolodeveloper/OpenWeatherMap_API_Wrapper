// server.js

const express = require('express')
require('dotenv').config();

const app = express()

app.get('/', (req, res) => {
    res.send('Tiny Weather Endpoint:V1.0.0')
})



app.listen(3000, () => {
    console.log('Server is up on 3000')
})