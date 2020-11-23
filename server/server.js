const express = require('express')
const path = require('path')

const server = express()
const taskRoutes = require('./routes/tasks')

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/tasks', taskRoutes)

module.exports = server
