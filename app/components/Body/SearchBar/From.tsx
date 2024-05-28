import React from "react";

interface DepartureInputProps {
  children: React.ReactNode;
}

const From: React.FC<DepartureInputProps> = ({ children }) => {
  return (
    <div>
      <div className="text-white">
        <div>{children}</div>
        <input
          type="text"
          placeholder=""
          className="w-full border rounded-md bg-sushigray border-slate-700 text-white"
        ></input>
      </div>
    </div>
  );
};

export default From;
