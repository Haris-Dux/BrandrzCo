"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./Layouts.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [responsiveMenu, setResponsiveMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Service", path: "/#service" },
    { title: "About", path: "/#about" },
    { title: "Projects", path: "/#projects" },
    { title: "Team", path: "/#team" },
  ];

  const handleMoveToTop = () => {
    window.scroll(0, 0);
  };

  const handleMenuClick = () => {
    setResponsiveMenu(false);
    // handleMoveToTop();
  };

  const handleLinkClick = (e: any, path: string) => {
    e.preventDefault();

    const [url, hash] = path.split("#");

    if (url === router.pathname) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(path);
    }
  };

  return (
    <>
      <nav
        className={`bg_navbar fixed pt-0 top-0 sm:top-5 h-20 ${
          responsiveMenu ? "" : "px-3"
        } sm:px-0 my-auto max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex items-center`}
      >
        <div className="sm:flex sm:items-center justify-center sm:justify-between w-full px-0 max-w-full mx-auto md:px-1 lg:px-16">
          <div className="flex items-center justify-between md:block">
            <Link href="/">
              <Image
                width={60}
                height={60}
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/IMG_6352-removebg-preview.png?v=1717798553"
                alt="Logo"
                className="object-cover px-2"
              />
            </Link>

            <div className="md:hidden">
              <button
                type="button"
                className="text-white outline-none p-2 rounded-md"
                onClick={() => setResponsiveMenu(!responsiveMenu)}
              >
                {responsiveMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* MENU */}
          <div
            className={`flex-1 justify-self-center pb-8 mt-48 md:block md:pb-0 md:mt-0 ${
              responsiveMenu ? "bg-[#3B1200]" : "bg-transparent"
            }  ${responsiveMenu ? "block" : "hidden"}`}
          >
            {responsiveMenu && (
              <button
                onClick={handleMenuClick}
                className="text-white pr-5 pt-10 flex justify-end w-full items-center"
              >
                <p className="pt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </button>
            )}
            <ul
              className={`text-center ${
                responsiveMenu ? "pt-6" : ""
              } justify-center items-center space-y-8 md:flex md:space-x-6 lg:space-x-8 md:space-y-0`}
            >
              {navigation.map((data, index) => (
                <li
                  key={index}
                  onClick={(e) => handleLinkClick(e, data.path)}
                  className="text-white hover:text-gray-200 cursor-pointer"
                >
                  <a
                    href={data.path}
                    className={`font-normal text-[1.125rem] sm:text-[1.05rem]`}
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BUTTON */}
          <div className="hidden md:inline-block">
            <Link
              href="tel:+92 332 2222929"
              className="bg_navbar_button bangers text-lg tracking-widest uppercase text-[#381300] px-8 py-3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
