'use strict'
const http = require('http')
const debug = require('debug')('nodestr:server')
const express = require('express')

const app = express()
const port = 3000


const server = http.createServer(app)
const router = express.Router()

router.get('/', (req, res, next)=>{
    res.status(200).send({
        title: 'Node Api',
        version: '0.0.1'
    })
})

app.use('/', router)

server.listen(port,()=>console.log('Api rodando'))