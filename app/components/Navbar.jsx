"use client"
import { motion, useMotionValueEvent } from "motion/react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { motionValue } from "motion/react"
import { Router } from "next/router"
export default function Navbar() {
    useEffect(() => {

        let previousScroll = window.scrollY;
        const nav = document.querySelector(".nav")

        window.addEventListener('scroll', () => {
            let current = window.scrollY;
            if (window.innerWidth > 768) {



                if (current < previousScroll)
                    nav.classList.remove("hide")
                else if (current > previousScroll && current >= window.innerHeight)
                    nav.classList.add("hide")

                previousScroll = window.scrollY;
            }
        })

        const home = document.querySelector(".home")
        const solution = document.querySelector(".solution")
        const security = document.querySelector(".security")
        const cloud = document.querySelector(".cloud")
        const network = document.querySelector(".network")
        const power = document.querySelector(".power")

        const homeMobile = document.querySelector(".homeMobile")
        const securityMobile = document.querySelector(".securityMobile")
        const cloudMobile = document.querySelector(".cloudMobile")
        const networkMobile = document.querySelector(".networkMobile")
        const powerMobile = document.querySelector(".powerMobile")

        if (window.location.pathname === "/")
            home.classList.add("active")
        else if (window.location.pathname === "/solutions")
            solution.classList.add("active")
        else if (window.location.pathname === "/solutions/security")
            security.classList.add("activeDdl")
        else if (window.location.pathname === "/solutions/cloud-solutions")
            cloud.classList.add("activeDdl")
        else if (window.location.pathname === "/solutions/network-infrastructure")
            network.classList.add("activeDdl")
        else if (window.location.pathname === "/solutions/power-platform")
            power.classList.add("activeDdl")

        if (window.location.pathname === "/")
            homeMobile.classList.add("activeDdl")
        else if (window.location.pathname === "/solutions/security")
            securityMobile.classList.add("activeDdl")
        else if (window.location.pathname === "/solutions/cloud-solutions")
            cloudMobile.classList.add("activeDdl")
        else if (window.location.pathname === "/solutions/network-infrastructure")
            networkMobile.classList.add("activeDdl")
        else if (window.location.pathname === "/solutions/power-platform")
            powerMobile.classList.add("activeDdl")
    })
    const [isOpen, setIsOpen] = useState(false)
    const [isSolutionsOpen, setSolutions] = useState(false)
    return (
        <nav className="fixed z-50 top-0 left-0 z-50 nav relative font-medium font-geist w-full flex justify-center items center min-h-content py-4">
            <div className="w-11/12 flex justify-between h-full">
                <Link href="/">
                    <div className="logo">
                        <svg width="108" height="58" className="max-w-[75px] h-auto" viewBox="0 0 108 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9901 38.29C17.7601 38.17 26.8301 45.21 30.2101 46.51C45.1701 52.28 66.3301 51.31 80.1301 42.92C84.3801 40.34 85.9801 34.31 90.6401 42.46C71.5401 62.91 31.6401 62.85 12.3801 42.52C12.1801 41.05 16.3001 38.4 17.0001 38.29H16.9901Z" fill="black" />
                            <path d="M90.59 16.9C84.51 20.92 83.92 16.81 78.99 14.16C59.84 3.86999 34.52 4.55999 17.54 18.72L12.25 15.43C27.74 -1.99001 58.98 -4.07001 79.05 6.22999C81.24 7.34999 92.16 14.65 90.59 16.9Z" fill="#D4212A" />
                            <path d="M5.11 30.16C4.58 31.89 4.32 33.26 4.32 33.81L4.99 34.1C5.21 34.2 5.28 34.27 5.28 34.39C5.28 34.49 5.26 34.63 5.04 34.63C4.73 34.63 4.08 34.49 3.48 34.49C2.88 34.49 2.35 34.63 2.11 34.63C1.94 34.63 1.85 34.56 1.85 34.41C1.85 34.24 1.95 34.19 2.11 34.12C2.49 33.95 2.85 33.16 3.43 31.67L4.03 30.11C3.67 30.11 3.38 30.09 3.24 30.09C2.14 30.09 1.22 30.14 0.26 30.83C0.12 30.93 0 30.81 0 30.71C0 30.64 0.05 30.54 0.12 30.47C0.84 29.77 2.04 29.13 3.24 29.13C3.55 29.13 3.96 29.15 4.39 29.18L7.17 21.93C7.22 21.81 7.34 21.76 7.46 21.76C7.58 21.76 7.7 21.81 7.75 21.93L12.24 33.81L12.7 34.05C12.96 34.19 13.04 34.27 13.04 34.39C13.04 34.49 13.02 34.63 12.8 34.63C12.49 34.63 11.89 34.49 11.05 34.49C10.21 34.49 9.61 34.63 9.37 34.63C9.2 34.63 9.11 34.56 9.11 34.41C9.11 34.24 9.21 34.17 9.37 34.12C10.19 33.93 10.04 33.14 9.51 31.6L8.86 29.9C8.38 30.09 7.76 30.24 6.92 30.24C6.61 30.24 5.86 30.22 5.12 30.17L5.11 30.16ZM5.42 29.24C6.21 29.31 6.96 29.36 7.36 29.36C7.79 29.36 8.2 29.36 8.63 29.29L8.13 27.9C7.87 27.23 7.29 25.6 6.98 24.44C6.86 24.97 6.67 25.47 6.48 26.05L5.42 29.24Z" fill="#D4212A" />
                            <path d="M15.2601 22.62L14.3701 22.33C14.1801 22.26 14.0801 22.16 14.0801 22.04C14.0801 21.94 14.1001 21.8 14.3201 21.8C14.6101 21.8 15.5201 21.94 16.3401 21.94C17.0401 21.94 18.0401 21.75 18.8801 21.75C21.5001 21.75 22.8901 22.97 22.8901 25.11C22.8901 26.93 21.9301 28.35 19.6501 28.54C23.0601 29.4 22.7001 34.06 23.9901 34.06C24.2301 34.06 24.3301 34.13 24.3301 34.3C24.3301 34.42 24.2301 34.52 24.0401 34.54C23.7301 34.59 23.3701 34.61 23.1001 34.61C21.9001 34.61 21.4001 34.01 21.0401 32.91C20.6101 31.59 19.6001 28.69 17.7001 28.69C17.4401 28.69 17.2001 28.71 17.0001 28.74V33.8L17.8901 34.09C18.0801 34.16 18.1801 34.26 18.1801 34.38C18.1801 34.48 18.1601 34.62 17.9401 34.62C17.6301 34.62 16.9101 34.48 16.0701 34.48C15.2301 34.48 14.5801 34.62 14.3401 34.62C14.1701 34.62 14.0801 34.55 14.0801 34.4C14.0801 34.23 14.1801 34.18 14.3401 34.11C15.0401 33.82 15.2501 33.58 15.2501 31.73V22.61L15.2601 22.62ZM17.0201 23.96V27.87C17.6401 27.92 18.3601 27.99 19.0101 27.99C20.5701 27.99 21.1201 27.05 21.1201 25.64C21.1201 23.77 20.1601 22.5 18.4101 22.5C17.3801 22.5 17.0201 22.91 17.0201 23.96Z" fill="#D4212A" />
                            <path d="M33.6505 21.66C33.7205 21.61 33.7905 21.59 33.8405 21.59C34.0305 21.59 34.0805 21.78 34.0305 21.95C33.7205 22.89 33.6905 23.89 33.6905 25.05C33.6905 25.15 33.6205 25.22 33.5205 25.22C33.4005 25.22 33.2805 25.15 33.2605 25C32.9205 23.49 32.4205 22.72 31.2005 22.72H30.8205C30.1705 22.72 30.0805 22.96 30.0805 23.78V33.81L30.9905 34.1C31.1805 34.17 31.2805 34.27 31.2805 34.39C31.2805 34.49 31.2605 34.63 31.0405 34.63C30.7305 34.63 29.9805 34.49 29.1405 34.49C28.3005 34.49 27.6505 34.63 27.4105 34.63C27.2405 34.63 27.1505 34.56 27.1505 34.41C27.1505 34.24 27.2505 34.19 27.4105 34.12C28.1105 33.83 28.3205 33.59 28.3205 31.74V23.68C28.3205 23.01 28.1805 22.72 27.7405 22.72H27.2105C26.1105 22.72 25.4305 23.56 25.1005 25.07C25.0805 25.17 25.0005 25.21 24.9305 25.21C24.8105 25.21 24.6405 25.14 24.6705 24.99C24.7705 24.17 24.8405 22.71 24.7205 21.94C24.7005 21.77 24.7405 21.58 24.9405 21.58C24.9905 21.58 25.0405 21.6 25.1105 21.65C25.6405 22.03 27.7305 21.96 29.2105 21.96C30.6905 21.96 33.1205 22.03 33.6505 21.65V21.66Z" fill="#D4212A" />
                            <path d="M38.1605 28.5V33.88C39.8205 33.64 41.8105 34.31 43.1805 31.36C43.2305 31.26 43.2805 31.22 43.3505 31.22C43.4705 31.22 43.5905 31.36 43.5705 31.56C43.3105 34.1 42.6605 34.75 40.8105 34.75C39.2005 34.75 38.2905 34.56 36.9705 34.56C36.5605 34.56 35.7905 34.61 35.4605 34.61C35.3405 34.61 35.2405 34.54 35.2405 34.39C35.2405 34.22 35.3405 34.17 35.5005 34.1C36.2005 33.81 36.4105 33.64 36.4105 31.8V22.63L35.5205 22.34C35.3305 22.27 35.2305 22.17 35.2305 22.05C35.2305 21.95 35.2505 21.81 35.4705 21.81C36.1705 21.81 37.4105 21.95 39.3805 21.95H40.5105C41.6905 21.95 42.3605 21.93 42.7705 21.66C42.8405 21.61 42.8905 21.59 42.9405 21.59C43.1105 21.59 43.2005 21.78 43.1605 21.95C42.8505 22.89 42.8205 23.8 42.8205 24.95C42.8205 25.05 42.7505 25.09 42.6505 25.09C42.5505 25.09 42.4305 25.04 42.3905 24.9C42.0105 23.2 41.6205 22.72 39.9205 22.72H39.0805C38.4105 22.77 38.1705 23.13 38.1705 24.09V27.91C38.4605 27.77 38.7505 27.67 39.0105 27.67C39.3905 27.67 39.7105 27.69 39.9905 27.69C40.5905 27.69 41.0905 27.62 41.6705 27.14C41.7905 27.04 42.0105 27.24 41.8905 27.5C41.6005 28.12 40.9105 28.65 40.1105 28.65C39.3905 28.65 38.7905 28.41 38.1705 28.51L38.1605 28.5Z" fill="#D4212A" />
                            <path d="M45.1396 28.14C45.1396 24.04 47.1096 21.59 50.3496 21.59C51.3596 21.59 52.3196 21.97 52.8196 21.97C53.1596 21.97 53.4396 21.99 53.7296 21.71C53.7796 21.66 53.8296 21.64 53.8696 21.64C54.0396 21.64 54.1596 21.83 54.0896 22.02C53.7796 22.91 53.7096 24.11 53.7096 25.21C53.7096 25.31 53.6397 25.38 53.5396 25.38C53.4396 25.38 53.2996 25.31 53.2796 25.19C52.8996 23.27 51.8196 22.33 50.2096 22.33C47.9296 22.33 46.9496 24.47 46.9496 27.37C46.9496 31.19 48.3696 34.07 50.5496 34.07C52.0896 34.07 53.1396 32.65 53.5696 31.26C53.5896 31.16 53.6396 31.12 53.7096 31.12C53.8296 31.12 53.9496 31.24 53.9496 31.48C53.9496 32.22 53.8296 33.3 53.6596 33.78C53.5896 34 53.4896 34.19 53.1796 34.31C52.4596 34.6 51.4496 34.81 50.2496 34.81C46.9896 34.81 45.1396 32.31 45.1396 28.14Z" fill="#D4212A" />
                            <path d="M65.3505 33.8L66.2405 34.09C66.4305 34.16 66.5305 34.26 66.5305 34.38C66.5305 34.48 66.5105 34.62 66.2905 34.62C65.9805 34.62 65.3305 34.48 64.4905 34.48C63.6505 34.48 62.9305 34.62 62.6905 34.62C62.5205 34.62 62.4305 34.55 62.4305 34.4C62.4305 34.23 62.5305 34.18 62.6905 34.11C63.3905 33.82 63.6005 33.58 63.6005 31.73V28.23C63.1405 28.45 62.6405 28.59 62.0205 28.59C61.4005 28.59 60.7005 28.49 60.1505 28.49C59.6005 28.49 59.1205 28.49 58.6605 28.59V33.8L59.5505 34.09C59.7405 34.16 59.8405 34.26 59.8405 34.38C59.8405 34.48 59.8205 34.62 59.6005 34.62C59.2905 34.62 58.5705 34.48 57.7305 34.48C56.8905 34.48 56.2405 34.62 56.0005 34.62C55.8305 34.62 55.7405 34.55 55.7405 34.4C55.7405 34.23 55.8405 34.18 56.0005 34.11C56.7005 33.82 56.9105 33.58 56.9105 31.73V22.61L56.0205 22.32C55.8305 22.25 55.7305 22.15 55.7305 22.03C55.7305 21.93 55.7505 21.79 55.9705 21.79C56.2805 21.79 57.0005 21.93 57.8405 21.93C58.6805 21.93 59.3305 21.79 59.5705 21.79C59.7405 21.79 59.8305 21.86 59.8305 22.01C59.8305 22.18 59.7305 22.23 59.5705 22.3C58.8705 22.59 58.6605 22.35 58.6605 24.2V27.94C59.0905 27.68 59.5505 27.51 60.0005 27.51C60.8405 27.51 61.8205 27.68 62.6205 27.68C62.9805 27.68 63.3205 27.66 63.6005 27.61V22.62L62.7105 22.33C62.5205 22.26 62.4205 22.16 62.4205 22.04C62.4205 21.94 62.4405 21.8 62.6605 21.8C62.9705 21.8 63.7605 21.94 64.6005 21.94C65.4405 21.94 66.0205 21.8 66.2605 21.8C66.4305 21.8 66.5205 21.87 66.5205 22.02C66.5205 22.19 66.4205 22.24 66.2605 22.31C65.5605 22.6 65.3505 22.36 65.3505 24.21V33.81V33.8Z" fill="black" stroke="black" strokeWidth="0.25" strokeMiterlimit="10" />
                            <path d="M75.43 24.35C75.43 27.71 70.34 29.94 68.54 33.47C69.31 33.21 70.12 33.16 70.92 33.16C71.26 33.16 71.59 33.18 71.93 33.18C73.56 33.18 75.03 32.99 75.82 30.92C75.87 30.82 75.92 30.78 75.99 30.78C76.11 30.78 76.25 30.92 76.23 31.12C75.97 33.66 75.13 34.72 73.4 34.72C72.7 34.72 71.36 34.58 70.47 34.55C69.08 34.53 68.72 34.65 68.09 34.65C67.85 34.65 67.75 34.51 67.75 34.34V34.32C67.75 31.22 73.63 27.41 73.63 24.17C73.63 23.16 73.05 22.35 72.02 22.35C70.7 22.35 69.64 23.81 69.16 25.45C69.14 25.55 69.06 25.59 68.99 25.59C68.87 25.59 68.75 25.49 68.73 25.37C68.68 24.87 68.75 23.38 68.92 22.8C68.99 22.51 69.23 22.27 69.5 22.15C70.1 21.86 70.92 21.6 72.21 21.6C74.42 21.6 75.43 22.75 75.43 24.36V24.35Z" fill="black" stroke="black" strokeWidth="0.25" strokeMiterlimit="10" />
                            <path d="M81.9796 34.81C78.9796 34.81 77.5596 32.22 77.5596 28.14C77.5596 24.06 79.0496 21.59 81.8996 21.59C84.8996 21.59 86.3396 24.35 86.3396 28.19C86.3396 32.27 84.8296 34.81 81.9696 34.81H81.9796ZM79.3396 27.37C79.3396 30.68 80.1096 34.09 82.2696 34.09C84.2096 34.09 84.5996 31.76 84.5996 28.98C84.5996 25.69 83.7596 22.31 81.5996 22.31C79.6796 22.31 79.3396 24.59 79.3396 27.37Z" fill="black" stroke="black" strokeWidth="0.25" strokeMiterlimit="10" />
                            <path d="M92.5899 34.81C89.5899 34.81 88.1699 32.22 88.1699 28.14C88.1699 24.06 89.6599 21.59 92.5099 21.59C95.5099 21.59 96.9499 24.35 96.9499 28.19C96.9499 32.27 95.4399 34.81 92.5799 34.81H92.5899ZM89.9499 27.37C89.9499 30.68 90.7199 34.09 92.8799 34.09C94.8199 34.09 95.2099 31.76 95.2099 28.98C95.2099 25.69 94.3699 22.31 92.2099 22.31C90.2899 22.31 89.9499 24.59 89.9499 27.37Z" fill="black" stroke="black" strokeWidth="0.25" strokeMiterlimit="10" />
                            <path d="M103.2 34.81C100.2 34.81 98.7803 32.22 98.7803 28.14C98.7803 24.06 100.27 21.59 103.12 21.59C106.12 21.59 107.56 24.35 107.56 28.19C107.56 32.27 106.05 34.81 103.19 34.81H103.2ZM100.56 27.37C100.56 30.68 101.33 34.09 103.49 34.09C105.43 34.09 105.82 31.76 105.82 28.98C105.82 25.69 104.98 22.31 102.82 22.31C100.9 22.31 100.56 24.59 100.56 27.37Z" fill="black" stroke="black" strokeWidth="0.25" strokeMiterlimit="10" />
                        </svg>
                    </div>
                </Link>
                <div className=" h-full justify-evenly items-center gap-10 hidden md:flex">
                    <Link className="home hover:text-primary " href="/">Home</Link>

                    <div className="relative self-strech dropdown">
                        <Link className="solution" href="/solutions">Solutions</Link>
                        <div className="hidden dropdown-content py-4">
                            <div className="text-nowrap bg-white border flex py-4 flex-col">
                                <Link className=" border-b p-4 block hover:bg-primary hover:text-white cloud" href="/solutions/cloud-solutions">Cloud Solutions</Link>
                                <Link className="border-b security p-4 block hover:bg-primary hover:text-white security" href="/solutions/security">Security</Link>
                                <Link className="border-b p-4 block hover:bg-primary hover:text-white network" href="/solutions/network-infrastructure">Network Infrastructure</Link>
                                <Link className=" p-4 block hover:bg-primary hover:text-white power" href="/solutions/power-platform">Power Platform</Link>
                            </div>
                        </div>
                    </div>

                    <motion.div initial="initial" whileHover="hovered" transiiton="transition">
                        <Link className="flex bg-primary hover:bg-secondary text-white py-1 pl-4 pr-1 border-rounded rounded-lg items-center gap-3" href="/contact">
                            <div className="contact">Contact</div>
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
                </div>
                <div className="md:hidden flex">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <span className={!isOpen ? "inline-block" : "hidden"}>Menu</span>
                        <span className={isOpen ? "inline-block" : "hidden"}>Close</span>
                    </button>

                </div>

            </div>
            <div className={isOpen ? "mobileMenu flex left-0" : " mobileMenu left-[-100vw] opacity-0"}>
                <Link className="p-4 border-b homeMobile" href="/">Home</Link>

                <span onClick={() => { setSolutions(!isSolutionsOpen) }} className={isSolutionsOpen ? "p-4 border-b inline-block activeM solutionsMobile" : "p-4 border-b inline-block solutionsMobile"} href="/solutions">Solutions</span>
                <div className={isSolutionsOpen ? "solutions-ddl block border-b" : "hidden"}>
                    <Link className="cloudMobile border-b p-4 block" href="/solutions/cloud-solutions">Cloud Solutions</Link>
                    <Link className="border-b security p-4 block securityMobile" href="/solutions/security">Security</Link>
                    <Link className="border-b p-4 block networkMobile" href="/solutions/network-infrastructure">Network Infrastructure</Link>
                    <Link className=" p-4 block  powerMobile" href="/solutions/power-platform">Power Platform</Link>
                </div>
                <Link className="p-4 border-b" href="/contact">Contact</Link>
            </div>

        </nav>
    )
}
