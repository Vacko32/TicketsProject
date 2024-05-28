"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const BurgerMenu = () => {
  return (
    <div className="text-2xl font-semibold cursor-pointer sm:hidden">
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default BurgerMenu;
