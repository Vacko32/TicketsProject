import React from "react";
import HotOffers from "./HotOffers";
import SearchBar from "./SearchBar";

const Body = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-sushidarkblue">
      <div>
        <SearchBar />
      </div>
      <div>
        <HotOffers />
      </div>
    </div>
  );
};

export default Body;
