import React from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  const navigation = [
    { title: "Home", path: "#home" },
    { title: "Service", path: "#service" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Team", path: "#team" },
  ];

  return (
    <>
      <footer className="bg_footer relative">
        <div className="hat absolute -top-8 right-3">
          <Image
            width={100}
            height={100}
            src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group.png?v=1718119221"
            alt="main_banner_img"
            className="rounded-full"
          />
        </div>
        <div className="hat absolute hidden sm:block bottom-20 sm:bottom-10 left-3 sm:left-10">
          <Image
            width={100}
            height={100}
            src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Frame.png?v=1718133392"
            alt="main_banner_img"
            className="rounded-full"
          />
        </div>
        <div className=" pt-16 pb-6 flex flex-col items-center text-center">
          <Link href="/" className="relative h-28 w-28">
            <Image
              alt="logo"
              className="object-contain"
              fill
              src="/download.png"
            />
          </Link>
          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            {navigation.map((data, index) => (
              <div
                key={index}
                className="text-black mx-2 sm:mx-5 hover:text-gray-800 cursor-pointer"
              >
                <Link
                  href={data.path}
                  className="font-medium text-[0.9rem] lg:text-[1.05rem]"
                >
                  {data.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-4 links flex items-center justify-start gap-2.5">
            <a
              href="https://www.facebook.com/profile.php?id=61560768478851&mibextid=LQQJ4d"
              target="_blank"
              className=""
            >
              <FaFacebookF className="text-white bg-[#3c3b3b] h-7 w-7 p-1.5 rounded-full" />
            </a>
            <a
              href="https://www.instagram.com/thebrandrsco?igsh=Y29tMDloc3d5bWxo&utm_source=qr"
              target="_blank"
              className=""
            >
              <FaInstagram className="text-white bg-[#3c3b3b] h-7 w-7 p-1.5 rounded-full" />
            </a>
          </div>
        </div>
        <div className="bg_footer1 px-4 w-full py-2 flex flex-wrap items-center justify-center sm:justify-between">
          <div className="mt-2 text-sm flex items-center justify-center flex-col sm:flex-row gap-2 sm:gap-8">
            <Link
              href="tel:+92 332 2222929"
              className="flex items-center text-white gap-2"
            >
              <FaPhone /> +92 332 2222929
            </Link>

            <Link
              href="mailto:info@thebrandrsco.com"
              target="_blank"
              className="flex items-center justify-center text-white gap-1.5 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@thebrandrsco.com
            </Link>
          </div>
          <p className="text-white text-sm mt-2 sm:mt-0">
            © 2024 Copy Right. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
