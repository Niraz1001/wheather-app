import React from "react";
import { CiSearch } from "react-icons/ci"

const Search = () => {
  return (
    <div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search location..."
            className="w-[40%] py-3 px-4 pr-12 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="absolute bg-[#AD36CB]  ml-[-60px] mt-[5px] text-white py-3 px-4 rounded-full focus:outline-none hover:bg-yellow-400">
            <CiSearch/>
          </button>
        </div>
      </div>
  );
};

export default Search;
