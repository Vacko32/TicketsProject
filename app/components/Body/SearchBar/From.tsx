"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "./supabaseClient";
interface DepartureInputProps {
  children?: React.ReactNode;
  icon?: number;
  suggArraySet?: any;
  visibility?: any;
  fromSelect: any;
  shownValue?: any;
}

const From: React.FC<DepartureInputProps> = ({
  children,
  icon,
  suggArraySet,
  visibility,
  fromSelect,
  shownValue,
}) => {
  const [iconPlane, setIconPlane] = useState<any>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (icon === 1) {
      setIconPlane(faPlaneDeparture);
    } else {
      setIconPlane(faPlaneArrival);
    }
  }, [icon]);

  const handleChange = (value: string) => {
    fetchData(value);
    fromSelect(value);
  };

  const fetchData = async (value: string) => {
    try {
      const { data, error } = await supabase.from("letiste").select("*");
      if (data === null) return;
      const filteredData = data.filter((nazev) => {
        return value && nazev.nazev.toLowerCase().includes(value.toLowerCase());
      });

      suggArraySet(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div className="text-white">
        <div>{children}</div>
        <div className="w-full  bg-sushigray text-white">
          <div className="flex flex-row">
            <div className="border-hidden mr-1 mt-1">
              {iconPlane && <FontAwesomeIcon icon={iconPlane} />}
            </div>
            <input
              type="text"
              placeholder="Type to search ..."
              value={shownValue}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full border rounded-md bg-sushigray border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sushipink focus:border-transparent pl-2 pr-2 pt-1 pb-1"
              onClick={() => visibility(true)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default From;
