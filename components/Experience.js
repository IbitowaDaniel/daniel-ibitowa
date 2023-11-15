"use client"
import { motion } from "framer-motion"
import LiIcon from "./LiIcon"


const Details = ({ position, company, companyLink, time, address, work }) => {

  return (
    <li className="my-8 sm:pl-4 xs:pl-0 pl-0 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

      <LiIcon />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;
          <span
            className="text-primary dark:text-primaryDark capitalize"
          >{company}</span>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>

        <p className="font-medium w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
}
const Experience = () => {

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <ul className="w-full flex flex-col items-start justify-between -ml-8 md:ml-2">
          <Details
            position="Freelancer"
            company="@Self Employed"
            time="2019 - Present"
            address="Osun State, Nigeria"
            work="Designed user interfaces and navigation menus. Translated design mockups into working code using React, TailwindCss and NextJs. Worked on a team responsible for developing new web applications"
          />
          <Details
            position="Internship"
            company="@Rapster Tech"
            time="Summer 2021"
            address="Lagos State, Nigeria."
            work="Operated in an environment of growth and learning, explored various web technologies for faster productions, analyzed and debugged codes, developed more appetite for learning and website production"
          />
          <Details
            position="Internship"
            company="@Shell Coding Industry"
            time="Fall 2021"
            address="Lagos State, Nigeria."
            work="Operated in an environment of growth and learning, explored various web technologies for faster productions, analyzed and debugged codes, developed more appetite for learning and website production"
          />
          <Details
            position="Teaching Assistant"
            company="@Kulobor Enterprises"
            time="Summer 2020"
            address="Lagos State, Nigeria"
            work="Operated in an environment of growth and learning, explored various web technologies for faster productions, analyzed and debugged codes, developed more appetite for learning and website production"
          />
          <Details
            position="Teaching Assistant"
            company="@Damatech Institute"
            time="Fall 2020"
            address="Lagos State, Nigeria"
            work="Operated in an environment of growth and learning, explored various web technologies for faster productions, analyzed and debugged codes, developed more appetite for learning and website production"
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience