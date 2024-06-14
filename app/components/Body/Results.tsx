import React from "react";

interface TicketInfo {
  flightName?: string;
  class?: string;
  timeTakeOff?: string;
  timeLanding?: string;
  company?: string;
  flightCost?: number;
  date?: string;
  airportFrom?: string;
  airportTo?: string;
}

const Results: React.FC<TicketInfo> = ({
  flightName,
  class: flightClass,
  timeTakeOff,
  timeLanding,
  company,
  flightCost,
  date,
  airportFrom,
  airportTo,
}) => {
  return (
    <div className="bg-gradient-to-r from-20% from-blue-950 to-purple-900 flex flex-row border border-slate-900 rounded-2xl text-white shadow-2xl h-20 mb-20 pt-5 pb-40">
      <div className="flex flex-row mr-20 xl:mr-36">
        <div>{flightName}</div>
        <div className="ml-10">Date: {date} </div>
        <div className="ml-10 flex flex-col sm:hidden">
          <div>From: {airportFrom?.slice(0, 15) + "..."} </div>
          <div>To: {airportTo?.slice(0, 15) + "..."}</div>
        </div>
        <div className="ml-10 hidden sm:flex sm:flex-col">
          <div>From: {airportFrom}</div>
          <div>To: {airportTo}</div>
        </div>
      </div>
      <div className="flex flex-row ml-20 xl:ml-36">
        <div>Flight Cost</div>
        <div>Book flight</div>
      </div>
    </div>
  );
};

export default Results;
