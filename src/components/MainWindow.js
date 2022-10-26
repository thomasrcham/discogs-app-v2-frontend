import { useNavigate, Route, Routes } from "react-router-dom";
import AlbumContainer from "./AlbumContainer.js";
import MostListens from "./MostListens.js";
import Listens from "./Listens.js";
import Form from "./Form.js";
import Search from "./Search.js";

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
        <Route path="/search/" element={<Search />} />

        <Route
          path="/listens/:id"
          element={<Listens selectedAlbum={selectedAlbum} />}
        />
        <Route path="/most_listens/" element={<MostListens />} />

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
