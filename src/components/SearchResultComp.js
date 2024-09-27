// import React from 'react';
// // import { Link } from 'react-router-dom';
// import Link from 'next/link';
// // import '../App.css'
// // import SearchIcon from "../assets/images/search-icon.png";
// import './timeline/Timeline.css'
// // import defaultimg from '../../src/assets/images/defaultimage.jpg'
// import defaultimg from '../images/defaultimage.jpg'
// import share_post_icon from '../images/share-icon.png'
// import Image from 'next/image';

// const SearchResults = ({ searchResults, loading, error }) => {
//     if (loading) return <div className="wpa-loader-main"><div className="wpa-loader"></div></div>;
//     if (error) return <p>{error}</p>;

//     return (
//         <section id="conference-timeline" className="wpa-wrapper-sides-spacing">
//         <div className="">
//           <div>
//             <div className="timeline-start"></div>
//             <div className="conference-center-line"></div>
//             <div className="conference-timeline-content">
//               <div className="timeline-article">
//                 {searchResults.map((result) => (
//                   <div className="relative" key={result.id}>
//                     <div className="content-right-container">
//                       <div className="content-right wpa-flex wpa-gap-40">
//                         <div>
//                           <div className="wpa-blog-list-thumbnail">
//                           <Image
//                           objectFit="cover"
//                           height={300}
//                           width={300}
//                               src={result.featured_image || defaultimg}
//                               alt={result.title.rendered}
//                               onError={(e) => e.target.src = defaultimg}
//                             />
//                           </div>
//                         </div>
//                         <div className="wpa-blogs-details wpa-flex wpa-h3-font-size">
//                           <div className="wpa-blog-list-title">
//                             <h3>
//                               <Link href={`/${result.slug}`}>
//                                 {result.title.rendered}
//                               </Link>
//                             </h3>
//                           </div>
//                           <div className="wpa-blog-list-posted-by wpa-content-top-bottom-spacing wpa-paragraph-text wpa-font-weight-600">
//                             <span>
//                               Recent updated By{" "}
//                               <Link href="">
//                                 {result._embedded?.["author"]?.[0]?.name ||
//                                   "Unknown Author"}
//                                 <i className="wpa-share-icon">
//                                   <Image
//                                     src={share_post_icon}
//                                     alt="share blog post icon"
//                                   />
//                                 </i>
//                               </Link>
//                             </span>
//                           </div>
//                           <div className="wpa-blog-list-description wpa-paragraph-text line-limit-2">
//                             <p
//                               dangerouslySetInnerHTML={{
//                                 __html: result.excerpt.rendered,
//                               }}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="meta-date">
//                       <div className="wpa-flex wpa-content-center wpa-paragraph-text wpa-font-weight-700">
//                         <span className="month">
//                           {new Date(result.date).toLocaleString("default", {
//                             month: "long",
//                           })}
//                         </span>
//                         <span className="date">
//                           {new Date(result.date).getDate()}/
//                           {new Date(result.date).getFullYear()}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="timeline-end"></div>
//           </div>

//           {/* {visibleBlogs < posts.length && (
//             <div className="wp-view-more-btn btn-primary-hover">
//               <button type="button" onClick={loadMoreBlogs}>
//                 LOAD MORE
//               </button>
//             </div>
//           )} */}
//         </div>
//       </section>
//     );
// };

// export default SearchResults;

"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import defaultimg from "../images/defaultimage.jpg";
import share_post_icon from "../images/share-icon.png";

const SearchResultsComp = ({ allData, initialQuery, error: initialError }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const [error] = useState(initialError);

  useEffect(() => {
    const currentQuery = searchParams.get('query') || '';
    setQuery(currentQuery);
  }, [searchParams]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowercaseQuery = query.toLowerCase();
    return allData.filter(item => 
      item.title.rendered.toLowerCase().includes(lowercaseQuery) ||
      item.content.rendered.toLowerCase().includes(lowercaseQuery)
    );
  }, [allData, query]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="relative py-8 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <h2 className="text-2xl font-semibold mb-6">
        Search Results for "{query}"
      </h2>
      {searchResults.length === 0 ? (
        <p>No results found for "{query}"</p>
      ) : (
        <div className="relative">
          <div className="absolute left-0 sm:left-[46px] w-3 sm:w-4 h-3 sm:h-4 bg-gray-800 rounded-full hidden lg:block "></div>
          <div className="absolute left-1.5 sm:left-[52px] w-0.5 sm:w-1 h-full bg-gray-800 -z-10 hidden lg:block "></div>
          <div className="space-y-4 w-full">
            {searchResults.map((result) => (
              <div key={result.id} className="relative pl-8 lg:pl-36">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 p-4 sm:p-6">
                    <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[400px] h-[200px] sm:h-[250px] relative">
                      <Image
                        src={result.featured_image || defaultimg}
                        alt={result.title.rendered}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg border-3 border-gray-200"
                        onError={(e) => (e.target.src = defaultimg)}
                      />
                    </div>
                    <div className="flex flex-col space-y-2 sm:space-y-4 flex-1">
                      <h3 className="text-2xl font-semibold">
                        <Link href={`/${result.slug}`} className="text-gray-800 hover:text-[#2980b9]">
                          {result.title.rendered}
                        </Link>
                      </h3>
                      <p className="text-lg font-semibold">
                        Recent updated by
                        <Link href="" className="text-[#2980b9] ml-2 text-lg">
                          {result._embedded?.author?.[0]?.name || "Unknown Author"}
                        </Link>
                        <i className="ml-2 inline-block">
                          <Image
                            src={share_post_icon}
                            alt="share blog post icon"
                            width={20}
                            height={20}
                            className="inline"
                          />
                        </i>
                      </p>
                      <div
                        className="text-lg text-black line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: result.excerpt.rendered }}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute left-[-12px] sm:left-0 top-0 sm:top-10 w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 sm:border-5 border-white bg-gray-800 text-white flex flex-col items-center justify-center hidden lg:flex">
                  <span className="text-sm sm:text-lg font-bold">
                    {new Date(result.date).toLocaleString("default", { month: "short" })}
                  </span>
                  <span className="text-sm sm:text-lg font-bold">
                    {new Date(result.date).getDate()}/{new Date(result.date).getFullYear().toString().slice(-2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 sm:left-[46px] w-3 sm:w-4 h-3 sm:h-4 bg-gray-800 rounded-full"></div>
        </div>
      )}
    </section>
  );
};

export default SearchResultsComp;