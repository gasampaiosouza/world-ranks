import SearchIcon from 'public/Search.svg';

const Searchbar = () => {
  return (
    <div className="bg-[#282B30] rounded-lg w-[350px] flex gap-4 items-center justify-center px-3">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search by name, region, subregion"
        className="bg-transparent py-3 text-[#D2D5DA] w-full outline-none text-sm placeholder:text-[#6C727F]"
        spellCheck={false}
      />
    </div>
  );
};

export default Searchbar;
