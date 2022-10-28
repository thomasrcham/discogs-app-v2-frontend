import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Artist() {
  // const [artistArray, setArtistArray] = useState(null);
  const [albumArray, setAlbumArray] = useState(null);
  const [artistDetails, setArtistDetails] = useState(null);

  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    // fetch(`http://localhost:9292/artists/${id}`)
    //   .then((r) => r.json())
    //   .then((d) => {
    //     setArtistArray(d);
    //   })
    //   .then(
    fetch(`http://localhost:9292/artistAlbum/${id}`)
      .then((r) => r.json())
      .then((d) => {
        setAlbumArray(d);
      })
      // )
      .then(
        fetch(`http://localhost:9292/artistInfo/${id}`)
          .then((r) => r.json())
          .then((d) => {
            setArtistDetails(d);
            console.log(d);
          })
      );
  }, []);

  let artistName = artistDetails
    ? artistDetails.name.charAt(artistDetails.name.length - 3) === "("
      ? artistDetails.name.substring(0, artistDetails.name.length - 4)
      : artistDetails.name
    : null;

  let artistDetailsDisplay = artistDetails
    ? artistDetails.profile.substring(0, 500)
    : null;

  let artistDisplay = artistDetails ? (
    <div
      className="card artist-info border-secondary"
      style={{ width: "30rem" }}
    >
      <div className="card-body">
        <h3 className="card-title">{artistName}</h3>
        <p className="card-text">
          {artistDetailsDisplay.substr(
            0,
            artistDetailsDisplay.lastIndexOf(".")
          )}
          .
        </p>
        <a
          href={artistDetails.uri}
          target="_blank"
          className="card-link"
          rel="noreferrer"
        >
          Discogs Link
        </a>
      </div>
    </div>
  ) : null;

  let albumDisplay = albumArray
    ? albumArray.map((a) => (
        <div
          className="card card border-secondary album-image"
          style={{ width: "18rem" }}
          key={a.id}
          onClick={() => {
            navigate(`/albums/${a.id}`);
          }}
        >
          <span>
            <img src={a.cover_image} className="card-img-top" alt={a.name} />
          </span>
          <div className="card-body">
            <span>
              <h5 className="card-title album-name">{a.name}</h5>
            </span>

            <div className="card-text">
              <span>Released in: {a.year}</span>
              <br />
            </div>
          </div>
        </div>
      ))
    : null;

  return (
    <>
      <div className="artist-row">{artistDisplay}</div>
      <div className="most-listens-window">{albumDisplay}</div>
    </>
  );
}
export default Artist;
