import { useNavigate, useParams } from "react-router-dom";

function SearchResults({ searchResults }) {
  const navigate = useNavigate();
  let params = useParams();
  console.log(searchResults);

  let searchResultsDisplay = searchResults
    ? params["*"].toString().charAt(7) === "r"
      ? searchResults.map((r) => (
          <li
            class="list-group-item left"
            style={{ backgroundColor: "#d9d5cc" }}
            key={r.id}
          >
            {r.name} -{" "}
            <span
              className="listens-text"
              onClick={() => {
                navigate(`/artists/${r.id}`);
              }}
              style={{ fontSize: "small" }}
            >
              Owned Albums
            </span>
          </li>
        ))
      : searchResults.map((r) => (
          <li
            class="list-group-item left"
            style={{ backgroundColor: "#d9d5cc" }}
            key={r.id}
          >
            {r.artist.name === "Various" ? "Various Artists" : r.artist.name} -{" "}
            {r.name} -{" "}
            <span
              className="listens-text"
              onClick={() => {
                navigate(`/albums/${r.id}`);
              }}
              style={{ fontSize: "#d9d5cc" }}
            >
              Go to Album Page
            </span>
          </li>
        ))
    : null;

  return searchResults ? (
    searchResults.length === 0 ? (
      "No matches found!"
    ) : (
      <ul
        class="list-group list-group-flush left"
        style={{ backgroundColor: "#d9d5cc" }}
      >
        {searchResultsDisplay}
      </ul>
    )
  ) : null;
}

export default SearchResults;
