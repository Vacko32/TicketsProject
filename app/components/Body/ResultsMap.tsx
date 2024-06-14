import React from "react";
import Results from "./Results";

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

interface TicketInfo {
  ticketInfo: Ticket[];
}

const ResultsMap: React.FC<TicketInfo> = ({ ticketInfo }) => {
  return (
    <div>
      {ticketInfo.map((ticket, index) => (
        <div key={index} className="ticket">
          <Results
            flightName={ticket.nazev}
            date={ticket.let_datum}
            airportFrom={ticket.start_letiste.nazev}
            airportTo={ticket.start_letiste.nazev}
          />
        </div>
      ))}
    </div>
  );
};

export default ResultsMap;
