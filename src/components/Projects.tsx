"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";

const data = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Vector_3.png?v=1717529003",
    alt: "image",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Vector_3.png?v=1717529003",
    alt: "image",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Vector_3.png?v=1717529003",
    alt: "image",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Vector_3.png?v=1717529003",
    alt: "image",
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Vector_3.png?v=1717529003",
    alt: "image",
  },
];

const Projects = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(3); // Full Desktop view
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop view
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // Tablet view
      } else {
        setSlidesToShow(1); // Mobile view
      }
    };

    // Initial update
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="-mt-10">
        <div className="bg_service py-16 sm:py-20 px-4 xl:px-0 min-h-screen bg-[#35170C]">
          <div className="mt-12 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto min-h-screen flex flex-col items-center gap-9 ">
            <div className="w-full  flex flex-col gap-6 ">
              <div className="header">
                <h3 className="bg_section_title m-auto text-center uppercase text-white text-lg sm:text-xl font-semibold p-4">
                  OUR PROJECTS
                </h3>
              </div>

              <div className="mt-5">
                <Slider ref={sliderRef} {...settings}>
                  {data.map((data) => (
                    <div key={data?.id} className="relative aspect-[400/300]">
                      <Image
                        fill
                        className="cursor-pointer"
                        src={data?.image}
                        alt={data?.alt}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="w-full flex flex-col gap-10 sm:flex-row sm:items-center justify-around">
              <div className="w-full  flex flex-col gap-10 sm:w-[45%]">
                <div className="w-full  flex flex-col">
                  {/* heading */}
                  <div className="w-full flex flex-col gap-4">
                    <h1 className="text-white font-semibold text-3xl">
                      WHY CHOOSE US?
                    </h1>
                    <p className="text-white">
                      Discover what sets BrandrsCo apart. We bring expertise,
                      innovation, and dedication to every project.
                    </p>
                  </div>

                  {/* content */}
                  <div className="mt-8 w-full flex flex-col gap-9">
                    <div className="w-full flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="relative h-14 w-14">
                        <Image
                          fill
                          src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_97.png?v=1718121169"
                          alt="Logo"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-white font-semibold text-xl">
                          COMPETENT DEVELOPERS
                        </h1>
                        <p className="text-gray-200">
                          Our team of skilled developers ensures your brand
                          stands out with cutting-edge solutions.
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="relative h-14 w-14">
                        <Image
                          fill
                          src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_98.png?v=1718121399"
                          alt="Logo"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-white font-semibold text-xl">
                          STATE OF THE ART TECHNOLOGY
                        </h1>
                        <p className="text-gray-200">
                          We leverage the latest technology to ensure your
                          brand&apos;s success in the digital world.
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="relative h-14 w-14">
                        <Image
                          fill
                          src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_99.png?v=1718121399"
                          alt="Logo"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-white font-semibold text-xl">
                          EXCELLENT CUSTOMER SERVICE
                        </h1>
                        <p className="text-gray-200">
                          Our commitment to exceptional customer service ensures
                          a seamless and enjoyable experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row gap-4 sm:w-[45%] justify-center">
                <div className="relative h-[25rem] w-[25rem]">
                  <Image
                    fill
                    className="px-0 object-contain"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_107.png?v=1717529004"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
