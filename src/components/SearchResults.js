import { useNavigate, useParams } from "react-router-dom";

function SearchResults({ searchResults }) {
  const navigate = useNavigate();
  let params = useParams();
  console.log(params["*"].toString().charAt(6));

  let searchResultsDisplay = searchResults
    ? params["*"].toString().charAt(6) === "A"
      ? searchResults.map((r) => (
          <li
            class="list-group-item"
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
          <li class="list-group-item left" key={r.id}>
            {r.name} -{" "}
            <span
              className="listens-text"
              onClick={() => {
                navigate(`/albums/${r.id}`);
              }}
              style={{ fontSize: "#d9d5cc" }}
            >
              Owned Albums
            </span>
          </li>
        ))
    : null;

  return searchResults ? (
    searchResults.length === 0 ? (
      "No matches found!"
    ) : (
      <ul class="list-group list-group-flush left">{searchResultsDisplay}</ul>
    )
  ) : null;
}

export default SearchResults;
