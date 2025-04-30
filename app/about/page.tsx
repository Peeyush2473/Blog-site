import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='relative w-full h-[93vh]'>
            <Image src='placeHolder.svg' fill className='object-cover' alt='Blog Image'></Image>
        </div>

        <Footer></Footer>
        </>
    )
}

export default About