"use client";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Collums from "./Collums";
import Container from "./Container";
import Logo from "./Logo";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toogled");
  };

  return (
    <div>
      <div className="sm:block py-3 border-slate-700 border-b-[1px] bg-sushidarkblue">
        <Container>
          <div className="flex flex-row justify-center items-center text-white">
            <div className="sm:mr-auto ml-3 sm:relative">
              <Logo />
            </div>
            <Collums />
            <div className="sm:hidden ml-auto">
              <BurgerMenu toogleMenu={toogleMenu} />
            </div>
          </div>
        </Container>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-sushidarkblue z-50 ">
          <div className="flex flex-col">
            <div className="flex items-start justify-end p-4 cursor-pointer text-white text-3xl border-b-2">
              <div className="mr-auto">
                <Logo />
              </div>
              <FontAwesomeIcon icon={faXmark} onClick={toogleMenu} />
            </div>
            <div className="text-white text-2xl text-center border-b border-t mt-24 pt-3 pb-3 cursor-pointer transition-opacity hover:opacity-70">
              Flights
            </div>
            <div className="text-white text-2xl text-center border-b border-t mt-4 pt-3 pb-3 cursor-pointer transition-opacity hover:opacity-70">
              Reviews
            </div>
            <div className="text-white text-2xl text-center border-b border-t mt-4 pt-3 pb-3 cursor-pointer transition-opacity hover:opacity-70">
              About Us
            </div>
            <div className="text-white text-2xl text-center border-b border-t mt-4 pt-3 pb-3 cursor-pointer transition-opacity hover:opacity-70">
              Login
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
