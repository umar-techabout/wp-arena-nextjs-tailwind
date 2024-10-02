import React from "react";
import Image from "next/image";
// import BreadCrumb from '../breadcrumb/BreadCrumb
import AboutUsImage from "../../images/wpaaboutusteam.png";
import AboutUsExperTeamIcon from "../../images/wpa-expert-team.png";
import AboutUsOurValuesIcon from "../../images/wpa-aboutus-our-values.png";
import AboutUsOurVision from "../../images/wpa-aboutus-vision.png";
import AboutUsOurmissionListIcon1 from "../../images/our-mission-list-icon.png";
import WpaSupportIcon from "../../images/wpa-support.png";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import OurTeam from "@/components/ourteam/OurTeam";
import Testimonial from "@/components/testimonial/Testimonial";
import YoutubeVideo from "@/components/youtubevideo/YoutubeVideo";
import listArrow from "@/images/arrow.png";
const AboutUs = () => {
  return (
    <>
      <BreadCrumb />
      <div className="md:px-20 xs:px-10 px-5">
        <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col">
          <div className="lg:w-4/6 w-full">
            <h2 className="xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold mb-4">
              About WPArena
            </h2>
            <p className="font-normal md:leading-7 leading-6 md:text-base text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia.
            </p>
            <ul
              className="my-4 ms-9 md:font-bold font-medium md:leading-9 leading-7"
              style={{ listStyleImage: `url(${listArrow.src})` }}
            >
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </li>
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece.
              </li>
              <li>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have humour.
              </li>
            </ul>
            <div className="">
              <div className="flex gap-5 items-center mb-5">
                <div className="xs:h-24 h-16 xs:w-24 w-16 bg-gray-800 rounded-full flex items-center justify-center flex-none">
                  <Image
                    height={40}
                    width={40}
                    src={AboutUsExperTeamIcon}
                    alt="Expert Team"
                  />
                </div>
                <div className="">
                  <h3 className="font-semibold text-[#2980b9] xl:text-3xl lg:text-2xl text-xl">
                    Expert Team
                  </h3>
                  <p className="md:leading-7 leading-6 md:text-base text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="xs:h-24 h-16 xs:w-24 w-16 bg-gray-800 rounded-full flex items-center justify-center flex-none">
                  <Image
                    height={40}
                    width={40}
                    src={WpaSupportIcon}
                    alt="Expert Team"
                  />
                </div>
                <div className="">
                  <h3 className="font-semibold text-[#2980b9] xl:text-3xl lg:text-2xl text-xl">
                    24/7 Support
                  </h3>
                  <p className="md:leading-7 leading-6 md:text-base text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-fit w-full lg:block flex justify-center lg:mt-0 mt-8">
            <Image height={653} width={437} src={AboutUsImage} alt="About us" />
          </div>
        </div>
      </div>
      <div className="">
        <YoutubeVideo />
      </div>
      <div className="md:px-20 xs:px-10 px-5">
        <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col-reverse">
          <div className="lg:w-2/6 w-full flex justify-center">
            <div className="border-8 border-solid border-[#ebf1ff] rounded-full h-80 w-80 p-8">
              <Image
                className="flex items-center justify-center object-contain mx-auto h-full"
                height={100}
                width={230}
                src={AboutUsOurValuesIcon}
                alt="About us"
              />
            </div>
          </div>
          <div className="lg:w-4/6 w-full">
            <h2 className="xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold my-4">
              Our Values
            </h2>
            <p className="font-medium md:leading-7 leading-6 md:text-base text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia.
            </p>
            <ul
              className="my-4 ms-9 md:font-bold font-medium md:leading-9 leading-7"
              style={{ listStyleImage: `url(${listArrow.src})` }}
            >
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </li>
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece.
              </li>
              <li>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have humour.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:px-20 xs:px-10 px-5">
        <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col">
          <div className="lg:w-4/6 w-full">
            <h2 className="xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold my-4">
              Our Vision
            </h2>
            <p className="font-medium md:leading-7 leading-6 md:text-base text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia.
            </p>
            <ul
              className="my-4 ms-9 md:font-bold font-medium md:leading-9 leading-7"
              style={{ listStyleImage: `url(${listArrow.src})` }}
            >
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece.
              </li>
              <li>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have humour.
              </li>
            </ul>
          </div>
          <div className="lg:w-2/6 w-full flex justify-center">
            <div className="border-8 border-solid border-[#ebf1ff] rounded-full h-80 w-80 p-8">
              <Image
                className="flex items-center justify-center object-contain mx-auto h-full"
                height={100}
                width={230}
                src={AboutUsOurVision}
                alt="About us"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-20 xs:px-10 px-5">
        <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col-reverse">
          <div className="lg:w-2/6 w-full flex justify-center">
            <div className="border-8 border-solid border-[#ebf1ff] rounded-full h-80 w-80 p-8">
              <Image
                className="flex items-center justify-center object-contain mx-auto h-[100%]"
                height={100}
                width={230}
                src={AboutUsOurVision}
                alt="About us"
              />
            </div>
          </div>
          <div className="lg:w-4/6 w-full">
            <h2 className="xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold my-4">
              Our Mission
            </h2>
            <p className="font-medium md:leading-7 leading-6 md:text-base text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia.
            </p>
            <div className="my-5">
              <div className="flex gap-5 items-center mb-5">
                <div className="h-16 w-16 border-2 border-solid border-[#2980b9] rounded-full flex items-center justify-center flex-none">
                  <Image
                    height={34}
                    width={34}
                    src={AboutUsOurmissionListIcon1}
                    alt="Expert Team"
                  />
                </div>
                <div className="">
                  <p className="font-medium md:leading-7 leading-6 md:text-base text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center mb-5">
                <div className="h-16 w-16 border-2 border-solid border-[#2980b9] rounded-full flex items-center justify-center flex-none">
                  <Image
                    height={34}
                    width={34}
                    src={AboutUsOurmissionListIcon1}
                    alt="Expert Team"
                  />
                </div>
                <div className=" ">
                  <p className="font-medium md:leading-7 leading-6 md:text-base text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center mb-5">
                <div className="h-16 w-16 border-2 border-solid border-[#2980b9] rounded-full flex items-center justify-center flex-none">
                  <Image
                    height={34}
                    width={34}
                    src={AboutUsOurmissionListIcon1}
                    alt="24/7 support"
                  />
                </div>
                <div className="">
                  <p className="font-medium md:leading-7 leading-6 md:text-base text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>
                </div>
              </div>
            </div>
            <ul
              className="my-4 ms-9 md:font-bold font-medium md:leading-9 leading-7"
              style={{ listStyleImage: `url(${listArrow.src})` }}
            >
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece.
              </li>
              <li>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have humour.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <OurTeam />
      <Testimonial />
    </>
  );
};

export default AboutUs;
