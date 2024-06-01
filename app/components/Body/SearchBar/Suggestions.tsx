"use client";
import SearchResult from "./SearchResult";

interface SuggestionsProps {
  suggestions: any;
  visibility?: any;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  visibility,
}) => {
  return (
    visibility && (
      <div className="z-50">
        {suggestions.map((suggestion: any) => (
          <SearchResult
            key={suggestion.kod_letiste}
            result={suggestion.nazev}
            code={suggestion.kod_letiste}
          />
        ))}
      </div>
    )
  );
};

export default Suggestions;
