import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffset] = useState(0);

  const loadData = async (searchQuery) => {
    if (!searchQuery) return;
    const r = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`
    );
    const data = await r.json();
    setSearchResults(data.query.search);
  };

  const handleNextPage = () => {
    setOffset(offset + 10);
  };

  const handleLastPage = () => {
    setOffset(offset - 10);
  };

  useEffect(() => {
    loadData(searchQuery);
  }, [searchQuery, offset]);

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} searchResults={searchResults} />
      <button onClick={handleLastPage}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </>
  );
}

export default App;
