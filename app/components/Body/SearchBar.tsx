"use client";
import Filters from "./SearchBar/Filters";
import From from "./SearchBar/From";
import Suggestions from "./SearchBar/Suggestions";
import Switch from "./SearchBar/Switch";
import { useState } from "react";

const SearchBar = () => {
  const [airSuggestions, setAirSuggestions] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 text-white text-2xl">Find Your Ticket</div>
      <div className="rounded-lg border bg-sushigray opacity-90 border-slate-700 mt-2 pb-10 pt-5 pl-2 pr-2 shadow-2xl">
        <div className="flex flex-row gap-5 sm:gap-20 md:gap-32">
          <div className="flex flex-col justify-center items-center">
            <From
              icon={1}
              suggArraySet={setAirSuggestions}
              visibility={setVisible}
            >
              From:
            </From>
          </div>
          <div className="mt-7">
            <Switch />
          </div>
          <div className="flex flex-col justify-center items-center">
            <From
              icon={2}
              suggArraySet={setAirSuggestions}
              visibility={setVisible2}
            >
              To:
            </From>
          </div>
        </div>
        <div>
          <Suggestions suggestions={airSuggestions} visibility={visible} />
          <Suggestions suggestions={airSuggestions} visibility={visible2} />
        </div>
        <div className="flex items-center justify-center mt-5">
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
