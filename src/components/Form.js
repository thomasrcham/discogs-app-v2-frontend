function Form({
  handleAlbumSelect,
  handleArtistSelect,
  albumSelections,
  artistSelections,
}) {
  let displayForm = (
    <>
      <div className="form-row row">
        <form onSubmit={(e) => handleArtistSelect(e)}>
          <div className="form-col col">
            <span className="baseline">Artist Select: </span>
            <select
              name="artistName"
              className="form-select"
              style={{ width: "50%" }}
              aria-label="Default select example"
            >
              {artistSelections}
            </select>
            <button type="Submit">Select</button>
          </div>
        </form>
        <form onSubmit={(e) => handleAlbumSelect(e)}>
          <div className="form-col col">
            <span className="baseline">Album Title Select: </span>
            <select
              name="albumTitle"
              className="form-select"
              style={{ width: "50%" }}
              aria-label="Default select example"
            >
              {albumSelections}
            </select>
            <button type="Submit">Select</button>
          </div>
        </form>
      </div>
    </>
  );
  //   }
  return displayForm;
}

export default Form;
