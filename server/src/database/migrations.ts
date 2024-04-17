import { Kysely, sql } from 'kysely'
import { db, isFresh } from './database'

if (isFresh) {
  console.warn('New database created, migrating...')
  up(db)
}

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
  .createTable('account')
  .addColumn('id', 'integer', col => col.primaryKey())
  .addColumn('full_name', 'text', col => col.notNull())
  .addColumn('birth_date', 'date', col => col.notNull())
  .addColumn('gender', 'text', col => col.notNull())
  .addColumn('email', 'text', col => col.notNull())
  .addColumn('github', 'text')
  .addColumn('linkedin', 'text')
  .addColumn('months_experience', 'integer', col => col.notNull().defaultTo(0))
  .addColumn('created_at', 'timestamp', col =>
    col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
  )
  .execute()

  console.info('Database migrated')
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('account').execute()

  console.info('Database dropped')
}
