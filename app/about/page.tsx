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

        <div className='flex flex-col items-center w-full h-auto'>
            <div className='absolute bottom-[6vh] w-3/5 bg-white text-center text-6xl font-bold p-10 pb-20'>
                <div className='mb-2'>My name is</div>
                <div className='mt-3'>Jaspreet Bhamrai</div>
            </div>
            <div className='flex gap-5 absolute bottom-[4vh] z-30 translate-y-1/2'>
                <div className='w-15 h-15 bg-black flex justify-center items-center'>
                    <div className='w-8 h-8 relative'>
                    <Image src='/facebookIcon.svg' alt='facebook icon' fill></Image>
                    </div>
                </div>
                <div className='w-15 h-15 bg-black flex justify-center items-center'>
                    <div className='w-8 h-8 relative'>
                    <Image src='/instaIcon.svg' alt='instagram icon' fill></Image>
                    </div>
                </div><div className='w-15 h-15 bg-black flex justify-center items-center'>
                    <div className='w-8 h-8 relative'>
                    <Image src='/youtubeIcon.svg' alt='youtube icon' fill></Image>
                    </div>
                </div><div className='w-15 h-15 bg-black flex justify-center items-center'>
                    <div className='w-8 h-8 relative'>
                    <Image src='/fiveIcon.svg' alt='five icon' fill></Image>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col w-full items-center my-30'>
            <div className='w-3/5 flex flex-col items-center'>
                <div className='w-3/5'>
                <hr className='border-1 border-gray-300'/>
                    <div className='text-4xl italic m-4 my-12 text-center text-black'>
                        Some beautiful paths can't be discovered without getting lost.
                    </div>
                <hr className='border-1 border-gray-300'/>
                <p className='m-8 '>For as long as I can remember I’ve been obsessed with the idea of travel. I was always that person who was forever daydreaming of foreign lands and unfamiliar cultures; coming up with travel itineraries that would challenge my perceptions and help me gain a deeper understanding of the world.</p>
                </div>
                <div className="relative w-4/5 h-[500px] flex justify-around">
                    <div className="relative w-9/20 h-full">
                        <Image 
                        src="/placeHolder.svg" 
                        alt="Pic 1" 
                        fill 
                        sizes="50vw"
                        className="object-cover"
                        />
                    </div>
                    <div className="relative w-9/20 h-full">
                        <Image 
                        src="/placeHolder.svg" 
                        alt="Pic 2" 
                        fill 
                        sizes="50vw"
                        className="object-cover"
                        />
                    </div>
                </div>



            </div>
        </div>

        <Footer></Footer>
        </>
    )
}

export default About