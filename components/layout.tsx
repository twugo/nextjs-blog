import Head from 'next/head'
import Footer from './footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="description" content="Twugo's blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
