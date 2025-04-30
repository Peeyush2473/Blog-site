'use client'
import React from 'react';
import Image from 'next/image';
import ReadMore from './ReadMore';
import { useRouter } from 'next/navigation'

interface BlogCardProps {
  blog: {
    id: number;
    category: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {

    const generateSlug = (title: string): string => {
        return title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '') // Remove special characters
          .replace(/\s+/g, '-')     // Replace spaces with hyphens
          .replace(/--+/g, '-')     // Replace multiple hyphens with single hyphen
          .trim();                  // Trim leading/trailing spaces or hyphens
      };

      const slug = generateSlug(blog.title);

      const router = useRouter();

      const handleReadMore = () => {
        router.push(`/blog/${slug}`);
      };

  return (
    <div className='h-80 bg-white flex overflow-hidden transition-all duration-300 hover:shadow-md transform hover:-translate-y-2'>
      <div className='relative h-full w-2/5'>
        <Image 
          src={blog.image || '/placeHolder.svg'} 
          fill
          alt={blog.title}
          className='object-cover'
        />
      </div>
      
      <div className='relative w-full px-8 py-6'>
        <div className='flex items-center mb-1'>
          <span className='text-md font-medium text-black'>#{blog.category}</span>
          <span className='text-xl -translate-y-1.5 mx-2 text-neutral-300'>.</span>
          <span className='text-md font-medium text-gray-500'>{blog.date}</span>
        </div>
        
        <div className='text-4xl h-auto font-bold mb-2'>{blog.title}</div>
        
        <div className=''>
          <span className='text-sm text-neutral-400'>By {blog.author}</span>
        </div>
        <div className='text-gray-500 my-3 font-medium'>
          {blog.excerpt}
        </div>
        <div className='absolute bottom-8'>
          <ReadMore onClick={handleReadMore}></ReadMore>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;