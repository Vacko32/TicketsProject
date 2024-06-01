"use client";
import { min, set } from "date-fns";
import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const showCalendar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex flex-col items-center text-center justify-center">
        <div className="flex flex-row gap-10 border rounded-md bg-sushigray border-slate-700 text-white pl-3 pr-3 pt-3 pb-3">
          <div onClick={showCalendar} className="text-white cursor-pointer">
            Depart
          </div>
          <div onClick={showCalendar} className="text-white cursor-pointer">
            Return
          </div>
        </div>
      </div>
      <div className="{`fixed z-40 w-full ${isOpen ? 'flex items-center justify-center h-full : 'hidden'}`}">
        {isOpen && (
          <DateRangePicker ranges={dateRange} onChange={handleChange} />
        )}
      </div>
    </div>
  );
};

export default Filters;
