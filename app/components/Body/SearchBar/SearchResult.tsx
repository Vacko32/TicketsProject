import React from "react";

interface SearchResultProps {
  result: any;
  code: any;
}

const SearchResult: React.FC<SearchResultProps> = ({ result, code }) => {
  return (
    <div className="text-white flex flex-row gap-2">
      <div>{code}</div>
      <div>{result.slice(0, 30)}</div>
    </div>
  );
};

export default SearchResult;
