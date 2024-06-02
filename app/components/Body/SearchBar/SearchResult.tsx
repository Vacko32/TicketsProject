import React from "react";

interface SearchResultProps {
  result: any;
  code: any;
  setValue: any;
}

const SearchResult: React.FC<SearchResultProps> = ({
  result,
  code,
  setValue,
}) => {
  const handleClick = () => {
    setValue(result);
    console.log("clicked");
  };
  return (
    <div
      className="text-white flex flex-row gap-2 p-2 hover:bg-sushiblue hover:text-sushidarkblue cursor-pointer transition duration-1000 ease-in-out"
      onClick={handleClick}
    >
      <div onClick={handleClick}>{code}</div>
      <div onClick={handleClick}>{result.slice(0, 30)}</div>
    </div>
  );
};

export default SearchResult;
