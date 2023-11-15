import Layout from "./layout"
import Link from "next/link"



const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg sm:text-base">
      <Layout className="!py-8 flex items-center justify-between lg:flex-col lg:!py-6">
      <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      <div className="flex items-center lg:py-2">
        Built With <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>by&nbsp;
        <Link href="/" className="underline underline-offset-2">DanielIbitowa</Link>
      </div>
      <Link href="mailto:danielibitowa@gmail.com" className="underline underline-offset-2">Say hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer