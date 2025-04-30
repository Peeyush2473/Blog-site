import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const About = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='relative w-full h-[93vh]'>
              <Image src='placeHolder.svg' layout='fill' objectFit='cover' alt='Blog Image'></Image>
            </div>
        </>
    )
}

export default About