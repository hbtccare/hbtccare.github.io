import React from "react";

interface HamBurgerMenuProps {
  onClick: () => void;
  isNavOpen: boolean;
}

const HamBurgerMenu: React.FC<HamBurgerMenuProps> = ({
  onClick,
  isNavOpen,
}) => {
  return (
    <button className="md:hidden" onClick={onClick}>
      <div className="flex flex-col justify-evenly w-6 h-6">
        <div
          className={`bg-white h-0.5 mb-1 transition duration-300 transform ${
            isNavOpen ? "rotate-45 translate-y-2 " : ""
          }`}
        ></div>
        <div
          className={`bg-white h-0.5 mb-1 transition duration-300 ${
            isNavOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`bg-white h-0.5 transition duration-300 transform ${
            isNavOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>
    </button>
  );
};

export default HamBurgerMenu;
