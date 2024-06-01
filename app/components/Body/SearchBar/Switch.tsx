"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

const Switch = () => {
  return (
    <div className="cursor-pointer text-white">
      <FontAwesomeIcon icon={faRightLeft} />
    </div>
  );
};

export default Switch;
