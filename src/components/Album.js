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
        <h4>{displayAlbum.artist.name}</h4>
        <p>{displayAlbum.name}</p>
        <p>Released in: {displayAlbum.year}</p>
      </div>
    </div>
  ) : null;
}

export default AlbumContainer;
