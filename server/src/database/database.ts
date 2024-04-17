import { Kysely, SqliteDialect } from 'kysely'
import SQLite from 'better-sqlite3'
import { existsSync } from 'node:fs'
import { Database } from './types'

export const isFresh = !existsSync('database.sqlite')

export const db = new Kysely<Database>({
  dialect: new SqliteDialect({
    database: new SQLite('database.sqlite')
  })
})

export default db
