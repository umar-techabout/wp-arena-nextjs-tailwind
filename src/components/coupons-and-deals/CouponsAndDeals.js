"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { API_BASE_URL } from "../../apiConfig";

const CouponsAndDeals = ({ showDis, butonLabel = "true" }) => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/deal`);
        setDeals(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching posts");
        console.error(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="wpa-loader-main">
        <div className="wpa-loader"></div>
      </div>
    );
  }

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto">
          {showDis && (
            <div className="text-center px-20">
              <h2 className="text-2xl font-semibold md:text-5xl mb-4">
                WPArena Coupons and Deals
              </h2>
              <p className="text-lg mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-8">
            {deals.map((elem) => (
              <Link
                href={"/"}
                className="flex items-center bg-white shadow-lg rounded-lg p-4 w-full sm:w-1/2 lg:w-1/3 hover:bg-gray-800 hover:text-white transition-all duration-300"
                key={elem.id}
              >
                <div className="w-1/3 flex justify-center items-center">
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                    <Image
                      className="object-cover w-full h-full"
                      width={100}
                      height={100}
                      src={elem.featured_image}
                      alt={elem.title.rendered}
                    />
                  </div>
                </div>
                <div className="w-2/3 pl-6 border-l-2 border-gray-300">
                  <h4 className="text-xl font-semibold">{elem.title}</h4>
                  <h5 className="text-blue-500 text-lg">
                    {elem.acf_fields["coupons_discount"]} %OFF
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {deals.length > 10 && (
          <div className="text-center mt-8">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              {butonLabel === "true" ? "VIEW ALL" : "LOAD MORE"}
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default CouponsAndDeals;
