import getUserById from '@/lib/getUserById'

interface Params {
  params: {
    userId: string
  }
}

export default async function UserPage({ params: { userId } }: Params) {
  const user = await getUserById(userId)

  return (
    <section>
      <h2>{user.name}</h2>
    </section>
  )
}
