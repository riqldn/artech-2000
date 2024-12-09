"use client"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import HeroImage from "../assets/security/security-hero.png";
import SlidingText from "@/app/components/SlidingText";
import Image from "next/image";
export default function Security() {
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
                <div className='top-0 left-0 opacity-[0.2] overlay bg-black absolute w-full min-h-screen'></div>
            </section>




            <Footer />
        </>
    )
}
