"use client";
import { DatePicker } from "./SearchBar/DatePicker";
import Filters from "./SearchBar/Filters";
import From from "./SearchBar/From";
import SearchButton from "./SearchBar/SearchButton";
import Suggestions from "./SearchBar/Suggestions";
import Switch from "./SearchBar/Switch";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
      <div className="rounded-lg border bg-sushigray opacity-90 border-slate-700 mt-2 pt-5 pb-10 pl-2 pr-2 shadow-2xl max-h-60 relative">
        <div className="flex flex-col">
          <div className="mb-10 mt-2">
            <DatePicker />
          </div>
          <div className="flex flex-row gap-5 sm:gap-20 md:gap-32">
            <div className="flex flex-col">
              <From
                icon={1}
                suggArraySet={setAirSuggestions}
                visibility={setVisible}
                fromSelect={setFromQuery}
                shownValue={FromQuery}
              >
                From: {FromQuery}
              </From>
              <Suggestions
                suggestions={airSuggestions}
                visibility={visible}
                fromQuerySet={setFromQuery}
                setVisibility={setVisible}
              />
            </div>
            <div className="mt-7 transition-opacity border-2 rounded-full grow-0 hover:opacity-60 pl-3 pr-3 max-h-8">
              <Switch
                value1={FromQuery}
                value2={ToQuery}
                setValue1={setFromQuery}
                setValue2={setToQuery}
              />
            </div>
            <div className="flex flex-col ">
              <From
                icon={2}
                suggArraySet={setAirSuggestions2}
                visibility={setVisible2}
                fromSelect={setToQuery}
                shownValue={ToQuery}
              >
                To: {ToQuery}
              </From>
              <Suggestions
                suggestions={airSuggestions2}
                visibility={visible2}
                fromQuerySet={setToQuery}
                setVisibility={setVisible2}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <div className="mt-5 shadow-xl">
            <SearchButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
