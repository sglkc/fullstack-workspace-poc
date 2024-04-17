import type { FastifyPluginAsync } from 'fastify';
import db from 'src/database/database';
import { NewAccount, UpdateAccount } from 'src/database/types';

const AccountRoutes: FastifyPluginAsync = async (server, _opts) => {

  server.get(
    '/', async (_req, res) => {
      const accounts = await db.selectFrom('account')
        .selectAll()
        .execute()

      return res.send({
        status: 'success',
        results: accounts
      })
    })

  server.post<{ Body: NewAccount }>(
    '/', async (req, res) => {
      const query = await db.insertInto('account')
        .values(req.body)
        .executeTakeFirst()

      const account = await db.selectFrom('account')
        .selectAll()
        .where('id', '=', Number(query.insertId))
        .executeTakeFirst()

      return res.send({
        status: 'success',
        result: account
      })
    })

  server.patch<{ Body: UpdateAccount, Params: { id: string } }>(
    '/:id', async (req, res) => {
      const id = parseInt(req.params.id)

      await db.updateTable('account')
        .set(req.body)
        .where('id', '=', id)
        .executeTakeFirst()

      const account = await db.selectFrom('account')
        .selectAll()
        .where('id', '=', id)
        .executeTakeFirst()

      return res.send({
        status: 'success',
        result: account
      })
    })

  server.delete<{ Params: { id: string } }>(
    '/:id', async (req, res) => {
      const id = parseInt(req.params.id)

      await db.deleteFrom('account')
        .where('id', '=', id)
        .executeTakeFirst()

      return res.send({ status: 'success' })
    }
  )
}

export default AccountRoutes
