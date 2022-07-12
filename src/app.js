const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
require('../database/db')


//Configurações
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//carregando models




//Carregando rotas

const index = require('./routes/index')
const product = require('./routes/product')
const customerRoute = require('./routes/customer-router')



router.post('/', (req, res, next)=>{
    res.status(200).send('OI NodeJS')
})

app.use('/', index)
app.use('/product', product)
app.use('/customer', customerRoute)

module.exports = app;