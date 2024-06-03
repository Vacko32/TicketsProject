import { Button } from "@/components/ui/button";
import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchButtonProps {
  date?: Date;
  from?: string;
  to?: string;
  passengers?: number;
  economy?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  date,
  from,
  to,
  passengers,
  economy,
}) => {
  return (
    <div>
      <Button variant="default" className="pl-5 pr-5">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        Search
      </Button>
    </div>
  );
};

export default SearchButton;
