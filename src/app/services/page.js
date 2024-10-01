"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import "./Services.css";
import { gql } from "@apollo/client";
import WordpressInstallationServices from "@/images/wordpress-installation-services.png";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Listing from "@/components/listing/Listing";

const ServicesData = [
  // Your service data here
  // ...
];

export const GET_SERVICES = gql`
  query GetServices {
    services {
      nodes {
        databaseId
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const Services = () => {
  const router = useRouter(); // Use useRouter instead of useLocation
  const [visibleServices, setVisibleServices] = useState(9);

  const loadMoreServices = () => {
    setVisibleServices((prevVisibleServices) => prevVisibleServices + 5);
  };

  return (
    <>
      <BreadCrumb />
      <div className="xs:px-6 sm:px-6 md:px-12 lg:px-20 py-4">
        <div className="">
          <h1 className="xs:text-xl xs:font-semibold sm:text-3xl sm:font-semibold md:text-4xl md:font-semibold mb-2 ">
            WPArena Services
          </h1>
          <p className="text-lg mb-2">
            With the rising popularity of e-commerce, various platforms have
            been coming up. Recently, WordPress has emerged as one of the most
            powerful and favored platforms. With a huge community devoting time
            and effort to developing a WordPress development platform, it has
            become a preferred choice for e-commerce solutions amongst
            developers.
          </p>
        </div>
        <div className="">
          <h1 className="xs:text-xl xs:font-semibold sm:text-3xl sm:font-semibold md:text-4xl md:font-semibold mb-2">
            Why Choose WPArena?
          </h1>
          <p className="text-lg mb-2">
            WPArena is a WordPress development company that offers a wide range
            of services. Our team of experienced programmers specializes in
            WordPress web development. It can provide services such as HTML to
            WordPress development, PSD to WordPress conversion, WordPress
            plug-in development, theme development, and more. We excel at
            tackling any WordPress challenge and delivering high-quality
            services of any complexity.
          </p>
          <p className="text-lg mb-2">
            As an offshore company, our clients benefit from lower production
            costs and working with industry experts. As your WordPress web
            development company, we guarantee top-quality and timely delivery.
          </p>
          <p className="text-lg mb-2">
            Our transparent policies enable you to monitor the entire
            development process, from idea conceptualization to final product
            delivery. We have equipped our team with the knowledge necessary to
            outperform others in WordPress web development through ongoing
            training in current trends. At WPArena, we prioritize 100% customer
            satisfaction. We offer immediate communication with our team and
            provide regular reports to track the progress of our WordPress
            development services for clients.{" "}
          </p>
          <p className="text-lg mb-2">
            Using WPArena Services not only reduces cost but also allows
            customization. Our team is committed to delivering quality
            solutions. With us, you benefit from a team experienced in WordPress
            web development and a variety of packages to choose from. We offer
            budget-friendly service packages.
          </p>
        </div>
      </div>
      <div className="">
        <Listing
          data={ServicesData.slice(0, visibleServices)}
          showdescriptionServices={false}
          showButton="false"
          ShowGetStartedNowButton="true"
          showlearnmorebutton={false}
          showLoadMore="false"
        />
      </div>
    </>
  );
};

export default Services;
