"use client";
import Filters from "./SearchBar/Filters";
import From from "./SearchBar/From";
import Suggestions from "./SearchBar/Suggestions";
import Switch from "./SearchBar/Switch";
import { useState } from "react";

const SearchBar = () => {
  const [FromQuery, setFromQuery] = useState("");
  const [ToQuery, setToQuery] = useState("");
  const [airSuggestions, setAirSuggestions] = useState([]);
  const [airSuggestions2, setAirSuggestions2] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 text-white text-2xl">Find Your Ticket</div>
      <div className="rounded-lg border bg-sushigray opacity-90 border-slate-700 mt-2 pt-5 pb-10 pl-2 pr-2 shadow-2xl max-h-40 relative">
        <div className="flex flex-col">
          <div className="flex flex-row gap-5 sm:gap-20 md:gap-32">
            <div className="flex flex-col justify-center items-center">
              <From
                icon={1}
                suggArraySet={setAirSuggestions}
                visibility={setVisible}
                fromSelect={setFromQuery}
                shownValue={FromQuery}
              >
                From: {FromQuery}
              </From>
            </div>
            <div className="mt-7">
              <Switch />
            </div>
            <div className="flex flex-col justify-center items-center">
              <From
                icon={2}
                suggArraySet={setAirSuggestions2}
                visibility={setVisible2}
                fromSelect={setToQuery}
                shownValue={ToQuery}
              >
                To: {ToQuery}
              </From>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="">
              <Suggestions
                suggestions={airSuggestions}
                visibility={visible}
                fromQuerySet={setFromQuery}
              />
            </div>
            <div>
              <Suggestions
                suggestions={airSuggestions2}
                visibility={visible2}
                fromQuerySet={setToQuery}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
