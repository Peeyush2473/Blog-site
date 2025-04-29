import React from 'react'
import Image from 'next/image'

interface BlogDetails {
    imageUrl: string;
    title: string;
    excerpt: string;
    readTime: number;
    category: string;
}

const BlogCard = (info: BlogDetails) => {
    return (
        <div>
            <div className='w-2/5 h-full'>
                <Image src={info.imageUrl} alt='Blog Image' layout='fill'></Image>
            </div>
            <div>
                <div></div>
            </div>
            
        </div>
    )
}

export default BlogCard