"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Collums from "./Collums";

interface BurgerMenuProps {
  toogleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ toogleMenu }) => {
  // Correctly destructure the prop
  return (
    <div>
      <div>
        <div
          className="text-2xl font-semibold cursor-pointer sm:hidden"
          onClick={toogleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
