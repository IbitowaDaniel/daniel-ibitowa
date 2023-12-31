"use client"

import Layout from "@/components/layout"
import Head from "next/head"
import AnimatedText from "@/components/AnimatedText"
import Image from "next/image"
import Link from "next/link"
import { GithubIcon } from "@/components/icons"
import { motion } from "framer-motion"
import { TodoApp, Agency1, AppLanding, Agency2, PortfolioImage, StarTicles, } from "@/assets"
import TransitionEffect from "@/components/TransitionEffect"




const FramerImage = motion(Image)


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 xs:items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left !text-4xl font-bold dark:text-light lg:!text-3xl xs:!text-2xl">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"> <GithubIcon /> </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base">Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link href={link} target="_blank" className="text-lg font-medium underline md:text-base">Visit</Link>
          <Link href={github} target="_blank" className="w-8 md:w-6"> <GithubIcon /> </Link>
        </div>
      </div>
    </article>
  )
}


const Projects = () => {
  return (
    <>
      <Head>
        <title>DanielIbitowa | Projects Page </title>
        <meta name="description" content="Here are a few of my projects"></meta>
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">

            <div className="col-span-12">
              <FeaturedProject
                title="Typescript To do Application"
                summary="A To Do web application with nice User Interface built with Nextjs,Typescript and Framer motion. Users can add and delete things that they want to do. Also, users can edit the things added to the to do list"
                img={TodoApp}
                link="https://typescript-to-do-app-ten.vercel.app/"
                github="https://github.com/IbitowaDaniel/Typescript-To-Do-App"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Hire Developer Agency"
                type="Landing Page"
                img={Agency1}
                link="https://hire-developer-agency-landing-page.vercel.app/"
                github="https://github.com/IbitowaDaniel/hire-developer-agency-landing-page"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Modern App Page"
                type="App Modern"
                img={AppLanding}
                link="https://modern-app-landing-page.vercel.app/"
                github="https://github.com/IbitowaDaniel/modern-app-landing-page"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Agency Saas Page"
                summary="A fully responsive website Saas application landing page, with an animated pricing section, a team section and a subscribe to our services section. Every content on the page is editable via the constants folder."
                img={Agency2}
                link="https://startup-agency-page.vercel.app/"
                github="https://github.com/IbitowaDaniel/startup-agency-page"
                type="Landing Page"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="NextJs Portfolio"
                type="Portfolio Website"
                img={PortfolioImage}
                link="https://daniel-ibitowa.vercel.app"
                github="https://github.com/IbitowaDaniel/daniel-ibitowa"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="StarTicles Website"
                type="Blog Website"
                img={StarTicles}
                link="https://blog-website-starticles.vercel.app"
                github="https://github.com/IbitowaDaniel/Blog-website-starticles"
              />
            </div>
          </div>

        </Layout>
      </main>
    </>
  )
}

export default Projects