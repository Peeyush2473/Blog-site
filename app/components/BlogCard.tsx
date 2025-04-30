import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
      <div className="relative h-48 w-full">
        <Image 
          src={blog.image || '/placeHolder.svg'} 
          layout="fill"
          objectFit="cover"
          alt={blog.title}
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-blue-600">{blog.category}</span>
          <span className="text-xs text-gray-500">{blog.date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h3>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">By {blog.author}</span>
          <Link href={`/blog/${slug}`}>
            <div className="text-blue-600 font-medium hover:underline">Read More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;