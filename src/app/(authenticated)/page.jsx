import Image from 'next/image'
import { getSession } from '@/app/api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getSession() 
  return (
    <main className="">
        hello
    </main>
  )
}
