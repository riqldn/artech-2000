"use client"
import { motion } from "motion/react";
import Link from "next/link";


export default function Button({href, children}) {
  return (
    <motion.div className="w-max" initial="initial" whileHover="hovered" transiiton="transition">
    <Link className="flex bg-primary hover:bg-secondary text-white py-1 pl-4 pr-1 border-rounded rounded-lg items-center gap-3" href={href}>
      <div className="contact">{children}</div>
      <div className="bg-secondary flex h-max p-2 border-rounded overflow-hidden rounded-lg">
        <span className="h-max flex inline-block relative">
          <motion.svg variants={{ initial: { x: 0, y: 0 }, hovered: { x: 20, y: -20 }, transiiton: { duration: 1, ease: "easeInOut" } }} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8768 0.946282C11.8472 0.394793 11.3761 -0.0282566 10.8246 0.00137466L1.83759 0.484244C1.2861 0.513876 0.863053 0.984967 0.892684 1.53646C0.922315 2.08795 1.39341 2.51099 1.9449 2.48136L9.93337 2.05215L10.3626 10.0406C10.3922 10.5921 10.8633 11.0152 11.4148 10.9855C11.9663 10.9559 12.3893 10.4848 12.3597 9.93332L11.8768 0.946282ZM1.74403 12.6682L11.6223 1.66808L10.1343 0.331784L0.255974 11.3318L1.74403 12.6682Z" fill="white" />
          </motion.svg>
          <motion.svg className="absolute" variants={{ initial: { x: -20, y: 20 }, hovered: { x: 0, y: 0 }, transiiton: { duration: 1, ease: "easeInOut" } }} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8768 0.946282C11.8472 0.394793 11.3761 -0.0282566 10.8246 0.00137466L1.83759 0.484244C1.2861 0.513876 0.863053 0.984967 0.892684 1.53646C0.922315 2.08795 1.39341 2.51099 1.9449 2.48136L9.93337 2.05215L10.3626 10.0406C10.3922 10.5921 10.8633 11.0152 11.4148 10.9855C11.9663 10.9559 12.3893 10.4848 12.3597 9.93332L11.8768 0.946282ZM1.74403 12.6682L11.6223 1.66808L10.1343 0.331784L0.255974 11.3318L1.74403 12.6682Z" fill="white" />
          </motion.svg>

        </span>


      </div>
    </Link>
  </motion.div>
  )
}
