"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import WordpressBlog_icon from "../../images/wordpress-blog.png";
import ServicesBarIcon from "../../images/services-bar-icon.png";
// import "./SearchBar.css";

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

  useEffect(() => {
    const burger = document.querySelector(".js-burger");
    const targetElement = document.querySelector(".services-bar-off-canvas");

    const handleBurgerClick = (event) => {
      event.preventDefault();
      if (targetElement) {
        // Toggle the 'nav-open' class on the target element
        targetElement.classList.toggle("nav-open");

        // Toggle the 'overflow-hidden' class on the body based on the presence of 'nav-open'
        if (targetElement.classList.contains("nav-open")) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      }
    };

    if (burger) {
      burger.addEventListener("click", handleBurgerClick);
    }

    return () => {
      if (burger) {
        burger.removeEventListener("click", handleBurgerClick);
      }
      // Remove the 'overflow-hidden' class when the component is unmounted or cleaned up
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <section>
  <div className="bg-[#2980B9] flex flex-wrap justify-center gap-6 w-full h-auto items-center text-white py-4">
    {MyServicesData.map((elem, index) => (
      <Link
        href={elem.ServicesUrl}
        key={index}
        className="hover:bg-gray-700 hover:rounded-md transition duration-300"
      >
        <div className="flex items-center justify-center border border-gray-300 hover:border-gray-800 rounded-md w-full sm:w-[220px] md:w-[250px] lg:w-[271px] h-[42px] px-2 py-1 lg:px-4 lg:py-1.5">
          <div className="pr-4">
            <Image src={elem.ServicesIcon} alt={elem.ServicesTitle} className="w-6 h-6 sm:w-5 sm:h-5 lg:w-8 lg:h-8" />
          </div>
          <div className="pl-4 border-l border-white">
            <h3 className="font-bold text-sm sm:text-xs md:text-base lg:text-sm uppercase">{elem.ServicesTitle}</h3>
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



// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import WordpressBlog_icon from "../../images/wordpress-blog.png";
// import ServicesBarIcon from "../../images/services-bar-icon.png";

// const ServicesBar = () => {
//   const MyServicesData = [
//     {
//       id: 1,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "WordPress Blog",
//       ServicesUrl: "/posts",
//     },
//     {
//       id: 2,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "WordPress Hosting",
//       ServicesUrl: "/category/hosting",
//     },
//     {
//       id: 3,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "Pro Services",
//       ServicesUrl: "/services",
//     },
//     {
//       id: 4,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "Wp Tutorials",
//       ServicesUrl: "/category/tutorials",
//     },
//     {
//       id: 5,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "Our Themes",
//       ServicesUrl: "/category/themes",
//     },
//     {
//       id: 6,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "Speed Optimization",
//       ServicesUrl: "",
//     },
//   ];

//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     document.body.classList.toggle("overflow-hidden", !menuOpen); // Disable scrolling when menu is open
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <div className="sm:hidden flex justify-end p-4">
//         <button
//           className="js-burger focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Open Services Menu"
//         >
//           <Image src={ServicesBarIcon} alt="Menu" className="w-8 h-8" />
//         </button>
//       </div>

//       {/* Off-Canvas Menu */}
//       <section
//         className={`services-bar-off-canvas fixed top-0 left-0 w-full h-full bg-[#2980B9] z-50 transform ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 sm:translate-x-0 sm:relative sm:bg-transparent`}
//       >
//         <div className="flex flex-wrap justify-center gap-6 w-full h-auto items-center text-white py-4">
//           {MyServicesData.map((elem, index) => (
//             <Link
//               href={elem.ServicesUrl}
//               key={index}
//               className="hover:bg-gray-700 hover:rounded-md transition duration-300"
//             >
//               <div className="flex items-center justify-center border border-gray-300 hover:border-gray-800 rounded-md w-full sm:w-[220px] md:w-[250px] lg:w-[271px] h-[42px] px-2 py-1 lg:px-4 lg:py-1.5">
//                 <div className="pr-4">
//                   <Image
//                     src={elem.ServicesIcon}
//                     alt={elem.ServicesTitle}
//                     className="w-6 h-6 sm:w-5 sm:h-5 lg:w-8 lg:h-8"
//                   />
//                 </div>
//                 <div className="pl-4 border-l border-white">
//                   <h3 className="font-bold text-sm sm:text-xs md:text-base lg:text-sm uppercase">
//                     {elem.ServicesTitle}
//                   </h3>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesBar;

// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import WordpressBlog_icon from "../../images/wordpress-blog.png";
// import ServicesBarIcon from "../../images/services-bar-icon.png";
// import CloseIcon from "../../images/close-icon.png"; // Assuming you have a close icon

// const ServicesBar = () => {
//   const MyServicesData = [
//     {
//       id: 1,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "WordPress Blog",
//       ServicesUrl: "/posts",
//     },
//     {
//       id: 2,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "WordPress Hosting",
//       ServicesUrl: "/category/hosting",
//     },
//     {
//       id: 3,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "Pro Services",
//       ServicesUrl: "/services",
//     },
//     {
//       id: 4,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "Wp Tutorials",
//       ServicesUrl: "/category/tutorials",
//     },
//     {
//       id: 5,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "Our Themes",
//       ServicesUrl: "/category/themes",
//     },
//     {
//       id: 6,
//       ServicesIcon: WordpressBlog_icon,
//       ServicesTitle: "Speed Optimization",
//       ServicesUrl: "",
//     },
//   ];

//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     document.body.classList.toggle("overflow-hidden", !menuOpen); // Disable scrolling when menu is open
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//     document.body.classList.remove("overflow-hidden");
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <div className="sm:hidden flex justify-end p-4">
//         <button
//           className="js-burger focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Open Services Menu"
//         >
//           <Image src={ServicesBarIcon} alt="Menu" className="w-8 h-8" />
//         </button>
//       </div>

//       {/* Overlay */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={closeMenu}
//         ></div>
//       )}

//       {/* Off-Canvas Menu */}
//       <section
//         className={`services-bar-off-canvas fixed top-0 left-0 w-80 h-full bg-[#2980B9] z-50 transform ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 sm:translate-x-0 sm:relative sm:bg-transparent`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-end p-4 sm:hidden">
//           <button
//             className="focus:outline-none"
//             onClick={closeMenu}
//             aria-label="Close Menu"
//           >
//             <Image src={CloseIcon} alt="Close" className="w-6 h-6" />
//           </button>
//         </div>

//         <div className=" bg-[#2980B9] flex flex-wrap justify-center gap-6 w-full h-auto items-center text-white py-4">
//           {MyServicesData.map((elem, index) => (
//             <Link
//               href={elem.ServicesUrl}
//               key={index}
//               className="hover:bg-gray-700 hover:rounded-md transition duration-300"
//               onClick={closeMenu} // Close menu when a link is clicked
//             >
//               <div className="flex items-center justify-center border border-gray-300 hover:border-gray-800 rounded-md w-full sm:w-[220px] md:w-[250px] lg:w-[271px] h-[42px] px-2 py-1 lg:px-4 lg:py-1.5">
//                 <div className="pr-4">
//                   <Image
//                     src={elem.ServicesIcon}
//                     alt={elem.ServicesTitle}
//                     className="w-6 h-6 sm:w-5 sm:h-5 lg:w-8 lg:h-8"
//                   />
//                 </div>
//                 <div className="pl-4 border-l border-white">
//                   <h3 className="font-bold text-sm sm:text-xs md:text-base lg:text-sm uppercase">
//                     {elem.ServicesTitle}
//                   </h3>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesBar;

