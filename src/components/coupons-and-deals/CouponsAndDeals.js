
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { API_BASE_URL } from '../../apiConfig';

const CouponsAndDeals = ({ showDis, butonLabel = "true" }) => {
    const [deals, setDeals] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/deal`);
                setDeals(response.data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching posts");
                console.error(error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="wpa-loader-main">
                <div className="wpa-loader"></div>
            </div>
        );
    }

    return (
        <>
            <section className="py-12 bg-[#ebf1ff]">
                <div className="container mx-auto">
                    {showDis && (
                        <div className='text-center px-20'>
                            <h2 className='text-4xl font-bold mb-4'>WPArena Coupons and Deals</h2>
                            <p className='text-lg mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        </div>
                    )}
                    <div className='flex flex-wrap justify-center gap-8'>
                        {deals.map((elem) => (
                            <Link href={"/"} className='flex items-center bg-white shadow-lg rounded-lg p-4 w-full sm:w-1/2 lg:w-1/3 group hover:bg-gray-800 hover:text-white transition-all duration-300' key={elem.id}>
                                <div className='w-1/3 flex justify-center items-center'>
                                    <Image className='rounded-full w-24 h-24 group-hover:border-4 group-hover:border-white' height={100} width={100}   src={elem.featured_image} alt={elem.title.rendered} />
                                </div>
                                <div className='w-2/3 pl-6 border-l-2 border-gray-300'>
                                    <h4 className='text-xl font-semibold'>{elem.title}</h4>
                                    <h5 className='text-[#2980b9] font-medium text-lg'>{elem.acf_fields['coupons_discount']} %OFF</h5>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {deals.length > 10 && (
                    <div className="text-center mt-8">
                        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                            {butonLabel === "true" ? "VIEW ALL" : "LOAD MORE"}
                        </button>
                    </div>
                )}
            </section>
        </>
    );
};

export default CouponsAndDeals;
