"use client"

import { motion } from "framer-motion"

const LiIcon = () => {

  return (
    <motion.figure
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      viewport={{once: true}}
      className="absolute -left-2 stroke-dark dark:stroke-light">
      <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" className="stroke-dark dark:stroke-light fill-none" />
        <circle cx="50" cy="50" r="20" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark" />
      </svg>
    </motion.figure>
  )
}

export default LiIcon