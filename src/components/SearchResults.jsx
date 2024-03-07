import React from "react";

const SearchResults = ({ searchQuery, searchResults }) => {
  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, "");
  };

  return (
    <>
      <h1>{searchQuery && <div>Search result for {searchQuery}</div>}</h1>
      {searchResults &&
        searchResults.map((result) => (
          <>
            <a
              href={`https://en.wikipedia.org/wiki/${result.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{result.title}</h3>
            </a>
            <p key={result.pageid}>{stripHtmlTags(result.snippet)}</p>
          </>
        ))}
    </>
  );
};

export default SearchResults;
