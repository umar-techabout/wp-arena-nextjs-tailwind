
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import wpamessage from '../../images/wpa-message.png'
import Image from 'next/image'

const BlogListing = ({ dataBlog , ButtonText =true }) => {
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = Math.ceil(dataBlog.length / itemsPerPage);

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentData = dataBlog.slice(offset, offset + itemsPerPage);

    return (
        <>
                <div className='relative'>
                <div className="space-y-4 w-full">
                        {currentData.map((elem) => (
                            <div className='relative' key={elem.id}>
                                <div className="bg-white  border-b-2 border-gray-200 overflow-hidden">
                                    <div className="flex flex-col xs:flex-col sm:col-row md:flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-4 sm:gap-10 py-8">
                                        
                                        <div>
                                            <div className='w-full xs:w-full sm:w-[400] md:w-[400px] lg:w-[450px] h-[250px]  relative'>
                                                <Image className='sm:w-[400] md:w-[400px]  lg:w-[450px] h-[250px] border-2  border-#f0f2f3 rounded-lg' src={elem.BlogThumbnail} alt={elem.BlogTitle} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col space-y-2 sm:space-y-4 flex-1'>
                                            <div>
                                                <div className=''>
                                                    <p className='text-lg sm:text-sm font-semibold md:text-lg'>Recent updated on By <Link className='text-[#2980b9] ml-2 text-lg inline-flex items-center' href="">{elem.BlogPostDate} {elem.BlogAdminName}<i className='ml-2'><Image src={wpamessage} alt='share blog post icon' /></i></Link>(53)</p>
                                                </div>
                                                <div className='wpa-blog-list-title'>
                                                    <h3 className='text-3xl sm:text-2xl md:text-2xl lg:text-3xl  font-bold opacity-90 text-[#333]'><Link className="text-gray-800 hover:text-[#2980b9]" href={"/"}>{elem.BlogTitle}</Link></h3>
                                                </div>
                                                <div className='text-lg sm:text-base md:text-lg text-black line-clamp-3 sm:line-clamp-4'>
                                                    <p className='text-lg sm:text-sm font-normal md:text-lg'>{elem.BlogDescription}</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            
                        ))}
                </div>
                {/* {/ <Pagination pageCount={pageCount} handlePageClick={handlePageClick} /> /} */}
            </div>
        </>
    );
}

export default BlogListing;
