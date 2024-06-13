import React from "react";

interface TicketInfo {
  flightName: string;
  class: string;
  timeTakeOff: string;
  timeLanding: string;
  company: string;
  flightCost: number;
}

const Results: React.FC<TicketInfo> = () => {
  return (
    <div className="bg-gradient-to-r from-20% from-blue-950  to-purple-900 flex flex-row border border-slate-900 rounded-2xl text-white shadow-2xl h-20 mb-20">
      <div className="flex flex-row mr-20 xl:mr-36">
        <div>Name of the flight</div>
        <div> Description </div>
      </div>
      <div className="flex flex-row ml-20 xl:ml-36">
        <div> Flight Cost</div>
        <div> Book flight </div>
      </div>
    </div>
  );
};

export default Results;
