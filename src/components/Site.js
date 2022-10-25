import { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import AlbumContainer from "./Album.js";
import Form from "./Form.js";
import MostListens from "./MostListens.js";
import Listens from "./Listens.js";

function Site() {
  const backend = "http://localhost:9292/";
  const [albumTitles, setAlbumTitles] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [display, setDisplay] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${backend}albums`)
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

  let selections = albumTitles
    ? albumTitles.map((a) => (
        <option value={a[0]} key={a[0]}>
          {a[1].length > 30 ? a[1].substring(0, 30) + "..." : a[1]}
        </option>
      ))
    : null;

  let buttonsDisplay = selectedAlbum ? (
    <button
      value="return"
      onClick={() => {
        setSelectedAlbum(null);
        navigate("/");
      }}
    >
      Back to Home
    </button>
  ) : (
    <>
      <button
        value="home"
        onClick={() => {
          navigate("/");
          setDisplay(0);
        }}
      >
        Home
      </button>
      <button value="search" onClick={() => setDisplay(2)}>
        Search
      </button>
      <button value="filter" onClick={() => setDisplay(1)}>
        Filter
      </button>
      <button value="random" onClick={(e) => handleRandom(e)}>
        Random
      </button>
    </>
  );
  return (
    <>
      <div className="header">
        TITLE
        <div className="buttons-container">
          <div className="buttons">{buttonsDisplay}</div>
        </div>
      </div>
      <div className="main-window">
        <button onClick={() => navigate("/most_listens/")}>most</button>
        <Routes>
          <Route
            path="/listens/:id"
            element={
              <Listens selectedAlbum={selectedAlbum} backend={backend} />
            }
          />
          <Route path="/most_listens/" element={<MostListens />} />
          <Route
            exact
            path="/"
            element={
              <Form
                handleSelect={handleSelect}
                selections={selections}
                display={display}
              />
            }
          />
          <Route
            path="/albums/*"
            element={
              <AlbumContainer
                backend={backend}
                selectedAlbum={selectedAlbum}
                setSelectedAlbum={setSelectedAlbum}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}
export default Site;
