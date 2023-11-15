"use client"
import { motion } from "framer-motion"
import LiIcon from "./LiIcon"


const Details = ({ type, time, place, info }) => {
  
  return (
    <li className="my-8 sm:pl-4 xs:pl-0 pl-0 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

      <LiIcon />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>

        <p className="font-medium w-full md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  );
}

const Education = () => {
  
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <ul className="w-full flex flex-col items-start justify-between -ml-8 md:ml-2">
          <Details
            type="Bachelor Of Computer Science"
            time="2021-present"
            place="Osun State University, Nigeria"
            info="Currently undergoing a bachelor's degree at Osun State University. Relevant courses so far include Data Structures and Algorithms, Computer Systems Engineering etc"
          />
          <Details
            type="Front End Development Online Course"
            time="2019-2020"
            place="Freecodecamp online learning platform"
            info="Completed a Front End Devlopment course with Freecodecamp and worked on varoius projects involved in the certification"
          />
          <Details
            type="High School Education"
            time="2014-2020"
            place="Adventist High School"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Basics of Computer Sciences."
          />

        </ul>
      </div>
    </div>
  )
}


export default Education