import { User } from '@/types'

export default async function getAllUsers (): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return await response.json()
}
