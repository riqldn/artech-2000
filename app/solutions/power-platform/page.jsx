"use client"
import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SlidingText from "@/app/components/SlidingText";
import HeroImage from "../assets/power/power-hero.png";
import Cta from "@/app/components/Cta";
import App from "../assets/power/apps-logo.png";
import Automate from "../assets/power/automate-logo.png";
import BI from "../assets/power/bi-logo.png";
import Virtual from "../assets/power/virtual-agents-logo.png";


export default function Power() {
    return (
        <>
            <Navbar />
            <section className='relative min-h-[90vh] md:min-h-screen w-full '>
                <div className='flex  w-11/12 min-h-[90vh] md:min-h-screen mx-auto pb-8'>
                    <div className="flex flex-col self-end">
                        <h2 className='z-40 text-white text-md'>
                            <SlidingText>
                                Microsoft Power Platform
                            </SlidingText>
                        </h2>
                        <h1 className='z-40 tracking-xtra leading-xtra text-white text-2xl md:text-4xl md:max-w-[25ch]'>
                            <SlidingText>Analyse data, build solutions, and automate processes</SlidingText>
                        </h1>
                    </div>

                </div>

                <Image alt='hero image of a hand interacting with a holographic menu' priority={true} className='-z-10 object-cover object-[73%] md:object-[0%,30%]' src={HeroImage} fill quality={90} />
                <div className='top-0 left-0 opacity-[0.5] overlay-power bg-black absolute w-full min-h-[90vh] md:min-h-screen'></div>
            </section>

            <section className="w-full min-h-screen pb-16">
                <div className="min-h-screen w-11/12 mx-auto">

                    <div className="min-h-max w-full auto-rows-auto gap-y-8 flex flex-col md:grid grid-cols-12">

                        <div className="flex flex-col gap-6 col-start-1 md:col-end-10 lg:col-end-7 pt-8 md:pt-16">
                            <p className="text-md md:text-xl mb-2 tracking-reg text-header leading-reg md:leading-reg">Microsoft Power Platform is a toolset that enables businesses to analyze data, automate processes, build apps,
                                and create virtual agents with little to no coding.</p>
                            <p className="max-w-[55ch] mb-2 text-body leading-looser">Our Power Platform solutions are tailored to automate processes, analyze and manage data, and seamlessly integrate with other applications, enabling you to create comprehensive end-to-end business solutions.</p>
                            <Cta href="/contact">Enquire Now</Cta>
                        </div>

                        <div className="flex flex-col gap-6 md:col-start-5 lg:col-start-7 row-start-2 md:col-end-13  lg:col-end-13 pt-8 md:pt-16">
                            <div className="flex-col flex min-h-max ">
                                <h3 className="font-geist font-semibold mb-4">Key components</h3>

                                <motion.div className="flex flex-col" initial="initial" whileInView="inView" viewport={{once:true, margin:"0px 0px -20% 0px"}}transition={{staggerChildren:"0.3",  ease:"linear"}}>


                                    <div className="min-h[150px] py-6 flex items-center border-border border-y overflow-hidden" >
                                        <motion.div className="flex flex-col md:grid grid-cols-6 md:items-center  px-4 justify-between gap-8 md:flex-row" transition={{duration: 0.6, ease:"easeInOut"}} variants={{initial:{opacity:0, translateY:30}, inView:{opacity:1, translateY:0} }}>
                                            <div className="col-start-1 col-end-2 pt-4 flex flex-row h-max self-start">
                                                <Image src={App} loading="eager" alt="power apps logo" className="md:w-9/12 h-[auto]" role="decorative" sizes="(min-width:768px)100px, 120px" />
                                            </div>

                                            <div className="flex flex-col gap-1 col-start-2 col-end-7">
                                                <h4 className="font-semibold font-geist">Power Apps</h4>
                                                <p className="max-w-[55ch]  md:max-w-max">Power Apps is a low-code approach to custom app development, allowing users to quickly create apps with a &apos;point and click&apos; approach.  Offers pre-built templates, drag-and-drop features, and integration with various data sources.</p>
                                            </div>
                                        </motion.div>

                                    </div>

                                    <div className="min-h-[150px] py-6 flex items-center border-border border-y">
                                        <motion.div className="flex flex-col  md:grid grid-cols-6 md:items-center  px-4 justify-between gap-8 md:flex-row" role="decorative" sizes="(min-width:768px)100px, 120px" variants={{initial:{opacity:0, translateY:30}, inView:{opacity:1, translateY:0} }} transition={{duration: 0.6, ease:"easeInOut"}} >
                                            <div className="col-start-1 col-end-2 pt-4 flex flex-row h-max self-start">
                                                <Image src={Automate} loading="eager" alt="power automate logo" className="md:w-9/12 h-[auto]" />
                                            </div>

                                            <div className="flex flex-col gap-1 col-start-2 col-end-7">
                                                <h4 className="font-semibold font-geist">Power Automate</h4>
                                                <p className="max-w-[55ch]  md:max-w-max">A workflow automation tool that connects apps and services to automate repetitive tasks and processes.
                                                    Can be used for notifications, data updates, approvals, and more.</p>
                                            </div>
                                        </motion.div>

                                    </div>


                                    <div className="min-h-[150px] flex py-6 items-center border-border border-y">
                                        <motion.div className="flex flex-col md:grid grid-cols-6 md:items-center  px-4 justify-between gap-8 md:flex-row" role="decorative" sizes="(min-width:768px)100px, 120px" variants={{initial:{opacity:0, translateY:30}, inView:{opacity:1, translateY:0} }} transition={{duration: 0.6, ease:"easeInOut"}}>
                                            <div className="col-start-1 col-end-2  pt-4 flex flex-row h-max self-start">
                                                <Image src={BI} loading="eager" alt="power bi logo" className="md:w-9/12 h-[auto]" />
                                            </div>

                                            <div className="flex flex-col col-start-2 col-end-7 gap-1 ">
                                                <h4 className="font-semibold font-geist">Power BI</h4>
                                                <p className="max-w-[55ch] md:max-w-max">Power BI is a business analytics tool which allows you to easily connect to data sources, create visuals and gain business intelligence quickly.</p>
                                            </div>
                                        </motion.div>

                                    </div>

                                    <div className="min-h-[150px] py-6 flex items-center border-border border-y">
                                        <motion.div className="flex flex-col md:grid grid-cols-6 md:items-center  px-4 justify-between gap-8 md:flex-row" role="decorative" sizes="(min-width:768px)100px, 120px" variants={{initial:{opacity:0, translateY:30}, inView:{opacity:1, translateY:0} }} transition={{duration: 0.6, ease:"easeInOut"}}>
                                            <div className="col-start-1 col-end-2 pt-4 flex flex-row h-max self-start">
                                                <Image src={Virtual} loading="eager" alt="power virtual agents logo" className="md:w-9/12 h-[auto]" />
                                            </div>

                                            <div className="flex flex-col gap-1 col-start-2 col-end-7">
                                                <h4 className="font-semibold font-geist">Power Virtual Agents</h4>
                                                <p className="max-w-[55ch] md:max-w-max">Allows users to create AI-powered chatbots to handle customer inquiries and automate support tasks.
                                                    Requires no coding and integrates seamlessly with other tools in the Microsoft ecosystem.</p>
                                            </div>
                                        </motion.div>

                                    </div>


                                </motion.div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

            <Footer />
        </>
    )
}
