const express = require('express')
const { createServer } = require('node:http')
const { join } = require('node:path')
const { Server } = require('socket.io')
require('dotenv').config({
  quiet: true,
})
const PORT = process.env.PORT

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
  res.write('Hello from sockets server')
  res.end()
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(PORT, () => {
  console.log('server running at http://localhost:' + PORT)
})
