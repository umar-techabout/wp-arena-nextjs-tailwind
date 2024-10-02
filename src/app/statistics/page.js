import React from 'react'
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import StatisticsBoxes from '@/components/statisticsboxes/StatisticsBoxes';
import listArrow from '@/images/arrow.png';
// import "./Statistics.css"
// import Blogs from '../blogs/Blogs';
// import ApexChart from "../apexchart/ApexChart"
import Image from 'next/image';

const Statistics = () => {

    return (
        <>
            <BreadCrumb />

            <section className='w-full md:px-20 xs:px-10 px-5'>
                <div className=''>
                    <h1 className='2xl:text-5xl lg:text=[44px] xs:text-4xl text-2xl font-semibold mb-5'>WPArena Statistics</h1>
                    <p className='md:leading-8 leading-6 font-medium md:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookgalley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
            </section>

            <StatisticsBoxes />

            <div className='md:px-20 xs:px-10 px-5'>
                <h4 className='bg-[#333333] text-white 2xl:text-2xl xl:text-base text-lg rounded-md p-5 font-semibold w-full'>MOST VISITED BLOGS</h4>
            </div>

            <div className=''>
                {/* <Blogs /> */}
            </div>

            <section>
                <div className="my-8 md:px-20 xs:px-10 px-5">
                    <div className="flex lg:flex-row flex-col mb-12">

                        <div className="lg:w-2/3 w-full">
                            <h2 className='2xl:text-5xl xs:text-4xl text-2xl font-semibold text-[#333333] pb-2'>How Many Websites Are There?</h2>
                            <p className='mb-[10px] py-2 md:text-base text-sm xl:leading-7 leading-6 font-medium '>Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</p>
                            <p className='mb-[10px] py-2 md:text-base text-sm xl:leading-7 leading-6 font-medium '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <ul style={{ listStyleImage: `url(${listArrow.src})` }} className='ps-9 mb-2 xl:leading-9 leading-7 text-[#333] xl:font-bold font-medium'>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>It is a long established fact that a reader will be distracted by the readable content of a page.</li>
                                <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</li>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have humour.</li>
                            </ul>
                            <button type="button" fdprocessedid="k9va2o" className='block mt-[10px] lg:mx-0 mx-auto bg-[#333] border-solid border-2 border-[#333] rounded text-white text-base font-semibold w-44 h-11 uppercase transition-all hover:bg-[#2980b9] hover:border-[#2980b9] hover:text-white'>learn more</button>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            {/* <ApexChart
                                title="Blogs"
                                subtitle=""
                                seriesData={[{ name: 'Blogs', data: [0, 300, 330, 230, 350, 350, 250, 250] }]}
                                categories={['10', '15', '20', '25', '30', '35', '40', '45']}
                                yAxisMin={0}
                                yAxisMax={400}

                            /> */}
                        </div>

                    </div>
                    <div className="border-2 border-solid border-[#f0f2f3] rounded-md w-full py-5 px-6 my-7">
                        {/* <div className='border-b-[3px] border-solid border-[#f0f2f3] pb-5 flex items-center justify-between xs:flex-row flex-col'>
                            <h3 className='2xl:text-3xl xl:text-2xl text-xl text-[#333] font-bold'>Action Lorem Ipusm</h3>
                            <div>
                                <select className='border border-solid border-[#ddd] p-[5px] text-lg font-semibold outline-0'>
                                    <option>Last Year 2024</option>
                                    <option>Last Year 2023</option>
                                    <option>Last Year 2022</option>
                                    <option>Last Year 2021</option>
                                </select>
                            </div>
                        </div> */}
                        {/* <ApexChart
                            title="Blogs and Articles"
                            subtitle="68"
                            seriesData={[
                                { name: 'Blogs', data: [10, 8, 4, 3, 2, 4, 20, 10, 9, 12, 14, 28] },
                                { name: 'Articles', data: [18, 12, 7, 8, 3, 18, 12, 10, 14, 12, 19, 12] }
                            ]}
                            categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                            yAxisMin={0}
                            yAxisMax={30}
                            showHeading="false"
                        /> */}
                    </div>
                </div>
            </section>
        </>

    )
}

export default Statistics
