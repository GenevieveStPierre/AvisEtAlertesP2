import React from "react";

function Search({ query, onChange }) {
  return (
    <div className="flex items-center bg-white border border-gray-400 rounded-full  w-1/3 p-2">
      {" "}
      <input
        type="text"
        placeholder="Que cherchez-vous?"
        value={query}
        onChange={onChange}
        className="bg-transparent text-gray-400 placeholder-gray-400 focus:outline-none w-full"
      />
    </div>
  );
}

export default Search;
