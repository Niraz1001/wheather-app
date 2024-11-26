import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ onSearch }) => {
  const inputRef = useRef(); 
  const handleSearch = () => {
    const city = inputRef.current.value; 
    if (city.trim() !== "") {
      onSearch(city); 
    }
  };

  return (
    <div>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search location..."
          className="w-[40%] py-3 px-4 pr-12 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          className="absolute bg-[#AD36CB] ml-[-60px] mt-[5px] text-white py-3 px-4 rounded-full focus:outline-none hover:bg-yellow-400"
          onClick={handleSearch}
        >
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
