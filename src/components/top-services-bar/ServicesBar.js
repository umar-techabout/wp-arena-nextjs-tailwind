"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WordpressBlog_icon from "../../images/wordpress-blog.png";
import ServicesBarIcon from "../../images/services-bar-icon.png";

const ServicesBar = () => {
  const MyServicesData = [
    {
      id: 1,
      ServicesIcon: WordpressBlog_icon,
      ServicesTitle: "WordPress Blog",
      ServicesUrl: "/posts",
    },
    {
      id: 2,
      ServicesIcon: WordpressBlog_icon,
      ServicesTitle: "WordPress Hosting",
      ServicesUrl: "/category/hosting",
    },
    {
      id: 3,
      ServicesIcon: WordpressBlog_icon,
      ServicesTitle: "Pro Services",
      ServicesUrl: "/services",
    },
    {
      id: 4,
      ServicesIcon: WordpressBlog_icon,
      ServicesTitle: "Wp Tutorials",
      ServicesUrl: "/category/tutorials",
    },
    {
      id: 5,
      ServicesIcon: WordpressBlog_icon,
      ServicesTitle: "Our Themes",
      ServicesUrl: "/category/themes",
    },
    {
      id: 6,
      ServicesIcon: WordpressBlog_icon,
      ServicesTitle: "Speed Optimization",
      ServicesUrl: "",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="relative">
      <div className={`fixed top-16 left-1 z-50 lg:hidden bg-[#2980b9] rounded-full p-2.5 hover:transition-all ${isMenuOpen ? "translate-x-[300px] transition-all rotate-180" : ""}`}>
          <Image
          src={ServicesBarIcon}
          alt="nothing"
          width={38}
          height={38}
          onClick={toggleMenu} className="text-white focus:outline-none"
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className=" flex flex-col gap-6 py-4 h-full text-white px-4">
            {MyServicesData.map((elem, index) => (
              <Link
                href={elem.ServicesUrl}
                key={index}
                className=" bg-[#2980b9] hover:bg-gray-700 hover:rounded-md transition duration-300 w-full rounded-md"
              >
                <div className="flex items-center justify-start px-4 py-2 border-b border-gray-300">
                  <div className="pr-6">
                    <Image
                      src={elem.ServicesIcon}
                      alt={elem.ServicesTitle}
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="pl-4 border-l border-white">
                    <h3 className="font-normal text-sm uppercase">
                      {elem.ServicesTitle}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop menu (visible on larger screens) */}
        <div className="hidden lg:flex bg-[#2980B9] flex-wrap justify-center gap-6 w-full h-auto items-center text-white py-4">
          {MyServicesData.map((elem, index) => (
            <Link
              href={elem.ServicesUrl}
              key={index}
              className="hover:bg-gray-700 hover:rounded-md transition duration-300"
            >
              <div className="flex items-center justify-start border border-gray-400 hover:border-none rounded-md w-full sm:w-[220px] md:w-[250px] lg:w-[271px] h-[42px] px-2 py-1 lg:px-4 lg:py-1.5">
                <div className="pr-4 ">
                  <Image
                    src={elem.ServicesIcon}
                    alt={elem.ServicesTitle}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="pl-4 border-l border-white flex-1 text-center">
                  <h3 className="font-bold text-sm sm:text-xs md:text-base lg:text-sm uppercase">
                    {elem.ServicesTitle}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesBar;