import { config } from 'dotenv'
import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import './database/migrations'
import AccountRoutes from './routes/accounts'

config({ path: '../.env' })

const server = fastify({ logger: true })
const serverPort = parseInt(process.env.SERVER_PORT as string) || 5173

server.register(fastifyCors)

server.register((instance, _opts, done) => {
  instance.register(AccountRoutes, { prefix: '/accounts' })
  done()
}, { prefix: '/api' })

server.listen({ port: serverPort }, function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }

  console.log(`Server is now listening on ${address}`)
})
