"use client"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import HeroImage from "../assets/security/security-hero.png";
import SlidingText from "@/app/components/SlidingText";
import Cta from "@/app/components/Cta"
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Security() {
    const [isActive, setActive] = useState(false)




    return (
        <>
            <Navbar />
            <section className='relative min-h-[90vh] md:min-h-screen w-full '>
                <div className='flex  w-11/12 min-h-[90vh] md:min-h-screen mx-auto pb-8'>
                    <div className="flex flex-col self-end">
                        <h2 className='text-white text-md'>
                            <SlidingText>
                                Security
                            </SlidingText>
                        </h2>
                        <h1 className='z-40 tracking-xtra leading-xtra text-white text-2xl md:text-4xl md:max-w-[25ch]'>
                            <SlidingText>Stay ahead in the ever-evolving world of ICT and cyber-threats</SlidingText>
                        </h1>
                    </div>

                </div>

                <Image alt='hero image of a hand interacting with a holographic menu' className='-z-10 object-cover object-[73%] md:object-top ' src={HeroImage} fill quality={90} />
                <div className='top-0 left-0 opacity-[0.2] overlay bg-black absolute w-full min-h-[90vh] md:min-h-screen'></div>
            </section>


            <section className="w-full min-h-screen pb-16">
                <div className="min-h-screen w-11/12 mx-auto">

                    <div className="min-h-max w-full auto-rows-auto gap-16 flex flex-col md:grid grid-cols-12">

                        <div className="flex flex-col gap-4 col-start-1 md:col-end-10 lg:col-end-8 pt-8">
                            <p className="text-md md:text-xl tracking-tight leading-reg md:leading-reg">It&apos;s better to prevent issues than to address them after they arise, which is why implementing robust security measures to safeguard your business against vulnerabilities is essential.</p>
                            <Cta href="/contact">Enquire Now</Cta>
                        </div>
                        <div className="flex flex-col gap-8 row-start-2 col-start-5 lg:col-start-7 col-end-13">
                            <p className="text-md md:text-lg leading-reg">
                                There is a range of security measures to choose from—select the one that aligns best with your business needs.
                            </p>
                            <div className="flex flex-col">

                                <div className="accordion py-1 border-b border-t border-border">
                                    <button onClick={() => setActive(isActive === 1 ? false : 1)} className={isActive === 1 ? "accord-active font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full" : "font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full"}>Cyber-Security</button>
                                    <div className={isActive === 1 ? "accordion-content max-h-max overflow-hidden px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>We help you protect your business from cyber threats. We offer a variety of security solutions, including firewalls, intrusion detection systems, and data loss prevention.</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 2 ? false : 2)} className={isActive === 2 ? "accord-active font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full" : "font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full"}>Employee Monitoring</button>
                                    <div className={isActive === 2 ? "accordion-content  max-h-max overflow-hidden px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>We help you monitor your employees’ computer activity to ensure that they are using your systems appropriately. We offer a variety of monitoring solutions, including keystroke logging, web browsing monitoring, and email monitoring.</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 3 ? false : 3)} className={isActive === 3 ? "accord-active font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full" : "font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full"}>
                                        Authentication & Encryption
                                    </button>
                                    <div className={isActive === 3 ? "accordion-content max-h-max overflow-hidden px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>We help you secure your data by implementing strong authentication and encryption measures. We offer a variety of authentication solutions, including single sign-on and two-factor authentication. We also offer a variety of encryption solutions, including file encryption and email encryption.</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 4 ? false : 4)} className={isActive === 4 ? "accord-active font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full" : "font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full"}>Intrusion Prevention & Detection</button>
                                    <div className={isActive === 4 ? "accordion-content max-h-max overflow-hidden px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>We help you prevent and detect intrusions into your network. We offer a variety of intrusion prevention and detection solutions, including firewalls, intrusion detection systems, and honeypots.</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 5 ? false : 5)} className={isActive === 5 ? "accord-active font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full" : "font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full"}>Data Loss & Prevention</button>
                                    <div className={isActive === 5 ? "accordion-content max-h-max overflow-hidden px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>We help you protect your sensitive data from being lost or stolen. We offer a variety of DLP solutions, including data classification, data encryption, and data loss prevention software.</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 6 ? false : 6)} className={isActive === 6 ? "accord-active font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full" : "font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full"}>Network Access Control</button>
                                    <div className={isActive === 6 ? "accordion-content max-h-max overflow-hidden px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>We help you control who has access to your network. We offer a variety of NAC solutions, including NAC gateways and NAC software.</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 7 ? false : 7)} className={isActive === 7 ? "accord-active font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full" : "font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full"}>Email Security</button>
                                    <div className={isActive === 7 ? "accordion-content max-h-max overflow-hidden px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>We help you protect your email from spam, malware, and phishing attacks. We offer a variety of email security solutions, including email filtering, email encryption, and email archiving.</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 8 ? false : 8)} className={isActive === 8 ? "accord-active font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full" : "font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full"}>Web Filtering & Security</button>
                                    <div className={isActive === 8 ? "accordion-content max-h-max overflow-hidden px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>We help you protect your employees from harmful websites and content. We offer a variety of web filtering and security solutions, including web filtering software and web content filtering appliances.</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 9 ? false : 9)} className={isActive === 9 ? "accord-active font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full" : "font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full"}>Virus & Spyware Protection</button>
                                    <div className={isActive === 9 ? "accordion-content max-h-max overflow-hidden px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>We help you protect your computers from viruses and spyware. We offer a variety of virus and spyware protection solutions, including antivirus software and anti-spyware software</p>
                                    </div>
                                </div>

                                <div className="accordion py-1 border-b border-border">
                                    <button onClick={() => setActive(isActive === 10 ? false : 10)} className={isActive === 10 ? "accord-active font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full" : "font-geist flex justify-between font-semibold text-md text-left p-2 accordion-btn w-full"}>Penetration & Vulnerability Testing</button>
                                    <div className={isActive === 10 ? "accordion-content max-h-max overflow-hidden px-2" : "accordion-content max-h-0 overflow-hidden px-2"} >
                                        <p>We help you identify and fix security vulnerabilities in your network. We offer a variety of penetration testing and vulnerability testing services, including vulnerability scanning, penetration testing, and red teaming.</p>
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
