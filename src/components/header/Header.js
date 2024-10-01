"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderLogo from "../../images/wp-arena-logo.svg";
import SearchIcon from "../../images/search-icon.png";
import WordpressBlog_icon from "../../images/wordpress-blog.png";
import ServicesBarIcon from "../../images/services-bar-icon.png";

const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/searchresult?query=${encodeURIComponent(query)}`);
    }
    setQuery("");
  };

  const handleBurgerClick = () => {
    setIsHeaderOpen(!isHeaderOpen);
    if (isServicesMenuOpen) {
      setIsServicesMenuOpen(false);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchBlur = () => {
    if (!query) {
      setIsSearchExpanded(false);
    }
  };

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
    if (isHeaderOpen) {
      setIsHeaderOpen(false);
    }
  };

  useEffect(() => {
    if (isHeaderOpen || isServicesMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isHeaderOpen, isServicesMenuOpen]);

  return (
    <>
      <header className="w-full bg-white shadow-sm">
        <div className="flex items-center justify-between w-full h-16 px-4 xs:px-6 md:px-10 lg:px-20">
          <div className="flex items-center">
            <Link href="/" passHref>
              <Image
                className="w-[100px] h-[28px] xs:w-[120px] xs:h-[30px] md:w-[195px] md:h-[45px] lg:w-[190px] lg:h-[45px]"
                src={HeaderLogo}
                alt="Header Logo"
              />
            </Link>
            <ul className="hidden lg:flex list-none items-center gap-4 lg:gap-6 ml-4 lg:ml-12 text-base lg:text-lg">
              <li><Link href="/category/news">News</Link></li>
              <li><Link href="/category/tutorials">Tutorials</Link></li>
              <li><Link href="/category/reviews">Reviews</Link></li>
              <li><Link href="/category/comparisons">Comparison</Link></li>
              <li><Link href="/category/resources">Resources</Link></li>
              <li><Link href="/category/collections">Collection</Link></li>
            </ul>
          </div>

          <div className="flex items-center space-x-2 xs:space-x-4">
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search"
                className={`px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out ${
                  isSearchExpanded ? "w-[220px] xs:w-[250px] sm:w-[300px]" : "w-[150px] xs:w-[180px] sm:w-[200px]"
                }`}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <button type="submit" className="w-[16px] h-[15px]">
                <Image src={SearchIcon} alt="Search Icon" />
              </button>
            </form>
            <div className="lg:hidden">
              <input
                type="checkbox"
                id="navcheck"
                className="hidden"
                onChange={handleBurgerClick}
                checked={isHeaderOpen}
              />
              <label htmlFor="navcheck" className="block cursor-pointer">
                <span className="block w-6 h-1 bg-black mb-1"></span>
                <span className="block w-6 h-1 bg-black mb-1"></span>
                <span className="block w-6 h-1 bg-black"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`w-full h-full fixed top-0 left-0 lg:hidden flex flex-col px-6 py-10 bg-white transition-transform duration-300 transform ${
            isHeaderOpen ? "translate-x-0" : "-translate-x-full"
          } z-50`}
          style={{
            clipPath: "polygon(0 0, 50% 0, 100% 100%, 0% 100%)",
          }}
        >
          <li className="mb-6">
            <Link href="/" passHref>
              <Image
                className="w-[120px] h-[30px] md:w-[195px] md:h-[45px]"
                src={HeaderLogo}
                alt="Header Logo"
              />
            </Link>
          </li>
          <li className="mb-6"><Link href="/category/news" className="text-lg text-black hover:text-blue-600">News</Link></li>
          <li className="mb-6"><Link href="/category/tutorials" className="text-lg text-black hover:text-blue-600">Tutorials</Link></li>
          <li className="mb-6"><Link href="/category/reviews" className="text-lg text-black hover:text-blue-600">Reviews</Link></li>
          <li className="mb-6"><Link href="/category/comparisons" className="text-lg text-black hover:text-blue-600">Comparison</Link></li>
          <li className="mb-6"><Link href="/category/resources" className="text-lg text-black hover:text-blue-600">Resources</Link></li>
          <li className="mb-6"><Link href="/category/collections" className="text-lg text-black hover:text-blue-600">Collection</Link></li>
        </ul>
      </header>

      {/* Services Bar */}
      <section className="relative">
        {!isHeaderOpen && (
          <div className={`fixed top-16 left-1 z-50 lg:hidden bg-[#2980b9] rounded-full p-2.5 hover:transition-all ${isServicesMenuOpen ? "translate-x-[300px] transition-all rotate-180" : ""}`}>
            <Image
              src={ServicesBarIcon}
              alt="Services Menu"
              width={38}
              height={38}
              onClick={toggleServicesMenu}
              className="text-white focus:outline-none"
            />
          </div>
        )}

        {/* Mobile Services Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out transform ${
            isServicesMenuOpen && !isHeaderOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className="flex flex-col gap-6 py-4 h-full text-white px-4">
          <Image
                className="w-[120px] h-[40px] md:w-[195px] md:h-[45px]"
                src={HeaderLogo}
                alt="Header Logo"
              />
            {MyServicesData.map((elem, index) => (
              <Link
                href={elem.ServicesUrl}
                key={index}
                className="bg-[#2980b9] hover:bg-gray-700 hover:rounded-md transition duration-300 w-full rounded-md"
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

        {/* Desktop Services Menu */}
        <div className="hidden lg:flex bg-[#2980B9] flex-wrap justify-center gap-6 w-full h-auto items-center text-white py-4">
          {MyServicesData.map((elem, index) => (
            <Link
              href={elem.ServicesUrl}
              key={index}
              className="hover:bg-gray-700 hover:rounded-md transition duration-300"
            >
              <div className="flex items-center justify-start border border-gray-400 hover:border-none rounded-md w-full sm:w-[220px] md:w-[250px] lg:w-[271px] h-[42px] px-2 py-1 lg:px-4 lg:py-1.5">
                <div className="pr-4">
                  <Image
                    src={elem.ServicesIcon}
                    alt={elem.ServicesTitle}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="pl-4 border-l border-white flex-1 text-center">
                  <h3 className="font-semibold text-sm sm:text-xs md:text-base lg:text-md uppercase">
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

export default Header;