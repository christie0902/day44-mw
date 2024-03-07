import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter your search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={() => setSearchQuery(searchQuery)}>Search</button>
    </>
  );
};

export default SearchBar;
