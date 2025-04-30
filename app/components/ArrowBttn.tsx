'use client'
import React from 'react'
import Image from 'next/image'

interface BttnDetails{
    imageUrl: string;
    action: 'previous' | 'next';
  onClick: () => void;
}

const ArrowBttn = (info: BttnDetails) => {
    const handleNextClick = () => {console.log('next')};
    const handlePreviousClick = () => {console.log('previous')};


    return (
        <div className='relative w-1/2 h-1/2'>
             <button onClick={info.onClick} className="w-full h-full flex justify-center items-center bg-transparent border-none p-0 m-0">
                <Image src={info.imageUrl} alt='Navigation button' layout='fill' objectFit='cover'></Image>
                
            </button>
        </div>
    )
}

export default ArrowBttn