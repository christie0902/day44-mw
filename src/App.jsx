import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const loadData = async (searchQuery) => {
    if (!searchQuery) return;
    const r = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}`
    );
    const data = await r.json();
    setSearchResults(data.query.search);
  };

  useEffect(() => {
    loadData(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} searchResults={searchResults} />
    </>
  );
}

export default App;
