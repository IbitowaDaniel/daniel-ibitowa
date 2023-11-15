"use client"

import Head from "next/head"
import Layout from "@/components/layout"
import Image from "next/image"
import { MyPic1, LightBulb } from "@/assets"
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import { LinkArrow } from "@/components/icons"
import TransitionEffect from "@/components/TransitionEffect"


 

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Ibitowa | Nextjs Portfolio Website</title>
        <meta name="description" content="My Web Developer Portfolio Website built with Nextjs" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="!pt-0 md:!pt-16">
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={MyPic1} alt="DanielIbitowa" className='w-full h-auto lg:hidden md:inline-block md:w-full' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a seasoned Front End Developer, I work on turning ideas into scalable products and innovative websites/ web applications. Dive into my portfolio to learn more about me and what I do.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className='flex items-center bg-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark duration-300 md:p-2 md:px-4 md:text-base'
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:danielibitowa@gmail.com"
                  className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={LightBulb} alt="danielIbitowa" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
