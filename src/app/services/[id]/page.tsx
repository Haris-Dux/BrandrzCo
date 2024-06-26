import "../../../components/Components.css";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Brand Development",
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Brand_Development.jpg?v=1719002759",
    desc: "Brand Strategy: Craft a unique brand identity that resonates with your target audience.Logo & Visual Design: Create compelling logos and visual assets that reflect your brand's personality. Brand Messaging: Develop clear and impactful messaging to communicate your brand's value proposition",
  },
  {
    id: 2,
    title: "Product Sourcing",
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Product_Sourcing.jpg?v=1719002759",
    desc: "Product Research: Identify high-potential products and market opportunities. Supplier Sourcing: Connect with reliable manufacturers and suppliers to produce quality goods. Product Design & Packaging: Design appealing and functional product packaging that enhances your brand.",
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/E-Commerce.jpg?v=1719002759",
    desc: "Store Setup: Create and customize your online store on platforms like Shopify, WooCommerce, and more. Inventory Management: Implement efficient systems to manage stock levels and order fulfillment. Payment & Shipping Integration: Set up secure payment gateways and reliable shipping options.",
  },
  {
    id: 4,
    title: "Marketing & Promotion",
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Marketing.jpg?v=1719002759",
    desc: "Digital Marketing: Develop and execute online marketing strategies to increase visibility and drive sales. Social Media Management: Build and engage your audience on social media platforms. Content Creation: Produce high-quality content, including blogs, videos, and graphics to support your marketing efforts.",
  },
  {
    id: 5,
    title: "Ongoing Brand Management",
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/OnGoing_Brand_Management.jpg?v=1719002759",
    desc: "Brand Monitoring: Continuously tracking brand performance and public perception. Rebranding: Assisting with brand refreshes or complete rebrands as necessary. Employee Branding: Ensuring employees understand and embody the brand’s values and mission.",
  },
  {
    id: 6,
    title: "Business Consulting",
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Business_Consulting.jpg?v=1719002759",
    desc: "Business Planning: Develop a robust business plan to guide your brand's growth and success. Financial Management: Offer guidance on budgeting, pricing strategies, and financial planning. Mentorship & Coaching: Provide ongoing support and mentorship to help you navigate the challenges of entrepreneurship.",
  },
  {
    id: 7,
    title: "Help & Support Desk",
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Help_Support.jpg?v=1719002759",
    desc: "Our Help & Support Desk service ensures that your customers receive prompt and effective assistance whenever they need it. We offer round-the-clock support to address queries, resolve issues, and provide guidance. Our team of dedicated professionals is trained to handle diverse customer needs with efficiency and empathy. With our Help & Support Desk solution, you can enhance customer satisfaction, build trust, and foster long-term relationships. ",
  },
  {
    id: 8,
    title: "Product Photoshoot",
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-06-24_at_6.12.22_PM.jpg?v=1719234811",
    desc: "Our Product Photoshoot service captures the essence of your products with stunning, high-quality images that elevate your brand's visual appeal. Our experienced photographers specialize in highlighting the unique features and details of each product, creating images that attract and engage potential customers.",
  },
];

const page = ({ params }: any) => {
  const serviceId = Number(params.id);

  const serviceData = data.find((data) => data.id === serviceId);

  return (
    <>
      <section className="w-full">
        <div className="bg_service px-4 xl:px-0 bg-[#35170C]">
          <div className="pt-40 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto min-h-screen">
            <div className="header w-full flex justify-between items-center">
              <h2 className="text-white text-3xl sm:text-3xl tracking-wider">
                {serviceData?.title}
              </h2>
              <Link href="/">
                <h2 className="flex justify-between items-center cursor-pointer">
                  <IoArrowBackOutline size={25} className="text-white mr-2" />{" "}
                  <span className="text-white text-xl sm:text-2xl tracking-wider">
                    Back
                  </span>
                </h2>
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              <div className="desc">
                <p className="mt-10 text-white text-lg">{serviceData?.desc}</p>
              </div>
              <div className="relative mx-auto h-[23rem] w-[30rem]">
                <Image
                  fill
                  src={serviceData?.image || "https://placehold.co/600x400/png"}
                  alt="service image"
                  className="object-contain mx-auto w-full px-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
