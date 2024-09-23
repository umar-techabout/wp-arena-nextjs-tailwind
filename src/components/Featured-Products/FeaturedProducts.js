import React from "react";
import Image from "next/image";
import WordPressIcon from "../../images/wordpress-icon.png";
import "./FeaturedProducts.css";
import comingsoon from "../../images/comingsoon.jpg";
import Link from "next/link";
const FeaturedProducts = () => {
  const FeaturedProductsData = [
    {
      Id: 1,
      ProServiceIcon: WordPressIcon,
      ProServiceTitle: "WordPress Product 1",
      ProServiceDescription:
        "Lorem Ipsum is simply and dummy text of the Has been the text ever since the 1500s",
    },

    {
      Id: 2,
      ProServiceIcon: WordPressIcon,
      ProServiceTitle: "WordPress Product 1",
      ProServiceDescription:
        "Lorem Ipsum is simply and dummy text of the Has been the text ever since the 1500s",
    },

    {
      Id: 3,
      ProServiceIcon: WordPressIcon,
      ProServiceTitle: "WordPress Product 1",
      ProServiceDescription:
        "Lorem Ipsum is simply and dummy text of the Has been the text ever since the 1500s",
    },

    {
      Id: 4,
      ProServiceIcon: WordPressIcon,
      ProServiceTitle: "WordPress Product 1",
      ProServiceDescription:
        "Lorem Ipsum is simply and dummy text of the Has been the text ever since the 1500s",
    },

    {
      Id: 5,
      ProServiceIcon: WordPressIcon,
      ProServiceTitle: "WordPress Product 1",
      ProServiceDescription:
        "Lorem Ipsum is simply and dummy text of the Has been the text ever since the 1500s",
    },

    {
      Id: 6,
      ProServiceIcon: WordPressIcon,
      ProServiceTitle: "WordPress Product 1",
      ProServiceDescription:
        "Lorem Ipsum is simply and dummy text of the Has been the text ever since the 1500s",
    },

    {
      Id: 7,
      ProServiceIcon: WordPressIcon,
      ProServiceTitle: "WordPress Product 1",
      ProServiceDescription:
        "Lorem Ipsum is simply and dummy text of the Has been the text ever since the 1500s",
    },

    {
      Id: 8,
      ProServiceIcon: WordPressIcon,
      ProServiceTitle: "WordPress Product 1",
      ProServiceDescription:
        "Lorem Ipsum is simply and dummy text of the Has been the text ever since the 1500s",
    },
  ];
  return (
    <>
      <section>
        <div className="px-4 md:px-10 lg:px-20 text-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              WPArena Featured Products
            </h2>
            <p className="mx-auto my-2 max-w-4xl text-sm md:text-base lg:text-lg text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
          <div className="mt-4">
            <Image
              src={comingsoon}
              width={1200}
              height={600}
              alt="comingsoon"
              className="mx-auto w-full h-auto"
            />
          </div>
        </div>
        <div className="">
          {/* {FeaturedProductsData.map((elem) => (
                            <Link to={"/"} className='wpa-featured-products-box'>
                                <div className='wpa-featured-products-box-content'>
                                    <div className='wpa-featured-products-box-content-icon wpa-text-center'>
                                        <img src={elem.ProServiceIcon} alt='Website Development' />
                                    </div>
                                    <div className='wpa-featured-products-box-content-title wpa-text-center wpa-h3-font-size'>
                                        <h3>{elem.ProServiceTitle}</h3>
                                    </div>
                                    <div className='wpa-featured-products-box-content-description wpa-text-center wpa-paragraph-text'>
                                        <p>{elem.ProServiceDescription}</p>
                                    </div>
                                </div>
                            </Link>
                        ))} */}
          {/* <Image src={comingsoon} width={2000} alt="comingsoon" /> */}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
