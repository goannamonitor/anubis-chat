import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Anubis Chat - Home">
      <div className="flex items-center justify-center h-screen">
        <div className="opacity-50 bg-300">
          <h1 className="text-white text-2xl text-center">Anubis Chat</h1>
          <h2 className="text-blue-600 text-lg text-center"><Link href="/example">Example</Link></h2>
        </div>
      </div>
    </Layout>
  )
}

export default Home
