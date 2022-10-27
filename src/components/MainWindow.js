import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AlbumContainer from "./AlbumContainer.js";
import MostListens from "./MostListens.js";
import Listens from "./Listens.js";
import Display from "./Display.js";
import Search from "./Search.js";
import Artist from "./Artist.js";

function MainWindow({
  handleSelect,
  selectedAlbum,
  selections,
  setSelectedAlbum,
}) {
  const [key, setKey] = useState(0);

  return (
    <>
      {" "}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Display handleSelect={handleSelect} selections={selections} />
          }
        />
        <Route
          path="/search/*"
          element={<Search key={key} setKey={setKey} />}
        />
        <Route
          path="/listens/:id"
          element={<Listens selectedAlbum={selectedAlbum} />}
        />
        <Route path="/most_listens/" element={<MostListens />} />
        <Route path="/artists/:id" element={<Artist />} />
        <Route
          path="/albums/:id"
          element={
            <AlbumContainer
              selectedAlbum={selectedAlbum}
              setSelectedAlbum={setSelectedAlbum}
            />
          }
        />
      </Routes>
    </>
  );
}

export default MainWindow;
