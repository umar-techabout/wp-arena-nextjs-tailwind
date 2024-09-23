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
      <div className="flex items-center justify-between w-full h-16 px-6 md:px-10 lg:px-20">
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              className="w-[120px] h-[30px] md:w-[195px] md:h-[45px]"
              src={HeaderLogo}
              alt="Header Logo"
            />
          </Link>
          <ul className="hidden md:flex list-none items-center gap-6 lg:gap-8 ml-8 lg:ml-12">
          <li><Link href="/category/news" passHref>News</Link></li>
          <li><Link href="/category/tutorials" passHref>Tutorials</Link></li>
          <li><Link href="/category/reviews" passHref>Reviews</Link></li>
          <li><Link href="/category/comparisons" passHref>Comparison</Link></li>
          <li><Link href="/category/resources" passHref>Resources</Link></li>
          <li><Link href="/category/collections" passHref>Collection</Link></li>
        </ul>
        </div>

        {/* Search and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className=" sm:flex-row items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="w-[150px] sm:w-[200px] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="w-[16px] h-[15px]">
              <Image src={SearchIcon} alt="Search Icon" />
            </button>
          </form>
          <div className="md:hidden">
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
      <ul className={`md:hidden flex flex-col items-left px-4 py-8 bg-white  ${isHeaderOpen ? "block" : "hidden"}`}>
        <li><Link href="/category/news" passHref>News</Link></li>
        <li><Link href="/category/tutorials" passHref>Tutorials</Link></li>
        <li><Link href="/category/reviews" passHref>Reviews</Link></li>
        <li><Link href="/category/comparisons" passHref>Comparison</Link></li>
        <li><Link href="/category/resources" passHref>Resources</Link></li>
        <li><Link href="/category/collections" passHref>Collection</Link></li>
      </ul>
    </header>
  );
};

export default Header;
