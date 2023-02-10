import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { useState } from 'react'

type Message = {
  senderId: string
  senderName: string
  message: string
  timestamp: number
  client: boolean
}

const Home: NextPage = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState("")

  const sendMessage = () => {

  }

  return (
    <Layout title="Anubis Chat - Example">
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-1/2 w-full m-2 p-4 bg-zinc-500">
          <div className="bg-white m-2 p-4">
            {(messages.length)?
            messages?.map((msg,i)=><div className={(msg.client)?"p-2 bg-zinc-300":"p-2 bg-blue-400"} key={i}><div className={(msg.client)?"font-bold text-zinc-600":"font-bold text-blue-600"}></div></div>)
            :<p className="text-zinc-400">There are no messages.</p>}
          </div>
          <div>
            <input type="text" value={message} onChange={e=>setMessage(e.target.value)}/>
            <button className="bg-blue-600 text-white font-bold text-center" onClick={()=>sendMessage()}>Send</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
