"use client";
import React from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import ResultsMap from "./ResultsMap";

interface Ticket {
  datum_zacatku: string;
  doba_trvani: number;
  id: number;
  id_letadla: number;
  id_spolecnosti: number;
  kod_letiste_konec: string;
  kod_letiste_start: string;
  let_cas: string;
  let_datum: string;
  nazev: string;
  start_letiste: any;
  end_letiste: any;
}

const Body = () => {
  const [tickets, setTickets] = React.useState<Ticket[]>([]);
  return (
    <div className="flex flex-col justify-between items-center bg-sushidarkblue">
      <div className="border-b pb-10 w-full">
        <SearchBar tickets={tickets} setTickets={setTickets} />
      </div>
      <div className="mt-32">
        <ResultsMap ticketInfo={tickets} />
      </div>
    </div>
  );
};

export default Body;
