import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";

function AlbumContainer({ selectedAlbum }) {
  const navigate = useNavigate();
  const [displayAlbum, setDisplayAlbum] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/albums/${id}`)
      .then((r) => r.json())
      .then((d) => setDisplayAlbum(d));
  }, [selectedAlbum]);

  function handleNewListen() {
    // let date = new Date().toJSON().slice(0, 10);
    // let time = new Date().toTimeString().slice(0, 8);
    let dateTime = new Date().toJSON();
    // date + " " + time;
    fetch(`http://localhost:9292/listens/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        album_id: id,
        dateTime: dateTime,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        let newDisplay = { ...displayAlbum };
        newDisplay.latest_listen = dateTime;
        setDisplayAlbum(newDisplay);
      });
  }

  let displayListen =
    displayAlbum && displayAlbum.latest_listen ? (
      <>
        <p style={{ fontSize: "medium" }}>
          You last listened to this record on{" "}
          {format(new Date(displayAlbum.latest_listen), "MM/dd/yyyy")}.
        </p>
        <div>
          <p
            className="listens-text"
            onClick={(e) => handleNewListen()}
            style={{ fontSize: "small" }}
          >
            ADD A NEW LISTEN!
          </p>
          <p
            className="listens-text"
            onClick={() => {
              navigate(`/listens/${id}`);
            }}
            style={{ fontSize: "small" }}
          >
            SEE ALL PREVIOUS LISTENS!
          </p>
        </div>
      </>
    ) : null;

  return displayAlbum ? (
    <>
      <div
        class="card mb-3 left"
        // style={{max-width: "540px"}}
      >
        <div className="row g-0 artist-row">
          <div className="col-md-4">
            <img
              src={displayAlbum.cover_image}
              alt={displayAlbum.name}
              class="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-5 artist-info">
            <p style={{ fontSize: "largest" }}>
              {displayAlbum.artist.name === "Various"
                ? "Various Artists"
                : displayAlbum.artist.name}
              <br />
              {displayAlbum.name}
            </p>
            <span style={{ fontSize: "medium" }}>
              Released in {displayAlbum.year}
            </span>
            {displayListen}
          </div>
        </div>
      </div>
      {/* <div className="album-window">
        <div className="cover">
          <img
            src={displayAlbum.cover_image}
            alt={displayAlbum.name}
            className="cover-image"
          />
        </div>
        <div className="artist-info">
          <p style={{ fontSize: "largest" }}>
            {displayAlbum.artist.name === "Various"
              ? "Various Artists"
              : displayAlbum.artist.name}
            <br />
            {displayAlbum.name}
          </p>
          <span style={{ fontSize: "medium" }}>
            Released in {displayAlbum.year}
          </span>
          {displayListen}
        </div>
      </div> */}
    </>
  ) : null;
}

export default AlbumContainer;
