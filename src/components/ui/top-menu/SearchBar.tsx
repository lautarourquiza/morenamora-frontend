'use client'
import React, { useState } from "react";
import "./SearchBar.css"; // Asegúrate de agregar los estilos en un archivo CSS
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e:any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center align-middle h-full w-full">
      <div className="relative w-full bg-gray-200 rounded-md p-3 flex">
        <i className="fa fa-search search-icon"></i> {<IoSearch className="text-pink-300 size-7 mr-3"/>}
        <input
          type="text"
          className="search-input"
          placeholder=" Buscar..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
