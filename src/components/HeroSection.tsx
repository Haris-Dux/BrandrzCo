"use client";
import Image from "next/image";
import "./Components.css";
import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        className={`${
          isLargeScreen ? "large_screen_banner" : "plain_banner"
        }  overflow-visible px-4 md:px-20 xl:px-0 bg-[#35170C]`}
      >
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 min-h-screen lg:min-h-screen xl:min-h-screen xxl:min-h-screen">
            {/* LEFT SIDE */}
            <div className="left_side flex justify-center sm:justify-between items-center">
              <div className="content px-0 sm:px-20 lg:px-0 mt-36 lg:mt-0">
                <h2 className="main_header min-h-[9rem] md:min-h-[9rem] xl:min-h-[6rem] mb-6 text-5xl text-[#381300] font-bold pr-5">
                  <Typewriter
                    words={["Transforming Ideas Into Thriving Brands"]}
                    loop={0}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <p className="mb-6 tracking-wide max-w-md sm:max-w-xl xl:max-w-md">
                  Welcome to The Brandrs Co., where we empower young
                  entrepreneurs and aspiring brand owners to bring their visions
                  to life. Whether you&apos;re looking to launch a private
                  label, a unique product, or an e-commerce store, The Brandrs
                  Co. is your one-stop shop for all your branding needs.
                </p>

                <Link
                  href="tel:+92 332 2222929"
                  className="bg_main_button bangers text-lg tracking-widest uppercase text-white px-8 py-3"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:hidden w-full mt-8 pb-28 lg:pb-20 xl:pb-0 lg:mt-0 right_side flex justify-center items-end">
              <Image
                width={550}
                height={550}
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_81.png?v=1717510886"
                alt="main_banner_img"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
