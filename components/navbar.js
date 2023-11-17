"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./logo"
import { TwitterIcon, GithubIcon, DribbbleIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from "./icons"
import { motion } from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import { useState } from "react"


const CustomLink = ({ href, className, title }) => {

  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <>
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isActive ? "w-full" : "w-0"} dark:bg-light`}>
          &nbsp;
        </span>
      </Link>
    </>
  )
}

const CustomMobileLink = ({ href, title, className, toggle }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  const handleClick = () => {
    toggle();
  }

  return (
    <Link href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isActive ? "w-full" : "w-0"} dark:bg-dark`}>
        &nbsp;
      </span>
    </Link>
  )
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="w-full px-32 py-8 font-medium flex items-end justify-end dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">

      <button className="hidden flex-col justify-center items-center lg:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 transition-300 transition-all ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 transition-300 transition-all ease-out rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 transition-300 transition-all ease-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://twitter.com" target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3">
            <TwitterIcon />
          </motion.a>

          <motion.a href="https://github.com//IbitowaDaniel" target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3">
            <GithubIcon />
          </motion.a>

          <motion.a href="https://linkedin.com" target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3">
            <LinkedInIcon />
          </motion.a>

          <motion.a href="https://pinterest.com" target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full">
            <PinterestIcon />
          </motion.a>

          <motion.a href="https://dribbble.com" target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3">
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {
              mode === "dark" ? <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
            }
          </button>
        </nav>
      </div>


      {
        isOpen ?
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="hidden min-w-[70vw] sm:min-w-[90vw] lg:flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
            <nav className="flex items-center flex-col justify-center">
              <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
              <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
              <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
              <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick} />
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-2">
              <motion.a href="https://twitter.com" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3 sm:mx-1">
                <TwitterIcon />
              </motion.a>

              <motion.a href="https://github.com//IbitowaDaniel" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark">
                <GithubIcon />
              </motion.a>

              <motion.a href="https://linkedin.com" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1">
                <LinkedInIcon />
              </motion.a>

              <motion.a href="https://pinterest.com" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1 bg-light rounded-full">
                <PinterestIcon />
              </motion.a>

              <motion.a href="https://dribbble.com" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 ml-3 sm:mx-1">
                <DribbbleIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                {
                  mode === "dark" ? <SunIcon className={"fill-dark"} />
                    : <MoonIcon className={"fill-dark"} />
                }
              </button>
            </nav>
          </motion.div>
          : null
      }

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar