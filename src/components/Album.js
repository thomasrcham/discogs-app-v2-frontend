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

  let displayListen = displayAlbum
    ? format(new Date(displayAlbum.latest_listen), "MM/dd/yyyy")
    : "placeholder";

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
          {displayAlbum.artist.name}
          <br />
          {displayAlbum.name}
        </p>
        <span style={{ fontSize: "medium" }}>
          Released in {displayAlbum.year}
        </span>
        <p style={{ fontSize: "medium" }}>
          You last listened to this record on {displayListen}.
        </p>
        <p
          onClick={() => {
            navigate(`/listens/${selectedAlbum}`);
          }}
          style={{ fontSize: "small" }}
        >
          SEE ALL LISTENS
        </p>
      </div>
    </div>
  ) : null;
}

export default AlbumContainer;
