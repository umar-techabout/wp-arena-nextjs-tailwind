import React from 'react'
import AdvertiseBanner from "@/images/advertise-banner.png"
import SizeDimensions from '@/images/size-dimensions.png'
import "./AdvertiseWithUs.css"
import Link from 'next/link'
import packageone from '@/images/packageone.jpg'
import packagetwo from '@/images/packagetwo.jpg'
import ContactForm from '@/components/contactform/ContactForm'
import Image from 'next/image'
import BreadCrumb from '@/components/breadcrumb/BreadCrumb'

const AdvertiseWithUs = () => {
    return (
        <>

            <BreadCrumb />
            <div className='md:px-20 xs:px-10 px-5'>

                <div className='text-left'>
                    <h2 className='font-semibold text-gray-800 mb-3 xl:text-5xl xs:text-4xl text-2xl'>Advertise With Us</h2>
                </div>

                <div className='text-left'>
                    <p className='lg:text-base lg:leading-7 text-lg leading-6'>We offer banner and link advertisements here on WPArena. Subscriptions will renew every month. Banner advertisements and other ad opportunities are managed by us. Below are the spots available for ads.</p>
                </div>

                <div className='text-left mt-3'>
                    <h2 className='font-semibold text-gray-800 mb-3 xl:text-5xl xs:text-4xl text-2xl'>Banner Advertisements Spots</h2>
                </div>

                <div className='text-left'>
                    <h4 className='xl:text-2xl xs:text-xl text-lg font-medium'>Banner Specification are below.</h4>
                </div>

            </div>

            <div className='md:px-20 xs:px-10 px-5'>
                {/* <div className='wpa-content-top-bottom-spacing-30 wpa-advertise-banner'>
                    <Image src={AdvertiseBanner} alt='Advertise Banner' />
                </div> */}

                <div className='flex items-center  lg:flex-row flex-col lg:gap-12 gap-6 py-7'>

                    <div>
                        <div className=''>
                            <h3 className='text-gray-800 font-semibold mb-2 xl:text-3xl lg:text-2xl text-xl'>PACKAGE-1</h3>
                        </div>
                        <div className='flex-1'>
                            <Image className='w-full' src={packageone} alt='dfjsdlkdljflkdfj' />
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <h3 className='text-gray-800 font-semibold mb-2 xl:text-3xl lg:text-2xl text-xl'>PACKAGE-2</h3>
                        </div>
                        <div className='flex-1'>
                            <Image className='w-full' src={packagetwo} alt='sfdfsdfsfdfsdfsdf' />
                        </div>
                    </div>

                    <div className='wpa-banner-specification'>
                        <div className='wpa-banner-advertisement-outer'>
                            <div className='wpa-flex wpa-menu-items-gap '>
                                <div className='wpa-banner-advertisement-common-box wpa-text-center'>
                                    <div className='wpa-banner-advertisement-icon'>
                                        <Image src={SizeDimensions} alt='Side Dimension' />
                                    </div>
                                    <div className='wpa-banner-advertisement-heading wpa-h5-font-size wpa-h3-font-size wpa-font-weight-600'>
                                        <h3>SIZE DIMENSIONS</h3>
                                        <h5>150px width</h5>
                                    </div>
                                </div>
                                <div className='wpa-banner-advertisement-common-box wpa-text-center'>
                                    <div className='wpa-banner-advertisement-icon'>
                                        <Image src={SizeDimensions} alt='Side Dimension' />
                                    </div>
                                    <div className='wpa-banner-advertisement-heading wpa-h5-font-size wpa-h3-font-size wpa-font-weight-600'>
                                        <h3>FORMATS</h3>
                                        <h5>.JPEG, .GIF AND .PNG</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='wpa-flex wpa-menu-items-gap wpa-margin-top-30'>
                                <div className='wpa-banner-advertisement-common-box wpa-text-center'>
                                    <div className='wpa-banner-advertisement-icon'>
                                        <Image src={SizeDimensions} alt='Side Dimension' />
                                    </div>
                                    <div className='wpa-banner-advertisement-heading wpa-h5-font-size wpa-h3-font-size wpa-font-weight-600'>
                                        <h3>PRICE</h3>
                                        <h5>$300-450.00</h5>
                                    </div>
                                </div>
                                <div className='wpa-banner-advertisement-common-box wpa-text-center'>
                                    <div className='wpa-banner-advertisement-icon'>
                                        <Image src={SizeDimensions} alt='Side Dimension' />
                                    </div>
                                    <div className='wpa-banner-advertisement-heading wpa-h5-font-size wpa-h3-font-size wpa-font-weight-600'>
                                        <h3>FOR MORE DETAILS</h3>
                                        <h5><Link href="/">Contact Us</Link></h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=''>
                    <h2 className='text-gray-800 font-semibold mb-3 xl:text-5xl xs:text-4xl text-2xl'>Specifications</h2>
                    <p className='text-gray-800 font-semibold lg:text-base lg:leading-7 text-sm leading-6'>If your advertisements query is not listed above, don’t worry, <Link className='text-[#2980b9] no-underline' href="">contact us</Link> for more pricing options and details. We are always open to new ideas. Fill the form below to get started.</p>
                </div>
            </div>
            <ContactForm />

        </>
    )
}

export default AdvertiseWithUs
