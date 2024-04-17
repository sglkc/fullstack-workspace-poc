import { useEffect, useState } from 'preact/hooks'
import { AxiosResponse } from 'axios'
import Message, { MessageProps } from '@/components/Message'
import api from '@/utils/axios'
import Button from '@/components/Button'

type Account = {
  full_name: string
  birth_date: string
  gender: 'male' | 'female'
  email: string
  github: string
  linkedin: string
  months_experience: number
}

export default function ListPage() {
  const [data, setData] = useState<Account[] | false>(false)
  const [flash, setFlash] = useState<MessageProps | false>(false)

  useEffect(() => {
    api.get('/accounts?limit=100')
      .then((e: AxiosResponse<{ results: Account[] }>) => {
        setFlash(false)
        setData(e.data.results)
      })
      .catch(() => {
        setFlash({
          color: 'error',
          title: 'Cannot fetch data',
          message: 'Something went wrong'
        })
      })
  }, [])

  return (
    <div class="grid gap-8 m-8">
      <a href="/">
        <Button class="w-16 h-16 bg-transparent">&lt;</Button>
      </a>
      { flash && <Message {...flash} /> }
      <div class="relative overflow-x-auto shadow-md rounded-sm">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Full Name
              </th>
              <th scope="col" class="px-6 py-3">
                Birth
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                GitHub
              </th>
              <th scope="col" class="px-6 py-3">
                LinkedIn
              </th>
              <th scope="col" class="px-6 py-3">
                Experience
              </th>
            </tr>
          </thead>
          <tbody>
            { data &&
              data.map((datum) => (
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    { datum.full_name }
                  </th>
                  <td class="px-6 py-4">
                    { datum.birth_date }
                  </td>
                  <td class="px-6 py-4">
                    { datum.gender }
                  </td>
                  <td class="px-6 py-4">
                    { datum.email }
                  </td>
                  <td class="px-6 py-4">
                    { datum.github || '-' }
                  </td>
                  <td class="px-6 py-4">
                    { datum.linkedin || '-' }
                  </td>
                  <td class="px-6 py-4">
                    { datum.months_experience } months
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
