import { useNavigate, Route, Routes } from "react-router-dom";
import AlbumContainer from "./AlbumContainer.js";
import MostListens from "./MostListens.js";
import Listens from "./Listens.js";
import Form from "./Form.js";

function MainWindow({
  handleSelect,
  selectedAlbum,
  selections,
  setSelectedAlbum,
  display,
}) {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <button onClick={() => navigate("/most_listens/")}>most</button>
      <Routes>
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
          path="/listens/:id"
          element={<Listens selectedAlbum={selectedAlbum} />}
        />
        <Route path="/most_listens/" element={<MostListens />} />

        <Route
          path="/albums/*"
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
