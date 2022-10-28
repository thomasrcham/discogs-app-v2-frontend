import Form from "./Form.js";
import HomePage from "./HomePage.js";

function Display({
  handleAlbumSelect,
  albumSelections,
  handleArtistSelect,
  artistSelections,
}) {
  return (
    <div>
      <div>
        <Form
          handleAlbumSelect={handleAlbumSelect}
          albumSelections={albumSelections}
          handleArtistSelect={handleArtistSelect}
          artistSelections={artistSelections}
        />
      </div>
      <div>
        <br />
        <h3 style={{ fontSize: "large" }}>You should listen to these today:</h3>
        <HomePage />
      </div>
    </div>
  );
}

export default Display;
