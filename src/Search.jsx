import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          id="name-field"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button>Search</button>
      </form>
    </>
  );
}

export default Search;
