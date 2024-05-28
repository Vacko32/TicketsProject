import { validateHeaderValue } from "http";
import React from "react";

interface DepartureInputProps {
  value: string;
  onChange: (value: string) => void;
}

const From: React.FC<DepartureInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <div className="text-white">
        <input
          type="text"
          placeholder="From:"
          className="w-full border rounded-md p-2"
          value={value}
        ></input>
      </div>
    </div>
  );
};

export default From;
