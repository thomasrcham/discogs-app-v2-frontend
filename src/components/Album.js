import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AlbumContainer({ selectedAlbum, backend }) {
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
        <p style={{ fontSize: "large" }}>
          Released in {displayAlbum.year} <br />
          Last Listened to on PLACEHOLDER
        </p>
        <p style={{ fontSize: "small" }}>SEE ALL LISTENS</p>
      </div>
    </div>
  ) : null;
}

export default AlbumContainer;
