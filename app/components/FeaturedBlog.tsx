'use client';

import ReadMore from "./ReadMore";
import { useRouter } from 'next/navigation';

interface FeaturedBlogProps {
  blog: {
    id: number;
    category: string;
    title: string;
    excerpt: string;
    image: string;
  };
}


const FeaturedBlog: React.FC<FeaturedBlogProps> = ({ blog }) => {
  const router = useRouter();

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/--+/g, '-')     // Replace multiple hyphens with single hyphen
      .trim();                  // Trim leading/trailing spaces or hyphens
  };

  const slug = generateSlug(blog.title);

  const handleReadMore = () => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="relative p-8 h-full">
      <div className='text-lg text-neutral-500'>{blog.category}</div>
      <h2 className="font-bold py-6 text-6xl">{blog.title}</h2>
      <p className="text-lg mt-2 text-gray-400">{blog.excerpt}</p>
      <div className='absolute bottom-15'>
        <ReadMore onClick={handleReadMore} />
      </div>
    </div>
  );
};

export default FeaturedBlog;
