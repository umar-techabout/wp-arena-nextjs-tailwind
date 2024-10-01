"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderLogo from "../../images/wp-arena-logo.svg";
import SearchIcon from "../../images/search-icon.png";

const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/searchresult?query=${encodeURIComponent(query)}`);
    }
    setQuery("");
  };

  const handleBurgerClick = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  const handleSearchFocus = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchBlur = () => {
    if (!query) {
      setIsSearchExpanded(false);
    }
  };

  useEffect(() => {
    if (isHeaderOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isHeaderOpen]);

  return (
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
            <li>
              <Link href="/category/news" passHref>
                News
              </Link>
            </li>
            <li>
              <Link href="/category/tutorials" passHref>
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="/category/reviews" passHref>
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/category/comparisons" passHref>
                Comparison
              </Link>
            </li>
            <li>
              <Link href="/category/resources" passHref>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/category/collections" passHref>
                Collection
              </Link>
            </li>
          </ul>
        </div>

        {/* Search and Mobile Menu Button */}
        <div className="flex items-center space-x-2 xs:space-x-4">
          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center space-x-2"
          >
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
        } z-100`}
        style={{
          clipPath: "polygon(0 0, 50% 0, 100% 100%, 0% 100%)", // Diagonal cut effect
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
        <li className="mb-6">
          <Link
            href="/category/news"
            className="text-lg text-black hover:text-blue-600"
          >
            News
          </Link>
        </li>
        <li className="mb-6">
          <Link
            href="/category/tutorials"
            className="text-lg text-black hover:text-blue-600"
          >
            Tutorials
          </Link>
        </li>
        <li className="mb-6">
          <Link
            href="/category/reviews"
            className="text-lg text-black hover:text-blue-600"
          >
            Reviews
          </Link>
        </li>
        <li className="mb-6">
          <Link
            href="/category/comparisons"
            className="text-lg text-black hover:text-blue-600"
          >
            Comparison
          </Link>
        </li>
        <li className="mb-6">
          <Link
            href="/category/resources"
            className="text-lg text-black hover:text-blue-600"
          >
            Resources
          </Link>
        </li>
        <li className="mb-6">
          <Link
            href="/category/collections"
            className="text-lg text-black hover:text-blue-600"
          >
            Collection
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
