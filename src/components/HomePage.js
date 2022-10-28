import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [homePageArray, setHomePageArray] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/home_page/`)
      .then((r) => r.json())
      .then((d) => {
        setHomePageArray(d);
      });
  }, []);

  let homePageDisplay = homePageArray
    ? homePageArray.map((a) => (
        <div
          className="card card border-secondary album-image"
          style={{ width: "18rem" }}
          onClick={() => {
            navigate(`/albums/${a.id}`);
          }}
        >
          <img src={a.cover_image} class="card-img-top" alt={a.name} />
          <div className="card-body">
            <h5 className="card-title">
              {a.artist.name === "Various" ? "Various Artists" : a.artist.name}{" "}
              - {a.name}
            </h5>
          </div>
        </div>
      ))
    : null;

  return <div className="most-listens-window">{homePageDisplay}</div>;
}

export default HomePage;
