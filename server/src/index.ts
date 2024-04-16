import fastify from 'fastify'
import { config } from 'dotenv'

config({ path: '../.env' })

const server = fastify()
const serverPort = parseInt(process.env.SERVER_PORT as string) || 5173

// Declare a route
server.get('/api', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
server.listen({ port: serverPort }, function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }

  console.log(`Server is now listening on ${address}`)
})
