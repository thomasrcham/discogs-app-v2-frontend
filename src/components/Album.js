import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { format } from "date-fns";

function AlbumContainer({ selectedAlbum, backend, setSelectedAlbum }) {
  const navigate = useNavigate();
  const [displayAlbum, setDisplayAlbum] = useState(null);

  useEffect(() => {
    selectedAlbum
      ? fetch(`${backend}albums/${selectedAlbum}`)
          .then((r) => r.json())
          .then((d) => {
            console.log(d);
            setDisplayAlbum(d);
          })
      : navigate("/");
  }, []);

  let displayListen =
    displayAlbum && displayAlbum.latest_listen ? (
      <>
        <p style={{ fontSize: "medium" }}>
          You last listened to this record on{" "}
          {format(new Date(displayAlbum.latest_listen), "MM/dd/yyyy")}.
        </p>
        <p
          onClick={() => {
            navigate(`/listens/${selectedAlbum}`);
          }}
          style={{ fontSize: "small" }}
        >
          SEE ALL LISTENS
        </p>
      </>
    ) : null;

  return displayAlbum ? (
    <div className="album-window">
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
    </div>
  ) : null;
}

export default AlbumContainer;
