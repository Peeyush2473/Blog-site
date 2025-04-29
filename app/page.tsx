import Image from "next/image";
import FeaturedBlog from "./components/FeaturedBlog";
import ArrowBttn from "./components/ArrowBttn";
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div className='relative w-full h-screen'>
      <Image src='placeHolder.svg' layout='fill' objectFit='cover' alt='Blog Image'></Image>
    </div>
    <div className='absolute bottom-0 left-1/12 w-41/100 h-[528px] z-10 bg-white'>
      <FeaturedBlog></FeaturedBlog>
      <div className=' flex absolute right-[-60px] w-32 h-16'>
        <div className='relative bg-black w-1/2 h-full flex justify-center items-center'>
          <ArrowBttn imageUrl="/leftArrow.svg" action='previous'></ArrowBttn>
        </div>
        <div className='relative bg-white w-1/2 h-full flex justify-center items-center'>
          <ArrowBttn imageUrl="/rightArrow.svg" action='next'></ArrowBttn>
        </div>
      </div>
    </div>
    </>
  );
}
