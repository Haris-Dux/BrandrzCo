"use client";
import "./Components.css";
import { useState } from "react";
import { Check } from "phosphor-react";
import { Button, Modal } from "keep-react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Brand Development",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Brand_Development.webp?v=1718389920",
    desc: "Brand Strategy: Craft a unique brand identity that resonates with your target audience.Logo & Visual Design: Create compelling logos and visual assets that reflect your brand's personality. Brand Messaging: Develop clear and impactful messaging to communicate your brand's value proposition",
  },
  {
    id: 2,
    title: "Product Sourcing",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Product_Sourcing.webp?v=1718389921",
    desc: "Product Research: Identify high-potential products and market opportunities. Supplier Sourcing: Connect with reliable manufacturers and suppliers to produce quality goods. Product Design & Packaging: Design appealing and functional product packaging that enhances your brand.",
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Ecommerce.webp?v=1718389920",
    desc: "Store Setup: Create and customize your online store on platforms like Shopify, WooCommerce, and more. Inventory Management: Implement efficient systems to manage stock levels and order fulfillment. Payment & Shipping Integration: Set up secure payment gateways and reliable shipping options.",
  },
  {
    id: 4,
    title: "Marketing & Promotion",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Marketing.webp?v=1718389921",
    desc: "Digital Marketing: Develop and execute online marketing strategies to increase visibility and drive sales. Social Media Management: Build and engage your audience on social media platforms. Content Creation: Produce high-quality content, including blogs, videos, and graphics to support your marketing efforts.",
  },
  {
    id: 5,
    title: "Ongoing Brand Management",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Brand_Mangement.webp?v=1718389920",
    desc: "Brand Monitoring: Continuously tracking brand performance and public perception. Rebranding: Assisting with brand refreshes or complete rebrands as necessary. Employee Branding: Ensuring employees understand and embody the brand’s values and mission.",
  },
  {
    id: 6,
    title: "Business Consulting",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Consullting.webp?v=1718389920",
    desc: "Business Planning: Develop a robust business plan to guide your brand's growth and success. Financial Management: Offer guidance on budgeting, pricing strategies, and financial planning. Mentorship & Coaching: Provide ongoing support and mentorship to help you navigate the challenges of entrepreneurship.",
  },
  {
    id: 7,
    title: "Help & Support Desk",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Help_Desk.webp?v=1718389920",
    desc: "Our Help & Support Desk service ensures that your customers receive prompt and effective assistance whenever they need it. We offer round-the-clock support to address queries, resolve issues, and provide guidance. Our team of dedicated professionals is trained to handle diverse customer needs with efficiency and empathy. With our Help & Support Desk solution, you can enhance customer satisfaction, build trust, and foster long-term relationships. ",
  },
];

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceId, setServiceId] = useState<number>();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const openModal = (id: number) => {
    setServiceId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const service = data.find((service) => service.id === serviceId);
  // console.log("service", service);

  return (
    <>
      <section className="-mt-20 lg:-mt-10">
        <div className=" bg_service py-16 sm:py-20 px-4 xl:px-0 bg-[#35170C]">
          <div className="header max-w-md mx-auto">
            <h3 className="bg_section_title m-auto text-center uppercase text-white text-lg sm:text-2xl font-medium p-4">
              SERVICES WE OFFER
            </h3>
          </div>
          <div className="mt-8 sm:mt-12 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto min-h-screen flex items-center">
            <div className="flex justify-center items-center flex-wrap gap-5 w-full">
              {data.map((service) => (
                <div
                  key={service.id}
                  className="bg_service_box flex justify-center items-center h-[22rem] w-[17rem] mt-2"
                >
                  <div className="content text-center ">
                    <div className="relative mx-auto h-[11rem] w-[14rem]">
                      <Image
                        fill
                        src={service.image}
                        alt="service image"
                        className="object-contain mx-auto w-full px-2"
                      />
                    </div>
                    <h2 className="mt-0 px-3 spacing text-xl font-medium">
                      {service.title}
                    </h2>
                    <p className="mt-1 px-6">
                      <span className="line-clamp-2">{service?.desc}</span>
                      <span
                        className="block text-sm font-semibold text-[#35160C] underline underline-offset-2 cursor-pointer"
                        onClick={() => openModal(service.id)}
                      >
                        Read More
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="bg-[#EEE3C4] flex w-[40rem] flex-col items-center p-6 lg:p-8">
          <Modal.Icon className="relative h-24 w-24 bg-transparent">
            <Image
              fill
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group.png?v=1718119221"
              alt="hat"
            />
          </Modal.Icon>
          <Modal.Content className="my-4 text-center">
            <h3 className="mb-2 text-body-1 spacing text-xl sm:text-2xl font-medium text-black">
              {service?.title}
            </h3>
            <p className="mx-auto max-w-lg text-body-4 text-[16px] sm:text-lg font-normal text-gray-800">
              {service?.desc}
            </p>
          </Modal.Content>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Services;
