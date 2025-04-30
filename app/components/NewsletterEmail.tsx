'use client'
import { useState } from 'react'

const NewsletterEmail = () => {
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
        <div>
            {!submitted && (
            <form onSubmit={handleSubmit} className='mt-4 flex flex-col'>
                <div className='relative w-full mr-8'>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=' '
                    required
                    className='peer w-full px-4 py-2 border-b-2 bg-transparent text-black focus:outline-none focus:ring-0'
                />
                <span className='absolute -z-2 left-4 top-1/2 -translate-y-1/2 text-black text-base transition-[top,font-size] duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400'>
                    Enter your email
                </span>
                </div>
                <button type='submit' className='w-full sm:w-auto bg-black text-white text-lg font-bold my-4 px-6 py-2 hover:bg-gray-300 transition'>
                Subscribe
                </button>
            </form>
          )}
          {submitted && <p className='text-2xl font-bold text-green-300 my-4 pb-4 px-4 text-center'>Thank you for subscribing!</p>}
        </div>
    )
}

export default NewsletterEmail