"use client"
import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Button from '@/app/components/Cta'
export default function Success() {
    return (<>
        <Navbar />
        <section className='w-full min-h-screen'>

            <div className='w-11/12 flex flex-col items-center justify-center text-center mx-auto min-h-screen'>
                <h2 className='text-header tracking-tight leading-tightest text-3xl mb-8'>
                    Form Successfully Sent
                    <span className='text-lg block'>We will be in touch shortly</span>
                </h2>
                <Button href="/">Return Home</Button>
            </div>

        </section>
        <Footer/>
    </>
    )
}
