"use client"
import React from 'react'
import { motion } from "motion/react";
import SlidingText from '../components/SlidingText'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {

    async function handleSubmit(e) {

        e.preventDefault();
        console.log('hello')

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "99ca845b-0d9c-4164-92a7-105b919abe25",
                name: e.target.name.value,
                email: e.target.email.value,
                company: e.target.company.value,
                phone: e.target.phone.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            e.target.name.value = '',
                e.target.email.value = '',
                e.target.company.value = '',
                e.target.phone.value = '',
                e.target.message.value = ''
        }
    }

    return (<>
        <Navbar />
        <section className="w-full min-h-screen ">
            <div className='mx-auto pt-20 md:pt-24 lg:pt-0 flex flex-col items-center justify-center w-11/12 auto-rows-auto min-h-screen lg:grid grid-cols-12'>
                <div className='flex flex-col col-start-1 col-end-7 gap-4'>
                    <h1 className='text-2xl md:text-3xl leading-xtra tracking-xtra'>
                        <SlidingText>
                            Are you ready to future-proof your business?
                        </SlidingText></h1>
                    <iframe className="rounded rounded-lg w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.657188464596!2d-0.11397612348648097!3d51.482806512499835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876048e08071201%3A0x428c57c44234e4bd!2sArtech%202000!5e0!3m2!1sen!2suk!4v1733629132552!5m2!1sen!2suk" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='flex mt-8 lg:mt-0 flex-col min-h-max col-start-8 col-end-13 w-full '>
                    <h3 className='px-4 mb-4 text-md '>Get In Touch</h3>
                    <form onSubmit={handleSubmit} className='flex-col flex '>

                        <div className='py-2 px-4 items-center contact-row  flex flex-row justify-between border-b-2 border-solid border-header'>
                            <label htmlFor='name'>Name</label>
                            <input className='outline-0 pl-4 text-sm bg-transparent border-b w-3/4 md:w-1/2 border-border p-1 mb-2' aria-required required placeholder='Enter Name' type='text' id='name'></input>
                        </div>
                        <div className='py-2 px-4 contact-row items-center flex flex-row justify-between border-b-2 border-header'>
                            <label htmlFor="email" >Email</label>
                            <input className='outline-0 pl-4 text-sm bg-transparent w-3/4 md:w-1/2 border-b border-border p-1 mb-2' aria-required required placeholder='Enter Email' type='email' id='email'></input>
                        </div>
                        <div className='py-2 px-4 contact-row items-center flex flex-row justify-between border-b-2 border-header'>
                            <label htmlFor='company'>Company</label>
                            <input className='outline-0 pl-4 text-sm bg-transparent w-3/4 md:w-1/2 border-b border-border p-1 mb-2' placeholder='Enter Company Name (optional)' type='text' id='company'></input>
                        </div>
                        <div className='py-2 px-4 contact-row items-center flex flex-row justify-between border-b-2 border-header'>
                            <label htmlFor='phone' >Phone</label>
                            <input className='outline-0 pl-4 text-sm bg-transparent w-3/4 md:w-1/2 border-b border-border p-1 mb-2' placeholder='Enter Phone Number (optional)' type='phone' id='phone'></input>
                        </div>
                        <div className='py-2 px-4 contact-row  items-center flex flex-row justify-between border-b-2 border-header'>
                            <label htmlFor='message' className='self-start'>Message</label>
                            <textarea type="text" required aria-required className='outline-0 text-sm min-h-[150px] pl-4 w-3/4 md:w-1/2' placeholder="Type message here" id='message'>

                            </textarea>
                        </div>
                        <button type='submit' className='mt-4'>
                            <motion.div className="w-max" initial="initial" whileHover="hovered" transiiton="transition">
                                <span className="inline-block flex bg-primary hover:bg-secondary text-white py-1 pl-4 pr-1 border-rounded rounded-lg items-center gap-3">
                                    <div className="contact">Submit</div>
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
                                </span>
                            </motion.div>
                        </button>
                    </form>
                </div>
            </div>

            <Footer />

        </section>
    </>



    )
}
