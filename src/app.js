const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')

//Configurações
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Carregando rotas

const index = require('./routes/index')
const product = require('./routes/product')



const data = {
    id: 123,
    name: 'julio'
}
router.post('/', (req, res, next)=>{
    res.status(200).send(data)
})

app.use('/', index)
app.use('/product', product)

module.exports = app;