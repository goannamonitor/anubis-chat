import Head from "next/head"
// Default head

interface IProps {
  title?: string
  description?: string
}

const DefaultHead: React.FC<IProps> = ({title,description}) => {
  return (
    <Head>
      <title>{(title)?title:"Anubis Chat"}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content={(description)?description:"Anubis Chat, the secure online chat system."}/>
    </Head>
  )
}

export default DefaultHead