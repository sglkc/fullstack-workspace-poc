import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable
} from 'kysely'

export interface Database {
  account: AccountTable
}

export interface AccountTable {
  id: Generated<number>
  full_name: string
  birth_date: ColumnType<Date, string | undefined, string | undefined>
  gender: 'male' | 'female'
  email: string
  github: ColumnType<string, string | undefined, string | undefined>
  linkedin: ColumnType<string, string | undefined, string | undefined>
  months_experience: number
  created_at: ColumnType<Date, string | undefined, never>
}

export type Account = Selectable<AccountTable>
export type NewAccount = Insertable<AccountTable>
export type UpdateAccount = Updateable<AccountTable>
