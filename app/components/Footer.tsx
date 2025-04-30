import Image from 'next/image';
import Link from 'next/link'
import { FaHeart, FaComment } from 'react-icons/fa'; // Using react-icons for heart and comment

const Footer = () => {
  return (
    <>
      <div className="flex">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="relative w-1/6 aspect-square overflow-hidden group">
            <Image src="/placeHolder.svg" alt="footer image" fill className="object-cover" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
              <FaHeart className="text-white text-2xl hover:scale-110 transition-transform" />
              <FaComment className="text-white text-2xl hover:scale-110 transition-transform" />
            </div>
          </div>
        ))}
      </div>
      <div className='relative p-10 left-1/8 w-7/8 flex justify-between items-center'>
        <div className='text-4xl font-bold'>Personal Travel</div>
        <div className='absolute right-50 flex gap-10 text-xl text-gray-400 cursor-pointer'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About me</Link>
            <Link href='/categories'>Categories</Link>
            <Link href='/contact'>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
