import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
    return (
        <div className='my-7 md:px-20 xs:px-10 px-5'>
            <div className='xs:p-7 p-4 bg-[#daedf6]'>
                <form action=''>
                    <div className='bg-gray-800 rounded md:py-5 py-3 text-center'>
                        <h3 className='text-white xl:text-3xl lg:text-2xl text-xl font-bold uppercase'>personal</h3>
                    </div>
                    <div className='pt-7'>
                        <div className='flex items-center sm:flex-row flex-col gap-7'>
                            <input type='text' placeholder='First Name: *' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 p-5 placeholder-gray-800 w-full font-normal text-lg outline-0' />
                            <input type='text' placeholder='Last Name: *' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 p-5 placeholder-gray-800 w-full font-normal text-lg outline-0' />
                        </div>
                        <div className='flex items-center sm:flex-row flex-col gap-7 py-7'>
                            <input type='email' placeholder='Email: *' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 p-5 placeholder-gray-800 w-full font-normal text-lg outline-0' />
                            <input type='url' placeholder='Website / URL: *' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 p-5 placeholder-gray-800 w-full font-normal text-lg outline-0' />
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded md:py-5 py-3 text-center'>
                        <h3 className='text-white xl:text-3xl lg:text-2xl text-xl font-bold uppercase'>AD DETAILS </h3>
                    </div>
                    <div className=''>
                        <h3 className='text-gray-800 font-bold xl:text-3xl lg:text-2xl text-xl my-7'>Ad Type *</h3>
                    </div>
                    <div className='flex md:items-center items-start md:flex-row flex-col md:gap-7 gap-4'>
                        <div className='flex items-center gap-5'>
                            <input type="radio" id="age1" name="age" value="30" className='h-5 w-5'/>
                            <label htmlFor="age1" className='xl:text-lg text-base font-semibold'>Sidebar Top Full width - $450</label>
                        </div>
                        <div className='flex items-center gap-5' >
                            <input type="radio" id="age2" name="age" value="60" className='h-5 w-5'/>
                            <label htmlFor="age2" className='xl-text-lg text-base font-semibold'>Sidebar Bottom Full Width - $300</label>
                        </div>
                        <div className='flex items-center gap-5'>
                            <input type="radio" id="age3" name="age" value="100" className='h-5 w-5'/>
                            <label htmlFor="age3" className='xl:text-lg text-base font-semibold'>Sidebar One of Four Boxes - $200</label>
                        </div>
                    </div>
                    <div className='pt-7'>
                        <div className='flex items-center sm:flex-row flex-col gap-7'>
                            <input type='text' placeholder='Ad Name:' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 p-5 placeholder-gray-800 w-full font-normal text-lg outline-0' />
                            <input type='url' placeholder='Ad URL:' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 p-5 placeholder-gray-800 w-full font-normal text-lg outline-0' />
                        </div>
                        <div className='flex items-center sm:flex-row flex-col gap-7 py-7'>
                            <input type='file' placeholder='Ad Image' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 p-5 pt-3 placeholder-gray-800 w-full font-normal text-lg outline-0' />
                            <input type='number' placeholder='Price: 450' className='bg-[#e6f4fb] border border-solid border-transparent rounded h-14 p-5 placeholder-gray-800 w-full font-normal text-lg outline-0' />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className='h-11 w-44 uppercase text-base rounded-sm font-semibold transition-all bg-gray-800 text-white hover:bg-[#2980b9]'>SUBMIT</button>
                    </div>
                    <span className='block text-center mt-2 text-sm font-semibold'>Last Updated :July 9/2024</span>

                </form>

            </div>
        </div>
    )
}

export default ContactForm
