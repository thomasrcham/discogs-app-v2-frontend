import { useNavigate } from "react-router-dom";

function Buttons({ handleRandom }) {
  const navigate = useNavigate();

  return (
    <>
      <button
        value="home"
        onClick={() => {
          navigate("/");
        }}
        className="btn .btn-outline-success"
      >
        Home
      </button>
      <button
        value="search"
        onClick={() => navigate("/search/")}
        className="btn .btn-outline-success"
      >
        Search
      </button>
      {/* <button
        value="filter"
        onClick={() => setDisplay(1)}
        class="btn .btn-outline-success"
      >
        Filter
      </button> */}
      <button
        value="random"
        onClick={(e) => handleRandom(e)}
        className="btn .btn-outline-success"
      >
        Random
      </button>
      <button
        onClick={() => navigate("/most_listens/")}
        className="btn .btn-outline-success"
      >
        Most Listens
      </button>
    </>
  );
}

export default Buttons;
