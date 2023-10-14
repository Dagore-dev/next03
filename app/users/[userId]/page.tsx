import getUserById from '@/lib/getUserById'
import getUserPostsById from '@/lib/getUserPostsById'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import { Metadata } from 'next'

interface Params {
  params: {
    userId: string
  }
}

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  // NextJS avoid and deduplicate the API calls when needed.
  const user = await getUserById(userId)

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  }
}

export default async function UserPage({ params: { userId } }: Params) {
  const user = await getUserById(userId)
  const postsPromise = getUserPostsById(userId)

  return (
    <section>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts postsPromise={postsPromise} />
      </Suspense>
    </section>
  )
}
