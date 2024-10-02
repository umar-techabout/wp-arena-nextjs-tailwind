"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import shareIcon from "@/images/share-icon.png";

const Timeline = ({ posts }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(9);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 5);
  };

  if (!posts || posts.length === 0) {
    return <p className="text-red-500">No posts available.</p>;
  }

  const visiblePosts = posts.slice(0, visibleBlogs);

  return (
    <section className="relative py-4 sm:py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="relative">
        <div className="absolute left-0 sm:left-[46px] w-3 sm:w-4 h-3 sm:h-4 bg-gray-800 rounded-full hidden lg:block "></div>
        <div className="absolute left-1.5 sm:left-[52px] w-0.5 sm:w-1 h-full bg-gray-800 -z-10 hidden lg:block "></div>
        <div className="space-y-4 w-full">
          {visiblePosts.map((post) => (
            <div key={post.id} className="relative pl-8 lg:pl-36">
              <div className="bg-white  border-b-2 border-gray-200 overflow-hidden">
                <div className="flex flex-col xs:flex-col sm:col-row md:flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-4 sm:gap-10 p-4 sm:p-6 pl-4 ">
                  <div className="w-full xs:w-full sm:w-[400] md:w-[400px] lg:w-[450px] h-[250px]  relative">
                    <Image
                      src={
                        post.featuredImage?.node?.sourceUrl ||
                        "/placeholder.jpg"
                      }
                      alt={post.featuredImage?.node?.altText || post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 sm:space-y-4 flex-1">
                    <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl  font-semibold text-gray-700">
                      <Link
                        href={`/${post.slug}`}
                        className="text-gray-800 hover:text-[#2980b9]"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-lg sm:text-sm font-semibold md:text-lg">
                      Recent updated by
                      <Link
                        href=""
                        className="text-[#2980b9] ml-2 text-lg inline-flex items-center"
                      >
                        {post.author?.node?.name || "Unknown Author"}
                        <i className="ml-2">
                          <Image className="bg-[#2980b9] rounded-md px-1 py-1"  width={20} src={shareIcon} alt="share blog post icon" />
                        </i>
                      </Link>
                    </p>
                    <div
                      className="text-lg sm:text-base md:text-lg text-black line-clamp-3 sm:line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-[-12px] sm:left-0 top-0 sm:top-10 w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 sm:border-5 border-white bg-gray-800  text-white flex flex-col items-center justify-center hidden lg:flex">
                <div className="flex flex-col items-center justify-center border-2 w-24  h-24 border-white rounded-full">
                  <span className=" text-sm sm:text-lg font-bold">
                    {new Date(post.date).toLocaleString("default", {
                      month: "short",
                    })}
                  </span>
                  <span className=" text-sm sm:text-lg font-bold">
                    {new Date(post.date).getDate()}/
                    {new Date(post.date).getFullYear().toString().substr(-2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 sm:left-[46px] w-3 sm:w-4 h-3 sm:h-4 bg-gray-800 rounded-full lg:block xs: hidden sm:hidden"></div>
        {visibleBlogs < posts.length && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={loadMoreBlogs}
              className="bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-sm hover:bg-[#2980b9] transition duration-300 text-lg sm:text-base font-semibold w-[170px] h-[45px]"
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
