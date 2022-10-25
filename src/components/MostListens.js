import { useEffect, useState } from "react";

function MostListens() {
  const [mostListensArray, setMostListensArray] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9292/most_listens/`)
      .then((r) => r.json())
      .then((d) => {
        setMostListensArray(d);
        console.log(d);
      });
  }, []);

  let mostListensDisplay = mostListensArray
    ? mostListensArray.map((a) => (
        <div classname="most-listens-row">
          <div>
            <img
              src={a[0].cover_image}
              alt={a[0].name}
              className="most-listens-cover"
            />
          </div>
          <div className="most-listens-info">
            <p>{a[0].artist.name}</p>
          </div>
        </div>
      ))
    : null;

  return <div className="most-listens-window">{mostListensDisplay}</div>;
}

export default MostListens;
