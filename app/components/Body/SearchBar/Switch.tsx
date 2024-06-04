"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface SwitchProps {
  value1?: any;
  value2?: any;
  setValue1?: (value: any) => void;
  setValue2?: (value: any) => void;
}

const Switch: React.FC<SwitchProps> = ({
  value1,
  value2,
  setValue1,
  setValue2,
}) => {
  const handleClick = () => {
    if (
      value1 === null ||
      value2 === null ||
      !setValue1 ||
      !setValue2 ||
      value1 === "" ||
      value2 === ""
    ) {
      return;
    }
    setValue1(value2);
    setValue2(value1);
  };

  return (
    <div className="cursor-pointer text-white">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faRightLeft} />
      </button>
    </div>
  );
};

export default Switch;
