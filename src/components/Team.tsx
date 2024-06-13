"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    name: "Emran Akhtar",
    post: "Director Marketing",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/WhatsApp_Image_2024-06-12_at_12.54.29_AM.jpg?v=1718139633",
  },
  {
    id: 2,
    name: "Sidra Emran",
    post: "CEO",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/WhatsApp_Image_2024-06-12_at_12.53.38_AM.jpg?v=1718139633",
  },
  {
    id: 3,
    name: "Ayesha Emran",
    post: "Chairman",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/WhatsApp_Image_2024-06-12_at_12.53.22_AM.jpg?v=1718139633",
  },
  {
    id: 4,
    name: "Malik Saleem Anwar",
    post: "Director Design & Concept",

    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/WhatsApp_Image_2024-06-12_at_12.58.02_AM.jpg?v=1718139633",
  },
  {
    id: 5,
    name: "Hassan Rizvi",
    post: "CFO",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/WhatsApp_Image_2024-06-12_at_12.56.01_AM.jpg?v=1718139632",
  },
];

const Team = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
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
      <section className="py-16 sm:py-20 px-4 xl:px-0 bg-[#F2E5CD]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="header w-full max-w-4xl mx-auto text-center">
            <h3 className="bg_section_title m-auto text-center uppercase text-white text-lg sm:text-xl font-semibold py-4">
              OUR CREATIVE TEAM
            </h3>

            <p className="mt-6">
              Meet the creative geniuses behind BrandrsCo. Our team transforms
              visions into reality, bringing passion and precision to every
              brand we build. We don&apos;t just create brands; we bring dreams to
              life.
            </p>
          </div>
          <div className="data">
            <div className="mt-12">
              <Slider ref={sliderRef} {...settings}>
                {data.map((data) => (
                  <div key={data.id} className="member group">
                    <div className="dark-brown w-[15rem] h-[15rem] mx-auto flex justify-center items-center rounded-full bg-[#CCBB9E] p-7 cursor-pointer">
                      <div className="relative w-[12rem] h-[12rem]">
                        <Image
                          fill
                          src={data.image}
                          className="rounded-full object-cover"
                          alt="team images"
                        />
                      </div>
                    </div>

                    <div className="detail group-hover:block mt-3 text-center">
                      <h3 className="text-xl font-semibold">{data.name}</h3>
                      <p>{data.post}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
