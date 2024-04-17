import type { FastifyPluginAsync } from 'fastify';
import db from 'src/database/database';

const AccountRoutes: FastifyPluginAsync = async (server, _opts) => {

  server.get('/', async (req, res) => {
    const accounts = await db.selectFrom('account').selectAll().execute()

    return res.send({ accounts })
  })

}

export default AccountRoutes
