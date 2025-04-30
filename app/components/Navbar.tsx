'use client';
import React, { useState } from 'react';
import SideBar from './SideBar';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOutsideClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className='absolute top-8 left-0 w-full z-30 flex justify-between items-center px-6'>
        <button onClick={() => setSidebarOpen(true)} className={`text-black bg-transparent px-40 -translate-y-1 font-bold text-5xl scale-x-125 transform ${isSidebarOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-100`}>
          ☰
        </button>
        <span className='text-3xl font-bold'>Personal Travel Blog</span>
        <div className='px-40 scale-125 bg-transparent font-bold w-80 flex justify-end'>
          <SearchBar/>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
            className='fixed inset-0 z-20 backdrop-blur-sm bg-white/10 transition-all duration-300 ease-in-out'
            onClick={handleOutsideClick}
        />
      )}

      {/* Sidebar Panel */}
      <SideBar isOpen={isSidebarOpen} onClose={handleOutsideClick}/>
    </>
  );
};

export default Navbar;
