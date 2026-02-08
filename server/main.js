const express = require('express')
const cors = require('cors')

require('dotenv').config({ quiet: true })

const PORT = process.env.PORT

const server = express()

server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
  console.log(req)
  res.send({ message: 'hello from server' })
})

server.listen(PORT, () => {
  console.log('server is running on port : ' + PORT)
})
