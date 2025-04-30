import React from 'react';
import Image from 'next/image';
import ReadMore from './ReadMore';

interface BlogCardProps {
  blog: {
    id: number;
    categories: string[];
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
  };
  selected: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, selected }) => {

  return (
    <div className='h-80 bg-white flex overflow-hidden transition-all duration-300 hover:shadow-md transform hover:-translate-y-2'>
      <div className='relative h-full w-1/2'>
        <Image 
          src={blog.image || '/placeHolder.svg'} 
          fill
          alt={blog.title}
          className='object-cover'
        />
      </div>
      
      <div className='relative w-full px-8 py-6'>
        <div className='flex items-center mb-1'>
          <span className='text-md font-medium text-black'>#{(selected === 'All') ? blog.categories[0] : selected}</span>
          <div className='mx-3 w-1 h-1 rounded-full bg-gray-400'></div>
          <span className='text-md font-medium text-gray-400'>{blog.date}</span>
        </div>
        
        <div className='text-4xl h-auto font-bold mb-2'>{blog.title}</div>
        
        <div className=''>
          <span className='text-sm text-neutral-400'>By {blog.author}</span>
        </div>
        <div className='text-gray-500 my-3 font-medium'>
          {blog.excerpt}
        </div>
        <div className='absolute bottom-8'>
          <ReadMore title={blog.title}></ReadMore>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;