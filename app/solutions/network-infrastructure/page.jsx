"use client"
import React from 'react'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import SlidingText from '@/app/components/SlidingText';
import Hero from "../assets/network/network-hero.png";
import Consultant from "@/app/solutions/assets/network/consultant.png"
import { useState } from "react";
export default function Network() {

    const [isActive, setActive] = useState(false)
    return (
        <>

            <Navbar />

            <section className='relative min-h-[90vh] md:min-h-screen w-full '>
                <div className='flex w-11/12 min-h-[90vh] md:min-h-screen mx-auto pb-8'>
                    <div className="flex flex-col self-end">
                        <h2 className='text-white text-md'>
                            <SlidingText>
                                Network Infrastructure
                            </SlidingText>
                        </h2>
                        <h1 className='z-40 tracking-xtra leading-xtra text-white text-2xl md:text-4xl md:max-w-[21ch]'>
                            <SlidingText>Ensure your foundations are solid to support your business</SlidingText>
                        </h1>
                    </div>
                </div>
                <Image alt='hero image of a hand interacting with a holographic menu' className='-z-10 object-cover object-[73%] md:object-top ' sizes='100vw' priority={true} src={Hero} fill quality={90} />
                <div className='top-0 left-0 opacity-[0.2] overlay bg-black absolute w-full min-h-[90vh] md:min-h-screen'></div>
            </section>

            <section className='min-h-[50vh] w-full flex justify-center items-center'>
                <div className='w-11/12 mx-auto min-h-max'>
                    <p className='mx-auto text-md md:text-xl lg:text-xl font-geist font-semibold tracking-reg text-header leading-reg font-geist max-w-[55ch] text-center'>
                   
                            In today&apos;s fast-paced digital landscape, having a robust and reliable IT infrastructure is essential to support your business applications and scale alongside your future growth plans.
                       
                    </p>
                </div>


            </section>
            <section className='min-h-max w-full'>
                <div className='min-h-max relative w-11/12 pb-24 mx-auto'>

                    <div className='flex flex-col mb-16 lg:flex-row justify-evenly gap-16 items-center min-h-max w-full md:w-11/12 lg:w-full mx-auto'>

                        <div className='left w-full flex flex-col items-center lg:items-start  lg:w-max'>
                            <h3 className='font-semibold text-lg self-start  text-left  md:text-2xl lg:text-xl lg:text-left leading-tight md:leading-tightest tracking-tight md:max-w-[20ch] mb-8'>
                            Comprehensive IT Infrastructure Solutions
                            </h3>
                            <div className='flex flex-col  md:text-md lg:text-base gap-6 md:max-w-full lg:max-w-[55ch] text-body'>
                                <p className='leading-looser'>
                                    Our team of expert IT specialists is dedicated to guiding you through the critical decisions necessary to establish and maintain an optimized network infrastructure. This includes comprehensive network design services tailored to your specific needs, ensuring alignment with your operational goals and technical requirements.
                                </p>

                                <p className='leading-looser'>
                                    We provide end-to-end support, from the design and planning phase to the installation and ongoing maintenance of your IT infrastructure, across a diverse range of environments. Whether you are upgrading existing systems, expanding your network capabilities, or building your infrastructure from the ground up, we have the expertise to deliver solutions that enhance performance, minimize downtime, and future-proof your IT environment.
                                </p>
                            </div>
                        </div>

                        <Image src={Consultant} className=" w-full lg:w-1/2 consultant" alt='image of a tech consultant at work' quality={90} sizes='(max-width:900px) 100vw, 50vw' />
                    </div>
                    <div className='flex pt-8 justify-end'>
                        <div className="flex flex-col relative right-0 gap-8 w-full md:w-1/2 ">
                            <p className="font-bold tracking-reg text-base md:text-md leading-reg">
                                We will assess and advise on the following
                            </p>
                            <div className="flex flex-col">

                                <div className="accordion py-1 border-b border-t border-border">
                                    <button onClick={() => setActive(isActive === 1 ? false : 1)} className={isActive === 1 ? "accord-active text-header flex justify-between text-base  text-left p-2 accordion-btn w-full" : "flex  justify-between text-base text-left p-2 accordion-btn w-full"}>Hosting type</button>
                                    <div className={isActive === 1 ? "accordion-content max-h-max overflow-hidden px-2 py-4" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>Public cloud (e.g. AWS, Azure), Private cloud on-premise or hybrid?​</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 2 ? false : 2)} className={isActive === 2 ? "accord-active text-header flex justify-between text-base  text-left p-2 accordion-btn w-full" : "flex  justify-between text-base text-left p-2 accordion-btn w-full"}>Capacity</button>
                                    <div className={isActive === 2 ? "accordion-content  max-h-max overflow-hidden py-4 px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>Bandwidth, data storage, number of users​</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 3 ? false : 3)} className={isActive === 3 ? "accord-active text-header flex justify-between text-base text-left p-2 accordion-btn w-full" : "flex justify-between text-base text-left p-2 accordion-btn w-full"}>
                                        Server Infrastructure
                                    </button>
                                    <div className={isActive === 3 ? "accordion-content max-h-max overflow-hidden px-2 py-4" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>Servers; storage systems; switches, routers and cabling; and dedicated network services, such as firewalls</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 4 ? false : 4)} className={isActive === 4 ? "accord-active text-header flex justify-between text-base text-left p-2 accordion-btn w-full" : "flex justify-between text-base text-left p-2 accordion-btn w-full"}>Redundancy</button>
                                    <div className={isActive === 4 ? "accordion-content max-h-max overflow-hidden px-2 py-4" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>Data backups, load balancing, maintenance.​</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 5 ? false : 5)} className={isActive === 5 ? "accord-active text-header flex justify-between text-base text-left p-2 accordion-btn w-full" : "flex justify-between text-base text-left p-2 accordion-btn w-full"}>Security and compliance</button>
                                    <div className={isActive === 5 ? "accordion-content max-h-max overflow-hidden px-2 py-4" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>Security issues, compliance risks (e.g. GDPR)​</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </section>


            <Footer />
        </>
    )
}
