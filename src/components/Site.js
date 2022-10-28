import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MainWindow from "./MainWindow.js";
import Buttons from "./Buttons.js";

function Site() {
  const [albumTitles, setAlbumTitles] = useState(null);
  const [artistNames, setArtistNames] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/albums`)
      .then((r) => r.json())
      .then((d) => {
        setAlbumTitles(d);
      })
      .then(
        fetch(`http://localhost:9292/artists`)
          .then((r) => r.json())
          .then((d) => {
            setArtistNames(d);
          })
      );
  }, []);

  function handleAlbumSelect(e) {
    e.preventDefault();
    navigate(`/albums/${e.target.albumTitle.value}`);
    setSelectedAlbum(e.target.albumTitle.value);
  }

  function handleArtistSelect(e) {
    e.preventDefault();
    navigate(`/artists/${e.target.artistName.value}`);
  }

  function handleRandom(e) {
    e.preventDefault();
    let rand = Math.floor(1 + Math.random() * (albumTitles.length - 1));
    setSelectedAlbum(rand);
    navigate(`/albums/${rand}`);
  }

  function returnHome() {
    setSelectedAlbum(null);
    navigate("/");
  }

  let albumSelections = albumTitles
    ? albumTitles.map((a) => (
        <option value={a[0]} key={a[0]}>
          {a[1].length > 30 ? a[1].substring(0, 30) + "..." : a[1]}
        </option>
      ))
    : null;

  let artistSelections = artistNames
    ? artistNames.map((a) => (
        <option value={a[0]} key={a[0]}>
          {a[1].length > 30 ? a[1].substring(0, 30) + "..." : a[1]}
        </option>
      ))
    : null;

  return (
    <>
      <div className="header">
        TITLE
        <div className="buttons-container">
          <div className="buttons">
            {
              <Buttons
                handleRandom={handleRandom}
                returnHome={returnHome}
                selectedAlbum={selectedAlbum}
              />
            }
          </div>
        </div>
      </div>
      <div className="main-window">
        <MainWindow
          albumSelections={albumSelections}
          artistSelections={artistSelections}
          handleAlbumSelect={handleAlbumSelect}
          handleArtistSelect={handleArtistSelect}
          selectedAlbum={selectedAlbum}
        />
      </div>
    </>
  );
}
export default Site;
