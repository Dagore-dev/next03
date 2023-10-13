import { User } from '@/types'

export default async function getUserById (userId: string): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return await response.json()
}
