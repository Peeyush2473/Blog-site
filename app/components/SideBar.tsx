'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}


const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const getLinkClass = (href: string) =>
    `font-semibold transition-colors duration-200 cursor-pointer hover:underline underline-offset-8 ${
      pathname === href ? 'text-white' : 'text-neutral-500'
    }`;

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // TODO: send the email to an API or service
      console.log("Email submitted:", email);
      setSubmitted(true);
      setEmail('');
    };


  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-black/85 shadow-xl z-60 
        ${isOpen ? 'visible' : 'invisible'}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className='relative h-full flex justify-center items-center'>
        <button onClick={onClose} className='text-white text-5xl absolute top-8.5 left-47'>X</button>
        <div className='w-120 h-3/5'>
          <ul className='h-full flex flex-col items-center justify-between text-5xl'>
            <li className={getLinkClass('/')}>
              <Link href='/'>Home</Link>
            </li>
            <li className={getLinkClass('/about')}>
              <Link href='/about'>About me</Link>
            </li>
            <li className={getLinkClass('/categories')}>
              <Link href='/categories'>Categories</Link>
            </li>
            <li className={getLinkClass('/contact')}>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        
        <div className='ml-50 w-2/5 h-60 border-white border-1 text-white pt-8 pl-12'>
          <div className='text-6xl font-bold'>Newsletter</div>
          <div className='text-xl pt-3'>Subscribe to receive exclusive content updates, travel and photo tips.</div>
          {!submitted && (
            <form onSubmit={handleSubmit} className='mt-4 flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-4'>
            <div className='relative w-3/5 mr-8'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=' '
                required
                className='peer w-full px-4 py-2 border-b-2 bg-transparent text-white focus:outline-none focus:ring-0'
              />
              <span className='absolute left-4 top-1/2 -translate-y-1/2 text-white text-base transition-[top,font-size] duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400'>
                Enter your email
              </span>
            </div>
            <button type='submit' className='w-full sm:w-auto bg-white text-black text-lg font-semibold px-6 py-2 hover:bg-gray-300 transition'>
              Subscribe
            </button>
          </form>
          )}
          {submitted && <p className='text-2xl font-bold text-green-300 pt-8'>Thank you for subscribing!</p>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
