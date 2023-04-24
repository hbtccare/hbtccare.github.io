import Link from "next/link";
import React from "react";

interface navLinkInterface {
  NavString: string;
  NavLink: string;
}

const navLinks = [
  { NavString: "About Us", NavLink: "/about-us" },
  { NavString: "Services", NavLink: "/services" },
  { NavString: "Contact Us", NavLink: "/contact-us" },
  { NavString: "Donate", NavLink: "/donate" },
  { NavString: "Become a Volunteer", NavLink: "/become-a-volunteer" },
  { NavString: "Gallery", NavLink: "/gallery" },
  { NavString: "FAQ", NavLink: "/faq" },
  { NavString: "Privacy Policy", NavLink: "/privacy-policy" },
  { NavString: "Terms of Use", NavLink: "/terms-of-use" },
  { NavString: "Sitemap", NavLink: "/sitemap" },
  { NavString: "Careers", NavLink: "/careers" },
  { NavString: "Press", NavLink: "/press" },
];

function Footer() {
  return (
    <footer>
      <hr className="h-px m-2 bg-gray-700 border-0" />
      <div className="px-10 md:flex justify-between">
        <div>
          <h1 className="text-center my-4 text-5xl md:text-7xl">
            hbtccare.org
          </h1>
        </div>
        <div className="flex-wrap-reverse h-36 flex flex-col lg:gap-x-40 md:gap-x-20">
          {navLinks.map((navLink: navLinkInterface) => {
            return (
              <Link
                key={navLink.NavLink}
                className="transform hover:scale-110 transition duration-300"
                href={navLink.NavLink}
              >
                {navLink.NavString}
              </Link>
            );
          })}
        </div>
      </div>
      <hr className="h-px m-2 bg-gray-700 border-0" />{" "}
      <div className="px-10 md:flex justify-between mb-2">
        <p>
          &copy; 2023, Heart Beats Trauma Care, or its affiliates. All rights
          reserved.
        </p>
        <p>
          Built, maintained & operated by{" "}
          <a href="https://www.linkedin.com/in/shabeebkhalid">Shabeeb Khalid</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
