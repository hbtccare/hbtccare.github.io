import React from "react";
import Image from "next/image";
import HamBurgerMenu from "./hamburger";
import Link from "next/link";

interface navLinkInterface {
  NavString: string;
  NavLink: string;
}

const navLinks = [
  { NavString: "About Us", NavLink: "/about-us" },
  { NavString: "Services", NavLink: "/services" },
  { NavString: "Contact Us", NavLink: "/contact-us" },
  { NavString: "Donate", NavLink: "/donate" },
  { NavString: "Gallery", NavLink: "/gallery" },
  { NavString: "Careers", NavLink: "/careers" },
  { NavString: "Press", NavLink: "/press" },
];

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header>
      <nav className="flex p-2 shadow-md md:justify-between md:px-4 lg:px-6">
        <HamBurgerMenu onClick={() => toggleNav()} isNavOpen={isNavOpen} />
        <div className="flex-grow md:flex-grow-0">
          <div className="flex justify-center">
            <Link href={"/"}>
              <Image
                src="/hbtc-logo-ls.png"
                alt="logo"
                width={130}
                height={34}
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex px-5 gap-4 items-center">
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
      </nav>
    </header>
  );
}

export default Header;
