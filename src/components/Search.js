import { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState(null);

  const [searchResults, setSearchResults] = useState(null);

  console.log("state" + search);

  useEffect(() => {
    console.log("fetch");
    fetch(`http://localhost:9292/search/${search}`)
      .then((r) => r.json())
      .then((d) => {
        //   setSearchResults(d);
        console.log(d);
      });
  }, [search]);

  function handleSubmit(e) {
    console.log("submit");
    e.preventDefault();
    let string = `value=${e.target.class.value}&search=${e.target.term.value}`;
    setSearch(string);
  }

  // if (e.target.class.value === "Artist") {
  //   let string = `artist_search=${e.target.term.value}`;
  //   setSearch(string);
  // } else if (e.target.class.value === "Album") {
  //   let string = `album_search=${e.target.term.value}`;
  //   setSearch(string);
  // }

  let searchForm = (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <select required name="class" defaultValue="-----">
        <option value="Artist">Artist</option>
        <option value="Album">Album</option>
      </select>
      <input
        name="term"
        type="text"
        placeholder="Type Search Term Here"
        required
      ></input>
      <button>Search!</button>
    </form>
  );

  return searchForm;
}

export default Search;
