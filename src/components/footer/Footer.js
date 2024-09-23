import Image from "next/image";
import React from "react";
import FooterLogo from "../../images/wpa-footer-logo.png";
import FacebookIcon from "../../images/wpa-facebook.png";
import TwitterIcon from "../../images/wpa-twitter.png";
import LinkedInIcon from "../../images/wpa-linkedin.png";
import InstagramIcon from "../../images/wpa-instagram.png";
import YoutubeIcon from "../../images/wap-youtube.png";
import GitLabIcon from "../../images/wpa-git-lab.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <footer className="bg-gray-700">
          <div className="px-24 py-10  ">
            <div className="text-center py-4">
              <Image className="mx-auto" src={FooterLogo} />
              <p className="text-white py-4 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
            <div className="flex items-center justify-center py-8">
              <ul className=" flex items-center gap-6 ">
                <li className="rounded-full p-4 border border-1">
                  <Link
                    href={"https://www.facebook.com/WPArena/"}
                    target="blank"
                  >
                    <Image
                      className="object-fill"
                      src={FacebookIcon}
                      alt="facebook"
                      width={16}
                      height={16}
                    />
                  </Link>
                </li>
                <li className="rounded-full p-2 border border-1">
                  <Link href={"https://x.com/WPArena"} target="blank">
                    <Image
                      src={TwitterIcon}
                      alt="twitter"
                      width={16}
                      height={16}
                      />
                  </Link>
                </li>
                <li className="rounded-full p-2 border border-1">
                  <Link href={""} target="blank">
                    <Image
                      src={LinkedInIcon}
                      alt="LinkedIn"
                      width={16}
                      height={16}
                      />
                  </Link>
                </li>
                <li className="rounded-full p-2 border border-1">
                  <Link href={""} target="blank">
                    <Image
                      src={InstagramIcon}
                      alt="Instagram"
                      width={16}
                      height={16}
                      />
                  </Link>
                </li>
                <li className="rounded-full p-2 border border-1">
                  <Link href={""} target="blank">
                    <Image
                      src={YoutubeIcon}
                      alt="Youtube"
                      width={16}
                      height={16}
                    />
                  </Link>
                </li>
                <li className="rounded-full p-2 border border-1">
                  <Link href={""} target="blank">
                    <Image
                      src={GitLabIcon}
                      alt="GitLab"
                      width={36}
                      height={36}
                      className=""
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="divide-y">
              <div></div>
              <div>
              <ul className="flex list-none py-4 gap-8 items-center justify-center text-white divide-x">
              <li className="pl-4 font-semibold text-lg">
                    <Link href="/category/news" passHref>
                      News
                    </Link>
                    </li>
                  <li className="pl-4 font-semibold text-lg">
                  <Link href={"/directory"}>Directory</Link>
                  </li>
                  <li className="pl-4 font-semibold text-lg">
                  <Link href="/category/tutorials" passHref>
                      Tutorials
                    </Link>
                  </li>
                  <li className="pl-4 font-semibold text-lg">
                    <Link href={"/dealandcoupons"}>Deals & Coupons</Link>
                    </li>
                    <li className="pl-4 font-semibold text-lg">
                    <Link href="/category/plugins" passHref>
                      Plugins
                    </Link>
                  </li>
                  <li className="pl-4 font-semibold text-lg">
                  <Link href="/category/themes" passHref>
                      Themes
                    </Link>
                    </li>
                    <li className="pl-4 font-semibold text-lg">
                    <Link href={"/advertise"}>Advertise</Link>
                  </li>
                  <li className="pl-4 font-semibold text-lg">
                  <Link href={"/toolkit"}>Toolkit</Link>
                  </li>
                  <li className="pl-4 font-semibold text-lg">
                  <Link href={"/aboutus"}>About Us</Link>
                  </li>
                  <li className="pl-4 font-semibold text-lg">
                    <Link href={"/statistics"}>Statistics</Link>
                    </li>
                  <li className="pl-4 font-semibold text-lg">
                    <Link href={""}>Advanced Search</Link>
                    </li>
                  <li className="pl-4 font-semibold text-lg">
                    <Link href={""}>Free Blog Setup</Link>
                    </li>
                  <li className="pl-4 font-semibold text-lg">
                    <Link href={"/contact"}>Contact</Link>
                    </li>
                    </ul>
              </div>
              <div></div>
            </div>
            <div className="text-center text-white py-12">
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
