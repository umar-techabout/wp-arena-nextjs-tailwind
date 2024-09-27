'use client'
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import testimonial01 from '../../images/wpa-testimonial.png'
import testimonial02 from "../../images/wpa-testimonial-2.png";
import testimonial03 from "../../images/wpa-testimonial-3.png";
import RatingStar from "../../images/rating-star.png";
import QuoteTestimonial from "../../images/quote.png";

const Testimonial = () => {
    // Data
    const initialImages = [
        {
            img: testimonial01,
            name: "Ayantan Mitra -",
            sname: "Cogitent Ventures",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            img: testimonial02,
            name: "Ayantan Mitra -",
            sname: "Cogitent Ventures",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            img: testimonial03,
            name: "Ayantan Mitra -",
            sname: "Cogitent Ventures",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            img: testimonial01,
            name: "Ayantan Mitra -",
            sname: "Cogitent Ventures",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            img: testimonial01,
            name: "Ayantan Mitra -",
            sname: "Cogitent Ventures",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
    ];

    // Carousel
    const Carousel = () => {
        const [images, setImages] = useState(initialImages);
        const [currentIndex, setCurrentIndex] = useState(0);

        const moveItems = useCallback(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(nextIndex);
        }, [currentIndex, images.length]);

        useEffect(() => {
            const interval = setInterval(() => {
                moveItems();
            }, 3000); // Change the interval (in milliseconds) as desired

            return () => clearInterval(interval);
        }, [moveItems]);

        const handleItemClick = (index) => {
            setCurrentIndex(index);
        };

        const handleDotClick = (index) => {
            setCurrentIndex(index);
        };

        // Function to create a circular index based on the current index and array length
        const getCircularIndex = (index, length) => {
            return (index + length) % length;
        };

        return (
            <div className="md:px-20 xs:px-10 px-0 md:py-10 ">
                <div className="flex justify-center flex-col items-center">
                    <div className="flex items-center justify-center gap-2 my-5">
                        {/* Render 5 items on the screen */}
                        {Array(5)
                            .fill()
                            .map((_, index) => {
                            const imageItem = images[getCircularIndex(currentIndex + index - 2, images.length)];
                            return (
                                <div
                                    key={index}
                                    className={`
                                        ${index === 2 ? 'block' : 'hidden xs:block'} 
                                        ${(index === 0 || index === 4) ? 'xs:block' : ''} 
                                        transition-all ease-in-out duration-300
                                    `}
                                    onClick={() =>
                                        handleItemClick(getCircularIndex(currentIndex + index - 2, images.length))
                                    }
                                >
                                    <Image
                                        className={`border-8 border-solid border-gray-100 rounded-full cursor-pointer
                                        ${index === 2 ? 'w-36 h-36 opacity-100' : 'w-24 h-24 opacity-50'}`}
                                        src={imageItem.img}
                                        alt="item"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        {/* Render the current item description */}
                        <div
                            className="relative"
                            style={{ backgroundImage: `url(${QuoteTestimonial.src})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center` }}
                        >
                            <div className='flex justify-center gap-2'>
                                <Image src={RatingStar} alt='rating star' className='w-5 h-5 cursor-pointer'/>
                                <Image src={RatingStar} alt='rating star' className='w-5 h-5 cursor-pointer'/>
                                <Image src={RatingStar} alt='rating star' className='w-5 h-5 cursor-pointer'/>
                                <Image src={RatingStar} alt='rating star' className='w-5 h-5 cursor-pointer'/>
                                <Image src={RatingStar} alt='rating star' className='w-5 h-5 cursor-pointer'/>
                            </div>
                            <div className='text-center my-3'>
                                <p className='font-medium md:leading-7 leading-6 md:text-base text-sm'>{images[currentIndex].desc}</p>
                                <p className='md:leading-7 leading-6 md:text-base text-sm my-3'>
                                    <span className='text-[#2980b9] font-semibold'>{images[currentIndex].name}</span> {images[currentIndex].sname}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 text-center">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex === index ? 'active' : ''} border-2 w-5 h-5 mx-1 rounded-full inline-block cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-[#2980b9] border-[#2980b9]' : 'bg-transparent border-gray-300'}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='md:px-20 xs:px-10 px-5 pt-10 pb-6'>
            <div className='text-center'>
                <h4 className='text-[#2980b9] font-normal uppercase italic lg:text-2xl text-xl mb-2'>Testimonial</h4>
                <h2 className='font-semibold xl:text-5xl lg:text-4xl xs:text-3xl text-2xl'>People Talking About Us</h2>
            </div>
            <Carousel />
        </div>
    );
};

export default Testimonial;