// import React from 'react';
// // import "./TimelineFilterTabs.css"; // Assuming you don't need an external CSS file.

// const TimelineFilterTabs = ({ selectedTab, onTabChange }) => {
//   return (
//     <section className='px-4 md:px-20'>
//       <div className='flex  justify-left gap-8 rounded-sm'>
//         <button
//           type='button'
//           className={`py-2 px-4 border-2 rounded-sm font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
//             selectedTab === 'REVIEWS' ? 'bg-gray-800 text-white' : 'bg-white text-black'
//           }`}
//           onClick={() => onTabChange('REVIEWS')}
//         >
//           REVIEWS
//         </button>
//         <button
//           type='button'
//           className={`py-2 px-10 border-2 rounded-sm font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
//             selectedTab === 'NEWS' ? 'bg-gray-800 text-white' : 'bg-white text-black'
//           }`}
//           onClick={() => onTabChange('NEWS')}
//         >
//           NEWS
//         </button>
//         <button
//           type='button'
//           className={`py-2 px-4 rounded-sm border-2  font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
//             selectedTab === 'LATEST' ? 'bg-gray-800 text-white' : 'bg-white text-black'
//           }`}
//           onClick={() => onTabChange('LATEST')}
//         >
//           LATEST
//         </button>
//         <button
//           type='button'
//           className={`py-2 px-4 rounded-sm border-2 font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
//             selectedTab === 'Editorial' ? 'bg-gray-800 text-white' : 'bg-white text-black'
//           }`}
//           onClick={() => onTabChange('Editorial')}
//         >
//           EDITORIAL
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TimelineFilterTabs;

// import React from 'react';

// const TimelineFilterTabs = ({ selectedTab, onTabChange }) => {
//   return (
//     <section className='px-4 md:px-20'>
//       <div className='flex flex-wrap justify-left gap-4 sm:gap-6 lg:gap-8'>
//         <button
//           type='button'
//           className={`py-2 px-4 md:px-6 border-2 rounded-sm font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
//             selectedTab === 'REVIEWS' ? 'bg-gray-800 text-white' : 'bg-white text-black'
//           }`}
//           onClick={() => onTabChange('REVIEWS')}
//         >
//           REVIEWS
//         </button>
//         <button
//           type='button'
//           className={`py-2 px-6 md:px-10 border-2 rounded-sm font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
//             selectedTab === 'NEWS' ? 'bg-gray-800 text-white' : 'bg-white text-black'
//           }`}
//           onClick={() => onTabChange('NEWS')}
//         >
//           NEWS
//         </button>
//         <button
//           type='button'
//           className={`py-2 px-4 md:px-6 rounded-sm border-2 font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
//             selectedTab === 'LATEST' ? 'bg-gray-800 text-white' : 'bg-white text-black'
//           }`}
//           onClick={() => onTabChange('LATEST')}
//         >
//           LATEST
//         </button>
//         <button
//           type='button'
//           className={`py-2 px-4 md:px-6 rounded-sm border-2 font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
//             selectedTab === 'Editorial' ? 'bg-gray-800 text-white' : 'bg-white text-black'
//           }`}
//           onClick={() => onTabChange('Editorial')}
//         >
//           EDITORIAL
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TimelineFilterTabs;
import React from 'react';

const TimelineFilterTabs = ({ selectedTab, onTabChange }) => {
  return (
    <section className='px-4 pt-10 md:px-20'>
      <div className='flex justify-left gap-6 lg:gap-4 overflow-x-auto'>
        <button
          type='button'
          className={` w-[170px] h-[45px] whitespace-nowrap py-2 px-3 md:px-6 border-2 rounded-sm font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
            selectedTab === 'REVIEWS' ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
          onClick={() => onTabChange('REVIEWS')}
        >
          REVIEWS
        </button>
        <button
          type='button'
          className={`w-[170px] h-[45px] whitespace-nowrap py-2 px-3 md:px-8 border-2 rounded-sm font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
            selectedTab === 'NEWS' ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
          onClick={() => onTabChange('NEWS')}
        >
          NEWS
        </button>
        <button
          type='button'
          className={`w-[170px] h-[45px] whitespace-nowrap py-2 px-3 md:px-6 border-2 rounded-sm font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
            selectedTab === 'LATEST' ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
          onClick={() => onTabChange('LATEST')}
        >
          LATEST
        </button>
        <button
          type='button'
          className={`w-[170px] h-[45px] whitespace-nowrap py-2 px-3 md:px-6 border-2 rounded-sm font-semibold border-gray-600 hover:bg-[#2980B9] hover:text-white ${
            selectedTab === 'Editorial' ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
          onClick={() => onTabChange('Editorial')}
        >
          EDITORIAL
        </button>
      </div>
    </section>
  );
};

export default TimelineFilterTabs;
