import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Artist() {
  const [artistArray, setArtistArray] = useState(null);
  const [albumArray, setAlbumArray] = useState(null);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    console.log("fetch");
    fetch(`http://localhost:9292/artists/${id}`)
      .then((r) => r.json())
      .then((d) => {
        setArtistArray(d);
        console.log(d);
      })
      .then(
        fetch(`http://localhost:9292/artistAlbum/${id}`)
          .then((r) => r.json())
          .then((d) => {
            setAlbumArray(d);
            console.log(d);
          })
      );
  }, []);

  // let artistDisplay =
  // artistArray
  // ? artistArray.albums.map((a) => (
  //     <div class="card card border-secondary" style={{ width: "18rem" }}>
  //       <img src={a.cover_image} class="card-img-top" alt={a.name} />
  //       <div class="card-body">
  //         <h5 class="card-title">{a.name}</h5>

  //         <div class="card-text">
  //           <span class="listens-text">Released in: {a.year}</span>
  //           <br />
  //           <span
  //             class="listens-text"
  //             onClick={() => navigate(`/albums/${a.id}`)}
  //           >
  //             Go to Album Page
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //   ))
  // :
  // null;

  return "artist";
  // <div className="most-listens-window">{artistDisplay}</div>;
}
export default Artist;
