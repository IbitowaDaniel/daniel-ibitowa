"use client"

import Head from "next/head"
import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/layout"
import { useMotionValue, useSpring, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { MyPic2 } from "@/assets"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect"

 

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>Daniel Ibitowa | About Page</title>
        <meta name="description" content="About me" />
      </Head>

      <TransitionEffect />
      <main className="w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
              <p className="font-medium">
                Hi, I&apos;m Daniel Ibitowa, a student and Front End Developer on a mission to create captivating digital experiences. With a deep understanding of various web technologies, I work on crafting websites that not only look great but also deliver a seamless user interface, interaction and experience</p>
              <p className="font-medium my-4">
                I&apos;m currently pursuing my Bachelor&apos;s degree in Computer Science. Eager to stay at the forefront of the industry, I constantly seek out new knowledge to improve myself.</p>
              <p className="font-medium">
                I believe that continuous learning is key to success in this fast-paced industry. In a nutshell. I&apos;m a web developer who combines technical expertise with a passion for design and a commitment to user satisfaction.</p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 p-8 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image src={MyPic2} alt="danielIbitowa" className='w-full h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimateNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimateNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimateNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
              </div>
            </div>

          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>

      </main>
    </>
  )
}

export default About