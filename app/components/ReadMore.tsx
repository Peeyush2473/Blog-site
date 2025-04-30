'use client'

import { useRouter } from "next/navigation";

interface ReadMoreProps {
  title: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ title }) => {

  const router = useRouter();
  
  const generateSlug = (title: string): string => {
    return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/--+/g, '-')     // Replace multiple hyphens with single hyphen
    .trim();                  // Trim leading/trailing spaces or hyphens
  };
  
  const slug = generateSlug(title);
  

  const handleClick = () => {
    router.push(`/blog/${slug}`);
  }
    return(
        <>
        <button onClick={handleClick} className='bg-black text-white w-40 h-13 text-xl font-bold cursor-pointer'>Read more</button>
        </>
    )
}

export default ReadMore