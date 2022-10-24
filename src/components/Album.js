import { useEffect, useState } from "react";

function AlbumContainer({ selectedAlbum, backend }) {
  const [displayAlbum, setDisplayAlbum] = useState(null);

  useEffect(() => {
    fetch(`${backend}albums/${selectedAlbum}`)
      .then((r) => r.json())
      .then((d) => {
        setDisplayAlbum(d);
        console.log(d.artist.name);
      });
  }, []);

  return displayAlbum ? (
    <div class="album-window">
      <img src={displayAlbum.cover_image} alt={displayAlbum.name} />
      <br />
      {displayAlbum.artist.name}
      <br />
      {displayAlbum.name}
    </div>
  ) : null;
}

export default AlbumContainer;
