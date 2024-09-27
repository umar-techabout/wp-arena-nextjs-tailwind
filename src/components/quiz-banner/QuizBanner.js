import Image from "next/image";
import React from "react";
import QuizBannerImg from "../../images/quiz-banner.png";
// import "./QuizBanner.css";
import arrow from "../../images/arrow.png";
import overlay from '../../images/quiz-overlay.png'
const QuizBanner = () => {
  return (
    <>
<section className="py-4 px-4 lg:px-12">
  <div className="  py-12 flex flex-col lg:flex-row items-center justify-center gap-6">
    <div className="max-w-sm">
      <Image 
        src={QuizBannerImg} 
        width={500} 
        alt="Quiz Banner: Which WordPress Hosting is Best for You?" 
        className="w-full"
      />
    </div>
    <div 
    style={{ backgroundImage: `url(${overlay.src})` }}
    className="bg-no-repeat w-full bg-contain bg-right">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
        Which WordPress Hosting is Best for You?
      </h1>
      <p className="text-lg mt-4">
        Unsure which WordPress hosting company to choose? Simply answer a few questions, and our recommendation engine will identify the best option for you.
      </p>

      <div className="mt-6 space-y-4 flex flex-col">
        <div className="flex items-center gap-4">
          <Image 
            src={arrow} 
            alt="Arrow icon" 
            className="w-8 h-4 flex-shrink-0"
          />
          <p className="text-sm md:text-base font-semibold">
            It is a long established fact that a reader will be distracted by the readable content of a page.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <Image 
            src={arrow} 
            alt="Arrow icon" 
            className="w-8 h-4 flex-shrink-0"
          />
          <p className="text-sm md:text-base font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-center lg:justify-start">
        <button className=" w-[170px] h-[45px] uppercase py-2 px-4 bg-gray-800 hover:bg-[#2980b9] font-semibold rounded-sm text-white transition duration-300">
          Take the quiz
        </button>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default QuizBanner;
