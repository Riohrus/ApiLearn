const express = require('express')

const app = express.Router()

app.get('/', (req,res)=> {
    res.status(200).send('El servicio esta funcionando')
})

module.exports = app