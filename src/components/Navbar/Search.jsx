import React from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

export default function Search() {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <div className="w-full max-w-xl">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for products, brands and more"
        className="w-full px-5 py-3 rounded-full 
    bg-gray-100 text-gray-800 
    placeholder-gray-500 
    outline-none border border-gray-200
    focus:border-pink-500 focus:ring-2 focus:ring-pink-200
    transition"
      />
    </div>
  );
}
