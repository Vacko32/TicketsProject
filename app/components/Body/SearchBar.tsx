import From from "./SearchBar/From";
import Switch from "./SearchBar/Switch";

const SearchBar = () => {
  return (
    <div>
      <div className="mt-10 text-white">Find Your Ticket</div>
      <div className="rounded-lg border bg-sushigray opacity-90 border-slate-700 mt-2 pb-10">
        <div className="flex flex-row gap-5 sm:gap-20 md:gap-32">
          <From>From:</From>
          <div className="mt-6">
            <Switch />
          </div>
          <From>To:</From>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
