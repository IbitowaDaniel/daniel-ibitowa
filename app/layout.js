import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`bg-light dark:bg-dark w-full min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
