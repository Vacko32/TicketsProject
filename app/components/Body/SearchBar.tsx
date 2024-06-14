"use client";
import { DatePicker } from "./SearchBar/DatePicker";
import Filters from "./SearchBar/Filters";
import From from "./SearchBar/From";
import SearchButton from "./SearchBar/SearchButton";
import Suggestions from "./SearchBar/Suggestions";
import Switch from "./SearchBar/Switch";
import React, { useState } from "react";
import { supabase } from "./SearchBar/supabaseClient";

interface SearchbarProps {
  tickets: any;
  setTickets: (tickets: any) => void;
}

const SearchBar: React.FC<SearchbarProps> = ({ tickets, setTickets }) => {
  const [FromQuery, setFromQuery] = useState("");
  const [ToQuery, setToQuery] = useState("");
  const [airSuggestions, setAirSuggestions] = useState([]);
  const [airSuggestions2, setAirSuggestions2] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [date, setDate] = useState<Date>();

  const handleSearch = async () => {
    try {
      // Format the date to a string in 'YYYY-MM-DD' format
      const formattedDate = date ? date.toISOString().split("T")[0] : null;

      let query = supabase
        .from("let")
        .select(
          `
    *,
    start_letiste:letiste!kod_letiste_start(*),
    end_letiste:letiste!kod_letiste_konec(*)
  `
        )
        .eq("let_datum", formattedDate);

      const { data, error } = await query;

      if (error) {
        console.error("error", error);
        return;
      }

      if (data) {
        setTickets(data);
        console.log("data", data);
        console.log(formattedDate);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 text-white text-2xl">Find Your Ticket</div>
      <div className="rounded-lg border bg-sushigray opacity-90 border-slate-700 mt-2 pt-5 pb-10 pl-2 pr-2 shadow-2xl max-h-60 relative">
        <div className="flex flex-col">
          <div className="mb-10 mt-2">
            <DatePicker date={date} setDate={setDate} />
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
                From: {FromQuery} a datum {date?.toDateString()}
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
          <div className="mt-5 shadow-xl" onClick={handleSearch}>
            <SearchButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
