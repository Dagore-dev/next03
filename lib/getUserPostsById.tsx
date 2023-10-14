import { Post } from '@/types'

export default async function getUserPostsById(
  userId: string
): Promise<Post[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}
