'use client'
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY } from '../../../queries'; // Adjust the path as needed
import HeroBanner from '../hero-banner/HeroBanner.js';
import Timeline from '../timeline/Timeline.js';
import TimelineFilterTabs from '../timeline-filter-tabs/TimelineFilterTabs';
import QuizBanner from '../quiz-banner/QuizBanner';
import ProServices from '../pro-services/ProServices';
import FeaturedProducts from '../Featured-Products/FeaturedProducts';
import CouponsAndDeals from '../coupons-and-deals/CouponsAndDeals';
import Listing from '../listing/Listing';
import '../../../public/Media.css'

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('LATEST'); // Default tab

  const categoryIds = {
    REVIEWS: 9,
    NEWS: 990,
    LATEST: 0,
    Editorial: 7,
  };

  const categoryId = categoryIds[selectedTab] || categoryIds.LATEST;

  const { loading, error, data } = useQuery(
    categoryId === 0 ? GET_ALL_POSTS : GET_POSTS_BY_CATEGORY,
    {
      variables: categoryId === 0 ? {} : { categoryId },
    }
  );

  const posts = data?.posts?.nodes || [];

  // Handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      {/* Always visible components */}
      <HeroBanner />
      <TimelineFilterTabs selectedTab={selectedTab} onTabChange={handleTabChange} />

      {/* Timeline loading state specific to posts */}
      {loading ? (
        <div className="p-20 space-y-6">
          {/* Simulating multiple posts */}
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="animate-pulse flex space-x-12">
              {/* Image loader */}
              <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
              {/* Textual content loader */}
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Timeline posts={posts} />
      )}

      {/* Always visible components */}
      <QuizBanner />
      <Listing showgetstartednowbutton={false} />
      <FeaturedProducts />
      <CouponsAndDeals showDis={true} />
    </>
  );
}

export default Home;
