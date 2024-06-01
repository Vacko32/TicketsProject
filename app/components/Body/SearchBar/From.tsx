"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
interface DepartureInputProps {
  children: React.ReactNode;
  icon?: number;
}

const From: React.FC<DepartureInputProps> = ({ children, icon }) => {
  const [iconPlane, setIconPlane] = React.useState<any>(null);

  useEffect(() => {
    if (icon === 1) {
      setIconPlane(faPlaneDeparture);
    } else {
      setIconPlane(faPlaneArrival);
    }
  }, [icon]);

  return (
    <div>
      <div className="text-white">
        <div>{children}</div>
        <div className="w-full  bg-sushigray text-white">
          <div className="flex flex-row">
            <div className="border-hidden mr-1">
              {iconPlane && <FontAwesomeIcon icon={iconPlane} />}
            </div>
            <input
              type="text"
              placeholder=""
              className="w-full border rounded-md bg-sushigray border-slate-700 text-white"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default From;
