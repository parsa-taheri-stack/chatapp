const express = require('express')
const { createServer } = require('node:http')
const { Server } = require('socket.io')

require('dotenv').config({
  quiet: true,
})
const PORT = process.env.PORT

const express_server = express()
const server = createServer(express_server)
const io = new Server(server)

express_server.get('/', (req, res) => {
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
