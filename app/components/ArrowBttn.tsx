'use client'
import React from 'react'
import Image from 'next/image'

interface BttnDetails{
    imageUrl: string;
    action: string;
}

const ArrowBttn = (info: BttnDetails) => {
    const handleNextClick = () => {console.log('next')};
    const handlePreviousClick = () => {console.log('previous')};


    return (
        <div className='relative w-1/2 h-1/2'>
            <button onClick={() => {
                (info.action === 'previous') ? handlePreviousClick() : handleNextClick();
            }}>
                <Image src={info.imageUrl} alt='Navigation button' layout='fill' objectFit='cover'></Image>
            </button>
        </div>
    )
}

export default ArrowBttn