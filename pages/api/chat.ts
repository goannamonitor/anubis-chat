import { cookies } from 'next/headers'
import type { NextApiHandler } from 'next'


const handler: NextApiHandler = (req,res) => {
  const jwt = cookies().get("jwt")


}


export default handler
