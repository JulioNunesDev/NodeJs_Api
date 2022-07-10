const express = require('express')
const app = express()
const router = express.Router()

router.get('/', (req, res, next)=>{
    res.status(200).send({
        title: 'Node Api',
        version: '0.0.1'
    })
})

app.use('/', router)

module.exports = app;