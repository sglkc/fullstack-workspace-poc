import type { FastifyPluginAsync } from 'fastify';
import db from 'src/database/database';
import { NewAccount, UpdateAccount } from 'src/database/types';

const AccountRoutes: FastifyPluginAsync = async (server, _opts) => {

  server.get<{ Querystring: { page?: string, limit?: string } }>(
    '/', async (req, res) => {
      const page = parseInt(req.query.page || '1')
      const limit = parseInt(req.query.limit || '10')

      const accounts = await db.selectFrom('account')
        .limit(limit)
        .offset(page * limit - limit)
        .selectAll()
        .execute()

      const countResult = await db.selectFrom('account')
        .select((e) => e.fn.count('id').as('count'))
        .executeTakeFirst()

      const count = Number(countResult!.count)

      return res.send({
        status: 'success',
        results: accounts,
        count: count,
        pages: Math.ceil(count / limit)
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
