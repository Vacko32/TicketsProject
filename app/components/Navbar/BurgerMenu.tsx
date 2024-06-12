"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Collums from "./Collums";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <div
          className="text-2xl font-semibold cursor-pointer sm:hidden"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-sushigray flex flex-col border border-slate-700 items-center justify-center">
          <div className="flex flex-row gap-6">
            <div>sdadsa</div>
            <div className="cursor-pointer" onClick={toggleMenu}>
              dfd
            </div>
          </div>
          <div>sd</div>
          <div>sd</div>
          <div>sd</div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
