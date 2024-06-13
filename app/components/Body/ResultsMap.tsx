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
}

interface TicketInfo {
  ticketInfo: Ticket[];
}

const ResultsMap: React.FC<TicketInfo> = ({ ticketInfo }) => {
  return (
    <div>
      {ticketInfo.map((ticket, index) => (
        <div key={index} className="ticket">
          <div>
            <strong>Datum Zacatku:</strong> {ticket.datum_zacatku}
          </div>
          <div>
            <strong>Doba Trvani:</strong> {ticket.doba_trvani}
          </div>
          <div>
            <strong>ID:</strong> {ticket.id}
          </div>
          <div>
            <strong>ID Letadla:</strong> {ticket.id_letadla}
          </div>
          <div>
            <strong>ID Spolecnosti:</strong> {ticket.id_spolecnosti}
          </div>
          <div>
            <strong>Kod Letiste Konec:</strong> {ticket.kod_letiste_konec}
          </div>
          <div>
            <strong>Kod Letiste Start:</strong> {ticket.kod_letiste_start}
          </div>
          <div>
            <strong>Let Cas:</strong> {ticket.let_cas}
          </div>
          <div>
            <strong>Let Datum:</strong> {ticket.let_datum}
          </div>
          <div>
            <strong>Nazev:</strong> {ticket.nazev}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsMap;
