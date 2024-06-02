"use client";
import SearchResult from "./SearchResult";
interface SuggestionsProps {
  suggestions: any;
  visibility?: any;
  fromQuerySet: any;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  visibility,
  fromQuerySet,
}) => {
  return (
    visibility && (
      <div className="z-50 bg-sushidarkblue text-white border border-slate-500 rounded-md max-h-32 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-700 overflow-y-scroll shadow-lg">
        {suggestions.map((suggestion: any) => (
          <SearchResult
            key={suggestion.kod_letiste}
            result={suggestion.nazev}
            code={suggestion.kod_letiste}
            setValue={fromQuerySet}
          />
        ))}
      </div>
    )
  );
};

export default Suggestions;
