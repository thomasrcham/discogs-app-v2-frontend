import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Site() {
  const backend = "http://localhost:9292/";
  const [albumTitles, setAlbumTitles] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${backend}/albums`)
      .then((r) => r.json())
      .then((d) => {
        setAlbumTitles(d);
      });
  }, []);

  function handleSelect(e) {
    e.preventDefault();
    navigate(`albums/${e.target.title.value}`);
  }

  let selections = albumTitles
    ? albumTitles.map((a) => (
        <option value={a[0]} key={a[0]}>
          {a[1]}
        </option>
      ))
    : null;

  return (
    <form onSubmit={(e) => handleSelect(e)}>
      <select name="title">{selections}</select>
      <button type="Submit">Select</button>
    </form>
  );
}
export default Site;
