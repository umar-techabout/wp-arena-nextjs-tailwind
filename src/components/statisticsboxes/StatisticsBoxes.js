import React from 'react';
import Image from 'next/image';
import happyCustomerIcon from "../../images/happy-customer.png"
import YearsOfExperiance from "../../images/wpa-years-experiance.png"
import WpaarenaBlogs from "../../images/wpa-arena-blogs.png"
import Wpaourthemes from "../../images/wpa-our-themes.png"
import WpaProjectCompleted from "../../images/wpa-project-completed.png"
// import "./StatisticsBoxes.css"
const StatisticsBoxes = () => {
    const StatisticsData = [
        {
            ExperienceIcon: YearsOfExperiance,
            years: "20+",
            title: "Years of Exprience"
        },

        {
            ExperienceIcon: happyCustomerIcon,
            years: "7K+",
            title: "Happy Customers"
        },

        {
            ExperienceIcon: WpaarenaBlogs,
            years: "10K+",
            title: "WPArena-Blogs"
        },

        {
            ExperienceIcon: WpaProjectCompleted,
            years: "7K+",
            title: "Projects Completed"
        },

        {
            ExperienceIcon: Wpaourthemes,
            years: "2K+",
            title: "Our Themes"
        },

    ]
    return (
        <>
            <section>
                <div className='grid xl:grid-cols-5 xs:grid-cols-2 grid-cols-1 gap-8 w-full md:px-20 xs:px-10 px-5 my-8'>

                    {StatisticsData.map((elem, index) => (
                        <div className='bg-[#EBF1FF] rounded-[10px]' key={elem.id || index} >
                            <div className='flex items-center justify-center flex-col gap-[10px] p-[30px] text-center'>
                                <div className='bg-[#2980B9] w-[110px] h-[110px] rounded-full flex items-center justify-center'>
                                    <Image src={elem.ExperienceIcon} alt={elem.title} />
                                </div>
                                <div className='text-center'>
                                    <h2 className='2xl:text-5xl xl:text-[32px] xs:text-[44px] text-2xl font-bold'>{elem.years}</h2>
                                    <h4 className='2xl:text-2xl text-base font-semibold'>{elem.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default StatisticsBoxes
