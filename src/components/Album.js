import { useEffect, useState } from "react";

function AlbumContainer({ selectedAlbum, backend }) {
  const [displayAlbum, setDisplayAlbum] = useState(null);

  useEffect(() => {
    fetch(`${backend}albums/${selectedAlbum}`)
      .then((r) => r.json())
      .then((d) => console.log(d));
  }, []);

  return null;
}

export default AlbumContainer;
