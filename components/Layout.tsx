import Head from "next/head"
import { ToastContainer } from "react-toastify"
// Default layout for most pages

interface IProps{
  children?: React.ReactNode
  title?: string
  description?: string
}

const Layout: React.FC<IProps> = ({children, title, description}) => {
  return (
    <>
      <Head>
        <title>{(title)?title:"Anubis Chat"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content={(description)?description:"Anubis Chat, the secure online chat system."}/>
      </Head>
      <main className="bg-slate-900 text-white">
        {children}
      </main>
      <footer className="bg-black text-white font-sm p-4 text-center">Anubis Chat {(new Date).getFullYear()} &copy;</footer>
      <ToastContainer/>
    </>
  )
}
export default Layout