import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <section className="bg_about relative px-4 xl:px-0 py-16">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 min-h-[90vh]">
            <div className="left_side flex justify-center items-center min-w-[50%]">
              <div className="content">
                <h2 className="mb-6 text-4xl text-[#BE2A1E] font-bold max-w-lg pr-5">
                  ABOUT US
                </h2>
                <p className="mb-6 max-w-md">
                  At The Brandrs Co., we are dedicated to empowering young
                  entrepreneurs and visionaries to turn their dreams into
                  reality. We specialize in providing comprehensive support for
                  launching private labels, unique products, and e-commerce
                  stores. As your one-stop shop for all branding needs, we offer
                  a wide range of services including brand development,
                  marketing strategy, product sourcing, and e-commerce
                  solutions.
                </p>

                <p className="mb-6 max-w-md">
                  Our mission is to simplify the process of building a
                  successful brand by offering expert guidance and tailored
                  solutions. Whether you&apos;re just starting out or looking to take
                  your existing business to the next level, The Brandrs Co. is
                  here to provide the tools, knowledge, and support you need to
                  thrive in the competitive marketplace.
                </p> 

                <Link
                  href="tel:+92 332 2222929"
                  className="bg_main_button uppercase text-white px-7 py-2.5"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="right_side flex justify-center items-center min-w-[50%]">
              <Image
                width={500}
                height={500}
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_83.png?v=1717529589"
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

export default AboutUs;
