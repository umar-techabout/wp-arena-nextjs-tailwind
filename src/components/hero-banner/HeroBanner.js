import Image from "next/image";
import React, { useState } from "react";
import wp_arena_top_banner from "../../images/wp-arena-tp-banner.png";
// import './HeroBanner.css';
import Container from "@/app/Container";

const HeroBanner = () => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");

    if (!email.includes(".com")) {
      setError('Email must include ".com"');
      return;
    }

    // Submit the form data (API_BASE_URL should be defined)
    fetch(`${API_BASE_URL}/forms/26/entries`, {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
        setError("");
      })
      .catch((error) => console.error("Error submitting form:", error));
  };

  return (
    <>

      <section>
        <div className="hero-banner flex flex-col md:flex-row items-center justify-center w-full h-full px-4 md:px-24 py-8">
          <div className="left w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold">
              World's Best WordPress <br /> Tutorials & Resources
            </h1>
            <p className="text-center sm:text-left font-semibold mt-4 lg:mt-8 text-sm md:text-base lg:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has been the industry's standard dummy text ever
              since the 1500s.
            </p>
            <div className="mt-4 lg:mt-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  className="w-full sm:w-1/2 rounded-md h-12 px-4 text-sm"
                  type="email"
                  required
                  placeholder="Email: *"
                />
                <button className="rounded-md bg-gray-800 px-6 py-3 text-white hover:bg-blue-500 font-semibold">
                  START NOW
                </button>
              </form>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>
          <div className="right w-full md:w-1/2">
            <Image
              src={wp_arena_top_banner}
              alt="Hero section"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>


    </>
  );
};

export default HeroBanner;
