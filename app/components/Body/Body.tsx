"use client";
import React from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";

interface TicketInfo {
  flightName: string;
  class: string;
  timeTakeOff: string;
  timeLanding: string;
  company: string;
  flightCost: number;
}

const Body = () => {
  const [tickets, setTickets] = React.useState<TicketInfo[]>([]);
  return (
    <div className="flex flex-col justify-between items-center bg-sushidarkblue">
      <div className="border-b pb-10 w-full">
        <SearchBar />
      </div>
      <div className="mt-32">
        <Results />

        <Results />
      </div>
    </div>
  );
};

export default Body;
