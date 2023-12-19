const express = require('express')
const routes = require('../routes/routes.js')
const app = express()

app.use(routes)

const port = 3000

app.listen(port,() => {
    console.log('arrancando la aplicacion')
})