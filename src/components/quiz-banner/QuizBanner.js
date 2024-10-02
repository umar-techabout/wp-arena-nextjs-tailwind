import Image from "next/image";
import React from "react";
import QuizBannerImg from "../../images/quiz-banner.png";
import arrow from "../../images/arrow.png";
import overlay from '../../images/quiz-overlay.png'
const QuizBanner = () => {
  return (
    <>
<section className="px-4 lg:px-20">
  <div className="bg-[#ebf1ff] flex flex-col lg:flex-row  justify-center gap-12 right-bg-custom-img relative">
    <div className="max-w-screen-xs">
      <Image 
        src={QuizBannerImg} 
        width={500} 
        alt="Quiz Banner: Which WordPress Hosting is Best for You?" 
        className="w-full h-full object-cover"
      />
    </div>
    <div 
    
    className="bg-no-repeat w-full bg-contain bg-right mt-3 py-5">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
        Which WordPress Hosting is Best for You?
      </h1>
      <p className="text-lg font-normal mt-4">
        Unsure which WordPress hosting company to choose? Simply answer a few questions, and our recommendation engine will identify the <br/> best option for you.
      </p>

      <div className="mt-6 space-y-4 flex flex-col">
        <div className="flex items-center gap-4">
          <Image 
            src={arrow} 
            alt="Arrow icon" 
            className="w-8 h-4 flex-shrink-0"
          />
          <p className="text-lg md:text-base font-medium ">
            It is a long established fact that a reader will be distracted by the readable content of a page.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <Image 
            src={arrow} 
            alt="Arrow icon" 
            className="w-8 h-4 flex-shrink-0"
          />
          <p className="text-lg md:text-base font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-center lg:justify-start">
        {/* <button className=" w-[170px] h-[45px] uppercase py-2 px-4 bg-gray-800 hover:bg-[#2980b9] font-semibold rounded-sm text-white transition duration-300">
          Take the quiz
        </button> */}
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default QuizBanner;