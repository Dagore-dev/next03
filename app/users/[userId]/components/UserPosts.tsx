import { Post } from '@/types'

export default async function UserPosts({
  postsPromise,
}: {
  postsPromise: Promise<Post[]>
}) {
  const posts = await postsPromise
  return (
    <ul>
      {posts.map((post) => (
        <article key={post.userId + post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </ul>
  )
}
