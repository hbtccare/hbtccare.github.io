import Link from "next/link";
import React from "react";

const navLinks = [
  {
    Organisation: [
      { NavString: "About Us", NavLink: "/about-us" },
      { NavString: "Services", NavLink: "/services" },
      { NavString: "Donate", NavLink: "/donate" },
      { NavString: "Become a Volunteer", NavLink: "/become-a-volunteer" },
      { NavString: "Careers", NavLink: "/careers" },
    ],
    Resources: [
      { NavString: "Gallery", NavLink: "/gallery" },
      { NavString: "Press", NavLink: "/press" },
      { NavString: "FAQ", NavLink: "/faq" },
      { NavString: "Privacy Policy", NavLink: "/privacy-policy" },
      { NavString: "Terms of Use", NavLink: "/terms-of-use" },
    ],
  },
];

function Footer() {
  return (
    <footer>
      <hr className="h-px m-2 bg-gray-700 border-0" />
      <div className="px-6 md:px-10 sm:flex justify-between">
        <div>
          <h1 className="text-center my-4 text-5xl md:text-6xl lg:text-8xl">
            hbtccare.org
          </h1>
        </div>
        <div className="flex justify-between md:justify-around sm:gap-10 lg:gap-20">
          {Object.entries(navLinks[0]).map(([category, links]) => (
            <div key={category}>
              <h2 className="font-bold">{category}</h2>
              {links.map(({ NavString, NavLink }) => {
                return (
                  <div
                    className="transform hover:scale-110 transition duration-300"
                    key={NavString}
                  >
                    <Link href={NavLink}>{NavString}</Link>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <hr className="h-px m-2 bg-gray-700 border-0" />{" "}
      <div className="px-6 md:px-10 md:flex justify-between mb-2">
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
