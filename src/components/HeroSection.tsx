import Image from "next/image";
import "./Components.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="main_banner overflow-visible px-4 md:px-20 xl:px-0 bg-[#35170C]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 min-h-screen lg:min-h-screen xl:min-h-screen xxl:min-h-screen">
            {/* LEFT SIDE */}
            <div className="left_side flex justify-center sm:justify-between items-center">
              <div className="content px-0 sm:px-20 lg:px-0 mt-36 lg:mt-0">
                <h2 className="mb-6 text-4xl font-bold max-w-lg pr-5">
                  YOUR BUDDY IS CREATING & GROWING BRANDS
                </h2>
                <p className="mb-6 max-w-md sm:max-w-xl xl:max-w-md">
                  Welcome to The Brandrs Co., where we empower young
                  entrepreneurs and aspiring brand owners to bring their visions
                  to life. Whether you&apos;re looking to launch a private label, a
                  unique product, or an e-commerce store, The Brandrs Co. is
                  your one-stop shop for all your branding needs.
                </p>

                <Link
                  href="tel:+92 332 2222929"
                  className="bg_main_button uppercase text-white px-7 py-2.5"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="mt-8 pb-24 lg:pb-20 xl:pb-0 lg:mt-0 right_side flex justify-center items-end">
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
