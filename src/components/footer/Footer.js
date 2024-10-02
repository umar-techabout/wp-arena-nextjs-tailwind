import Image from "next/image";
import React from "react";
import FooterLogo from "../../images/wpa-footer-logo.png";
import FacebookIcon from "../../images/wpa-facebook.png";
import TwitterIcon from "../../images/wpa-twitter.png";
import LinkedInIcon from "../../images/wpa-linkedin.png";
import InstagramIcon from "../../images/wpa-instagram.png";
import YoutubeIcon from "../../images/wap-youtube.png";
import GitLabIcon from "../../images/wpa-git-lab.png";
import FooterBanner from "../../images/footer-banner.jpg"
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="min-[1740px]:px-24 px-8 py-10 border-b-4 border-[#2980b9]" style={{ backgroundImage: `url(${FooterBanner.src})`, backgroundSize: `cover`}}>
          <div className="text-center py-4">
            <Image className="mx-auto" src={FooterLogo} />
            <p className="text-white lg:px-44 font-semibold py-4 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
          <div className="flex items-center justify-center pb-8">
            <ul className=" flex items-center gap-3 ">
              <li>
                <Link className="rounded-full border-2 border-gray-500 flex items-center justify-center w-11 h-11 transition-all hover:bg-[#2980b9] hover:border-[#2980b9]"
                  href={"https://www.facebook.com/WPArena/"} target="blank"
                >
                  <Image
                    src={FacebookIcon}
                    alt="facebook"
                    width={10}
                    height={18}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-full border-2 border-gray-500 flex items-center justify-center w-11 h-11 transition-all hover:bg-[#2980b9] hover:border-[#2980b9]"
                  href={"https://x.com/WPArena"} target="blank"
                >
                  <Image
                    src={TwitterIcon}
                    alt="twitter"
                    width={16}
                    height={16}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-full border-2 border-gray-500 flex items-center justify-center w-11 h-11 transition-all hover:bg-[#2980b9] hover:border-[#2980b9]" 
                  href={""} target="blank"
                >
                  <Image
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    width={16}
                    height={16}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-full border-2 border-gray-500 flex items-center justify-center w-11 h-11 transition-all hover:bg-[#2980b9] hover:border-[#2980b9]"
                  href={""} target="blank"
                >
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    width={16}
                    height={16}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-full border-2 border-gray-500 flex items-center justify-center w-11 h-11 transition-all hover:bg-[#2980b9] hover:border-[#2980b9]"
                  href={""} target="blank"
                >
                  <Image
                    src={YoutubeIcon}
                    alt="Youtube"
                    width={16}
                    height={16}
                  />
                </Link>
              </li>
              <li>
                <Link 
                  className="rounded-full border-2 border-gray-500 flex items-center justify-center w-11 h-11 transition-all hover:bg-[#2980b9] hover:border-[#2980b9]"
                  href={""} target="blank"
                >
                  <Image
                    src={GitLabIcon}
                    alt="GitLab"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="divide-y divide-zinc-500 px-8">
            <div></div>
            <div>
              <ul className="block columns-2 list-none py-7 items-center justify-center text-white gap-y-4 xs:flex xs:divide-x xs:flex-wrap">
                <li className="min-[1740px]:pr-7 xs:pr-4 xs:pb-0 pb-2">
                  <Link href="/category/news" passHref className="font-normal hover:text-[#2980b9] transition-all text-base">
                    News
                  </Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href={"/directory"} className="font-normal text-base hover:text-[#2980b9] transition-all">Directory</Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href="/category/tutorials" passHref className="font-normal text-base hover:text-[#2980b9] transition-all">
                    Tutorials
                  </Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href={"/dealandcoupons"} className="font-normal text-base hover:text-[#2980b9] transition-all">Deals & Coupons</Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href="/category/plugins" passHref className="font-normal text-base hover:text-[#2980b9] transition-all">
                    Plugins
                  </Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href="/category/themes" passHref className="font-normal text-base hover:text-[#2980b9] transition-all">
                    Themes
                  </Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href={"/advertise"} className="font-normal text-base hover:text-[#2980b9] transition-all">Advertise</Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href={"/toolkit"} className="font-normal text-base hover:text-[#2980b9] transition-all">Toolkit</Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href={"/aboutus"} className="font-normal text-base hover:text-[#2980b9] transition-all">About Us</Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href={"/statistics"} className="font-normal text-base hover:text-[#2980b9] transition-all">Statistics</Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href={""} className="font-normal text-base hover:text-[#2980b9] transition-all">Advanced Search</Link>
                </li>
                <li className="min-[1740px]:px-7 xs:px-4 xs:pb-0 pb-2">
                  <Link href={""} className="font-normal text-base hover:text-[#2980b9] transition-all">Free Blog Setup</Link>
                </li>
                <li className="min-[1740px]:pl-7 xs:pl-4 xs:pb-0 pb-2">
                  <Link href={"/contact"} className="font-normal text-base hover:text-[#2980b9] transition-all">Contact</Link>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="text-center text-white pt-8">
            <p>
              Copyright © 2024 · All Rights Reserved · WPArena is a Project of
              TechAbout LLC.
              <br /> We are not affiliated with Automattic or WordPress.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
