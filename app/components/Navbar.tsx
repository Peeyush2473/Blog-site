import React from 'react'
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";


const Navbar = () => {
    return (
        <div className='absolute top-8 z-20 flex justify-between'>
            <SideBar></SideBar>
            <span className='text-3xl font-bold '>Personal Travel Blog</span>
            <SearchBar></SearchBar>
        </div>
    )
}

export default Navbar