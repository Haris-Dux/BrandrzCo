"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "Shoaib Khan",
    rating: 5,
    post: "Founder, Googly-smart",
    review:
      "BrandrsCo exceeded my expectations. Their team is incredibly talented and dedicated, transforming our idea into a successful brand. Their attention to detail and creativity are unmatched.",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/profile.png?v=1718313511",
  },
  {
    id: 2,
    name: "Sidra Emran",
    rating: 4,
    post: "CEO, Cosmo Labs",
    review:
      "Working with BrandrsCo was a game-changer for us. They took care of everything from product hunting to our first sale. Their expertise made our journey smooth and successful.",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/woman.png?v=1718313511",
  },
  {
    id: 3,
    name: "Faisal Malik",
    rating: 5,
    post: "Owner, Smokenjoy Houston",
    review:
      "The team at BrandrsCo is phenomenal. Their strategic approach and creative solutions helped us launch our brand seamlessly. We couldn't have done it without them!",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/profile.png?v=1718313511",
  },
  {
    id: 4,
    name: "Ammar Emran",
    rating: 4,
    post: "Founder, Octa Tech Solutions LLC",
    review:
      "BrandrsCo provided exceptional service. From the initial concept to the final launch, their expertise and support were invaluable. Highly recommended!",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/profile.png?v=1718313511",
  },
  {
    id: 5,
    name: "Ayesha Khan",
    rating: 5,
    post: "CEO, For Your Beauty",
    review:
      "I am incredibly impressed with BrandrsCo. Their team is knowledgeable, professional, and truly dedicated to their clients' success. Our brand launch was a huge success, thanks to them.",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/woman.png?v=1718313511",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} size={18} className="mx-0.5 text-[#FAFA33]" />);
  }
  return <div className="flex">{stars}</div>;
};

const OurClients = () => {
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
      <section className="bg_service -mb-10 pt-20 pb-28 min-h-screen px-0 xl:px-0 bg-[#35170C] text-white">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* Header */}
          <div className="header w-full max-w-4xl mx-auto text-center px-4">
            <h3 className="bg_section_title m-auto text-center uppercase text-white text-lg sm:text-2xl font-medium p-4">
              OUR CLIENTS
            </h3>

            <p className="mt-6">
              At BrandrsCo, our clients are our inspiration. We take pride in
              partnering with visionary entrepreneurs and businesses, helping
              them transform their ideas into thriving brands. Together, we
              achieve greatness.
            </p>
          </div>

          {/* Body */}
          <div className="data">
            <div className="mt-8 sm:mt-12">
              <Slider ref={sliderRef} {...settings}>
                {data.map((data) => (
                  <div key={data?.id} className="mt-10 px-2 sm:px-2 lg:px-4">
                    <div className="bg-[#dfc27b] h-60 overflow-visible relative cursor-pointer rounded-2xl flex items-center text-black py-8 px-4 sm:px-8">
                      {/* HAT */}
                      <div className="hat absolute -top-10 -right-1">
                        <Image
                          width={100}
                          height={100}
                          src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group.png?v=1718119221"
                          alt="main_banner_img"
                          className="rounded-full"
                        />
                      </div>

                      {/* BODY */}
                      <div className="content">
                        <div className="head flex justify-start items-center gap-2">
                          <Image
                            width={30}
                            height={30}
                            src={data?.image}
                            alt="main_banner_img"
                            className="rounded-full"
                          />
                          <div className="details">
                            <p className="text-lg font-semibold">
                              {data?.name}
                            </p>
                            <p className="text-xs -mt-1 text-[#1f1f1f] font-semibold">
                              {data?.post}
                            </p>
                          </div>
                        </div>

                        <p className="mt-3 text-sm sm:text-md">
                          {data?.review}
                        </p>

                        <div className="rating mt-4">
                          <StarRating rating={data?.rating} />
                        </div>
                      </div>
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

export default OurClients;
