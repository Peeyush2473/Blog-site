import Navbar from './components/Navbar';
import Image from 'next/image';
import blogs from './data/blog.json';
import { categories } from './data/categories';
import HomeClient from './components/HomeClient';
import NewsletterEmail from './components/NewsletterEmail';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className='relative w-full h-[93vh]'>
        <Image src='/placeHolder.svg' fill alt='Blog Image' className='object-cover'/>
      </div>

      {/* SidePanel */}
      <div>
        <div className="absolute right-50 z-50 mt-140 w-9/50">
          {/* About */}
          <div className="relative w-full h-auto border-black border-2 p-8 pt-16 flex flex-col items-center my-10">
            <div className="absolute w-40 h-40 rounded-full overflow-hidden top-0 -translate-y-1/2">
              <Image src="/placeHolder.svg" alt="profile image" fill className='object-cover'/>
            </div>
            <div className='text-3xl font-bold mt-10'>
              Jaspreet Bhamrai
            </div>
            <p className='text-md m-3 text-center font-extralight text-gray-400'>
              For as long as I can remember I’ve 
              been obsessed with the idea of 
              travel. I was always that person who
               was forever daydreaming of foreign 
               lands and unfamiliar cultures; 
              coming up with travel itineraries that
               would challenge my perceptions and 
               help me gain a deeper 
              understanding of the world.
            </p>
            <div className='font-bold text-xl m-4'>Follow Me</div>
            
            <div className='flex gap-3 absolute bottom-0 translate-y-1/2'>
              <div className='w-15 h-15 bg-black flex justify-center items-center'>
                <div className='w-8 h-8 relative'>
                  <Image src='/facebookIcon.svg' alt='facebook icon' fill></Image>
                </div>
              </div>
              <div className='w-15 h-15 bg-black flex justify-center items-center'>
                <div className='w-8 h-8 relative'>
                  <Image src='/instaIcon.svg' alt='instagram icon' fill></Image>
                </div>
              </div><div className='w-15 h-15 bg-black flex justify-center items-center'>
                <div className='w-8 h-8 relative'>
                  <Image src='/youtubeIcon.svg' alt='youtube icon' fill></Image>
                </div>
              </div><div className='w-15 h-15 bg-black flex justify-center items-center'>
                <div className='w-8 h-8 relative'>
                  <Image src='/fiveIcon.svg' alt='five icon' fill></Image>
                </div>
              </div>
            </div>
          </div> 

          {/* Newsletter */}
          <div className="w-full h-auto border-black border-2 p-4 pb-0 pt-10 flex flex-col items-center mt-20">
            <h3 className='text-3xl font-bold'>Newsletter</h3>
            <div className='text-md text-center text-gray-400 m-3'>Subscribe to receive exclusive content updates, travels and photo tips.</div>
            <div>
              <NewsletterEmail></NewsletterEmail>
            </div>
          </div>
        </div>
      </div>
      
      {/* HomeClient => Featured Blog + Explore Categories + Filter Articles */}
      <div className="w-full">
        <HomeClient blogs={blogs} categories={categories} />
      </div>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
}
