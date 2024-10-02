import React, { useEffect, useState } from "react";
// import "./Listing.css";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "../../../lib/apollo-client";
import Container from "@/app/Container";

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
            altText
          }
        }
      }
    }
  }
`;

export default function Listing({
  showdescriptionServices = true,
  showgetstartednowbutton = true,
  showlearnmorebutton = false,
}) {
  const [itemsToShow, setItemsToShow] = useState(9);
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const { data } = await client.query({
          query: GET_SERVICES,
        });
        setServices(data.services.nodes || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }

    fetchServices();
  }, []);

  const loadMore = () => {
    setItemsToShow(itemsToShow + 6);
  };

  return (
    <section className="py-6 xs:px-0 sm:px-4 md:px-12 lg-px-20 xl:px-20 2xl:px-20">
      <div className="mx-auto px-5 sm:px-0">
        {showdescriptionServices && (
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-5xl mb-4">
              Pro Services
            </h2>
            <p className="mt-4 text-black text-center px-20  text-lg ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.length > 0 ? (
            services.slice(0, itemsToShow).map((service) => (
              <div
                key={service.databaseId}
                className="border rounded overflow-hidden shadow-sm"
              >
                <div className="h-full pb-4 bg-gray-50 hover:bg-gray-800 group transition-all duration-700">
                  <div className="text-center mb-6">
                    {service.featuredImage && (
                      <Image
                        src={service.featuredImage.node.sourceUrl}
                        alt={
                          service.featuredImage.node.altText || service.title
                        }
                        width={543}
                        height={267}
                        className="w-full "
                      />
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="xl:text-2xl text-xl text-gray-800 group-hover:text-white font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p
                      className="text-gray-800 group-hover:text-white xl:text-base text-sm mb-2 line-clamp-2 px-6"
                      dangerouslySetInnerHTML={{ __html: service.content }}
                    />
                    {showgetstartednowbutton && (
                      <div className="mt-4">
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
                          GET STARTED NOW
                        </button>
                      </div>
                    )}
                    {showlearnmorebutton && (
                      <div className="mt-4">
                        <button className="h-11 w-44 uppercase text-base font-semibold rounded border-2 border-solid border-gray-900 group-hover:border-white bg-gray-800 group-hover:bg-white text-white group-hover:text-gray-800">
                          Learn More
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-red-600">
              No services available
            </p>
          )}
        </div>

        {itemsToShow < services.length && (
          <div className="text-center mt-8">
            <button
              type="button"
              className="h-11 w-44 uppercase text-base rounded-sm font-semibold transition-all bg-gray-800 text-white hover:bg-[#2980b9]"
              onClick={loadMore}
            >
              load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
