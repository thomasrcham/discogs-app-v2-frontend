import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AlbumContainer from "./AlbumContainer.js";
import MostListens from "./MostListens.js";
import Listens from "./Listens.js";
import Search from "./Search.js";
import Artist from "./Artist.js";
import Display from "./Display.js";

function MainWindow({
  handleAlbumSelect,
  handleArtistSelect,
  selectedAlbum,
  albumSelections,
  artistSelections,
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
            <Display
              handleAlbumSelect={handleAlbumSelect}
              albumSelections={albumSelections}
              handleArtistSelect={handleArtistSelect}
              artistSelections={artistSelections}
            />
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
