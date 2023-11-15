"use client"
import Head from "next/head"
import Layout from "@/components/layout"
import Link from "next/link"
import Image from "next/image"
import AnimatedText from "@/components/AnimatedText"
import { Article1, Article2 } from "@/assets"
import { motion } from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect"



const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark dark:bg-dark dark:border-light rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
    </li>
  )
}

const Article = ({ title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col"
    >
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl xs:text-lg font-semibold hover:underline">{title}</h2>
      </Link>
      <span className="flex-shrink-0 text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  );
}

const Articles = () => {
  return (
    <>
      <Head>
        <title>DanielIbitowa | Articles Page </title>
        <meta name="description" content="Here are some of my Articles"></meta>
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              img={Article1}
              title="Build A Well Customized Top At Sample A Tree From Design In The Featured Tipping"
              time="9 min read"
              summary="Discover and learn the ultimate method of scalable sampling and shades of grey. Provided the with to goal also step by step methods and ideas to get going on away. Improve scale and resources"
              link="/"
            />

            <FeaturedArticle
              img={Article2}
              title="Creating custom made levitating shade of screen and more. With essence in check"
              time="10 min read"
              summary="Discover and learn the ultimate method of scalable sampling and shades of grey. Provided the with to goal also step by step methods and ideas to get going on away. Improve scale and resources"
              link="/"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
          <ul>
            <Article
              title="Top Notch Resourceful And Time Saving Ways To Cut The Wind Paper And Sand Of The Moth"
              date="October 22, 2023"
              link="/"
            />
            <Article
              title="Silk And Thread Working With CamelCasing: Step-By-Step Procedure For Developers"
              date="October 22, 2023"
              link="/"
            />
            <Article
              title="What Is The Main Ninja In Screen Custom Shade Designs And Enhanced Development"
              date="October 22, 2023"
              link="/"
            />
            <Article
              title="How To Get To The Back Of The Bus In Agency Probability Evaluations With Time"
              date="October 22, 2023"
              link="/"
            />
            <Article
              title="What Is The Best And Most Effective Way To Milk A Tree And Root The Leaves With"
              date="October 22, 2023"
              link=""
            />
            <Article
              title="Deliver The Best Usage Of This And Boil Down The Basic Principles Of How It Works"
              date="October 22, 2023"
              link=""
            />

          </ul>

        </Layout>

      </main>
    </>
  )
}

export default Articles