'use client'
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full max-w-md">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 text-2xl" />
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all"
        />
      </div>
    </div>
  );
};

export default SearchBar;
