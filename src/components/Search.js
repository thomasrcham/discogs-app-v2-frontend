import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";

function Search() {
  const [search, setSearch] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/search/${search}`)
      .then((r) => r.json())
      .then((d) => {
        setSearchResults(d);
      });
  }, [search]);

  function handleSubmit(e) {
    console.log("submit");
    e.preventDefault();
    let string = `value=${e.target.class.value}&search=${e.target.term.value}`;
    setSearch(string);
    navigate(`/search/${string}`);
  }

  let searchForm = (
    <div class="search-container">
      <form
        class="form-group"
        id="search-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-3">
            <select
              required
              name="class"
              defaultValue="-----"
              class="form-select"
            >
              <option value="Artist">Artist</option>
              <option value="Album">Album</option>
            </select>
          </div>

          <div class="col-sm-5">
            <input
              aria-describedby="searchBlock"
              class="form-control"
              name="term"
              type="text"
              placeholder="Type Search Term Here"
              required
            ></input>
          </div>
          <div class="col-sm-1">
            <button type="submit" class="btn btn-success">
              Search!
            </button>
          </div>
          <div class="col-sm-1">
            <button type="reset" class="btn btn-success">
              Reset!
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <>
      {searchForm}
      {searchResults ? <SearchResults searchResults={searchResults} /> : null}
    </>
  );
}

export default Search;
