import { useNavigate } from "react-router-dom";

function Buttons({ handleRandom, returnHome, selectedAlbum, setDisplay }) {
  const navigate = useNavigate();
  //   return selectedAlbum ? (
  //     <button value="return" onClick={() => returnHome()}>
  //       Back to Home
  //     </button>
  //   ) :
  return (
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
      <button value="search" onClick={() => navigate("/search/")}>
        Search
      </button>
      <button value="filter" onClick={() => setDisplay(1)}>
        Filter
      </button>
      <button value="random" onClick={(e) => handleRandom(e)}>
        Random
      </button>
      <button onClick={() => navigate("/most_listens/")}>Most Listens</button>
    </>
  );
}

export default Buttons;
