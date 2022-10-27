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
        class="btn .btn-outline-success"
      >
        Home
      </button>
      <button
        value="search"
        onClick={() => navigate("/search/")}
        class="btn .btn-outline-success"
      >
        Search
      </button>
      <button
        value="filter"
        onClick={() => setDisplay(1)}
        class="btn .btn-outline-success"
      >
        Filter
      </button>
      <button
        value="random"
        onClick={(e) => handleRandom(e)}
        class="btn .btn-outline-success"
      >
        Random
      </button>
      <button
        onClick={() => navigate("/most_listens/")}
        class="btn .btn-outline-success"
      >
        Most Listens
      </button>
    </>
  );
}

export default Buttons;
