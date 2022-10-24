import { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import AlbumContainer from "./Album.js";
import Form from "./Form.js";

function Site() {
  const backend = "http://localhost:9292/";
  const [albumTitles, setAlbumTitles] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${backend}/albums`)
      .then((r) => r.json())
      .then((d) => {
        setAlbumTitles(d);
      });
  }, []);

  function handleSelect(e) {
    e.preventDefault();
    navigate(`/albums/:${e.target.title.value}`);
    setSelectedAlbum(e.target.title.value);
  }

  let selections = albumTitles
    ? albumTitles.map((a) => (
        <option value={a[0]} key={a[0]}>
          {a[1]}
        </option>
      ))
    : null;

  return (
    <>
      <div class="header">TITLE</div>
      <div class="main-window">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Form handleSelect={handleSelect} selections={selections} />
            }
          />
          <Route
            path="/albums/*"
            element={
              <AlbumContainer backend={backend} selectedAlbum={selectedAlbum} />
            }
          />
        </Routes>
      </div>
    </>
  );
}
export default Site;
