import { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

import MainWindow from "./MainWindow.js";
import Buttons from "./Buttons.js";

function Site() {
  const [albumTitles, setAlbumTitles] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [display, setDisplay] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/albums`)
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

  function handleRandom(e) {
    e.preventDefault();
    let rand = Math.floor(1 + Math.random() * (albumTitles.length - 1));
    setSelectedAlbum(rand);
    navigate(`/albums/:${rand}`);
  }

  function returnHome() {
    setSelectedAlbum(null);
    navigate("/");
  }

  let selections = albumTitles
    ? albumTitles.map((a) => (
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
                setDisplay={setDisplay}
              />
            }
          </div>
        </div>
      </div>
      <div className="main-window">
        <MainWindow
          handleSelect={handleSelect}
          selections={selections}
          display={display}
          selectedAlbum={selectedAlbum}
        />
      </div>
    </>
  );
}
export default Site;
