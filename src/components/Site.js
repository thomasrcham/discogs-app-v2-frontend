import { useState, useEffect } from "react";

function Site() {
  const backend = "http://localhost:9292";
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    fetch(`${backend}/albums`)
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setAlbums(d);
      });
  }, []);
}

export default Site;
