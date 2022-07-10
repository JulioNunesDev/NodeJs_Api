'use strict'
const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')

const port = 3000

const server = http.createServer(app)

server.listen(port,()=>console.log('Api rodando'))