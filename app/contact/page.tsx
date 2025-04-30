import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const ContactPage = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='my-40  relative left-1/8 w-7/8'>
            <h1 className='text-6xl font-bold mb-20'>Contact</h1>
            <div className='w-full flex justify-around items-center'>
                <div className='w-2/5 h-[550px] relative'>
                    <Image src='/placeHolder.svg' alt='Contact Profile Image' fill className='object-cover'></Image>
                </div>
                <form className='w-2/5 h-[400] text-xl m-8 flex flex-col justify-around'>
                        <div className='flex items-center gap-16 my-4'>
                            <input type='text' placeholder='Your Name' className='w-1/3 border-b-1 focus:outline-none focus:ring-0 border-b-gray-400'></input>
                            <input type='text' placeholder='Your Email' className='w-1/3 border-b-1 focus:outline-none focus:ring-0 border-b-gray-400'></input>
                        </div>
                        <div className='my-4'>
                            <input type='text' placeholder='Subject' className='w-3/4 border-b-1 focus:outline-none focus:ring-0 border-b-gray-400'></input>
                        </div >
                        <div className='my-4'>
                            <input type='textbox' placeholder='Your message' className='w-3/4 border-b-1 focus:outline-none focus:ring-0 border-b-gray-400'></input>
                        </div >
                        <div>
                            <button className='bg-black text-white w-30 h-16 text-xl font-bold'>Send</button>
                        </div>
                </form>
            </div>
            <div className='w-1/2 mt-8 text-md text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptates similique odit temporibus illo quidem aliquid quisquam modi consectetur, deleniti obcaecati perferendis, doloremque ipsum facere adipisci, dolorem iusto aut molestiae!</div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default ContactPage