'use client'
import React from 'react'
import Image from 'next/image'

interface BttnDetails {
  imageUrl: string;
  action: 'previous' | 'next';
  onClick: () => void;
}

const ArrowBttn = (info: BttnDetails) => {
  return (
    <div className='relative w-full h-full'>
      <button 
        onClick={info.onClick} 
        className="w-full h-full flex justify-center items-center bg-transparent border-none p-0 m-0"
      >
        <div className='relative w-1/2 h-1/2'>
          <Image 
            src={info.imageUrl} 
            alt={`${info.action} button`}
            fill
            className="object-contain"
          />
        </div>
      </button>
    </div>
  )
}

export default ArrowBttn