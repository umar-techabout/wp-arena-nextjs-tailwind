'use client'
import React from 'react'
import '../../components/contactform/ContactForm.css'

const ContactUs = () => {
    return (
        <>
            <div className='md:px-20 xs:px-10 px-5'>
                <div className='text-left'>
                    <h2 className='font-semibold text-gray-800 mb-3 xl:text-5xl xs:text-4xl text-2xl'>Contact Us</h2>
                </div>

                <div className='text-left'>
                    <p className='lg:text-base lg:leading-7 text-sm leading-6'>Have questions, feedback, or need assistance? We're here to help! Reach out to us anytime, and our team will get back to you promptly. Your inquiries are important to us at WPArena.</p>
                </div>
            </div>
            <div className='my-7 md:px-20 xs:px-10 px-5'>
                <div className='xs:p-7 p-4 bg-[#daedf6]'>
                    <form action=''>
                        <div className='bg-gray-800 rounded md:py-5 py-3 text-center'>
                            <h3 className='text-white xl:text-3xl lg:text-2xl text-xl font-bold uppercase'>Contact Us</h3>
                        </div>
                        <div className='pt-7'>
                            <div className='flex items-center sm:flex-row flex-col gap-7'>
                                <input type='text' placeholder='Name: *' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 p-5 placeholder-gray-800 w-full font-normal text-lg outline-0' />
                                <input type='email' placeholder='Email: *' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 p-5 placeholder-gray-800 w-full font-normal text-lg outline-0' />
                            </div>
                            <div className='flex items-start sm:flex-row flex-col gap-7 py-7'>
                                <select className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 px-5 placeholder-gray-800 w-full font-normal text-lg outline-0'>
                                    <option>WpArena Pro Services-1</option>
                                    <option>WpArena Pro Services-2</option>
                                    <option>WpArena Pro Services-3</option>
                                    <option>WpArena Pro Services-4</option>
                                </select>
                                <textarea placeholder='Message' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-28 px-5 pt-3 placeholder-gray-800 w-full font-normal text-lg outline-0'></textarea>
                            </div>
                            <div className=''>
                                <div className='flex items-center gap-5'>
                                    <input type="radio" id="updates" name="age" value="30" className='h-5 w-5'/>
                                    <label htmlFor="updates" className='xl:text-lg text-base font-semibold'>Yes, I would like to receive weekly WordPress tutorials and other updates from WPBeginner.</label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <button type="button" className='h-11 w-44 uppercase text-base rounded-sm font-semibold transition-all bg-gray-800 text-white hover:bg-[#2980b9]'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs
