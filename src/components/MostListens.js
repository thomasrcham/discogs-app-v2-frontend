import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MostListens() {
  const [mostListensArray, setMostListensArray] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/most_listens/`)
      .then((r) => r.json())
      .then((d) => {
        setMostListensArray(d);
      });
  }, []);

  let mostListensDisplay = mostListensArray
    ? mostListensArray.map((a) => (
        <div class="card card border-secondary" style={{ width: "18rem" }}>
          <img src={a[0].cover_image} class="card-img-top" alt={a[0].name} />
          <div class="card-body">
            <h5 class="card-title">
              {a[0].artist.name === "Various"
                ? "Various Artists"
                : a[0].artist.name}{" "}
              - {a[0].name}
            </h5>

            <div class="card-text">
              <span>Total Listens: {a[1]}</span>
              <br />
              <span
                class="listens-text"
                onClick={() => navigate(`/albums/${a[0].id}`)}
              >
                Go to Album Page
              </span>
            </div>
          </div>
        </div>
      ))
    : null;

  return <div className="most-listens-window">{mostListensDisplay}</div>;
}

export default MostListens;
