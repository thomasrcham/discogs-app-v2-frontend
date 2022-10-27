import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Listens() {
  const [allListensArray, setAllListensArray] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/listens/${id}`)
      .then((r) => r.json())
      .then((d) => {
        setAllListensArray(d);
        console.log(d);
      });
  }, []);

  function handleDelete(delId) {
    fetch(`http://localhost:9292/listen_events/${delId}`, {
      method: "DELETE",
    })
      .then(console.log("d"))
      .then(() => {
        let newArray = allListensArray.filter((listen) => listen.id !== delId);
        setAllListensArray(newArray);
      });
  }

  let thing = allListensArray
    ? allListensArray.map((listen) => (
        <li
          class="list-group-item left"
          style={{ backgroundColor: "#d9d5cc" }}
          key={listen.id}
        >
          <span style={{ fontSize: "large" }}>
            {format(new Date(listen.updated_at), "MMMM dd, yyyy @ h:mmaaa")}
          </span>
          <span> --- </span>
          <span
            className="listens-text"
            onClick={(e) => handleDelete(listen.id)}
            style={{ fontSize: "#d9d5cc" }}
          >
            Delete this Listen!
          </span>
        </li>
      ))
    : null;

  return (
    <div>
      <h4>
        {allListensArray && allListensArray.length > 0
          ? "Here are the " +
            allListensArray.length +
            " times you've listened to " +
            allListensArray[0].album.name +
            ":"
          : "You've never listened to this? That's crazy!"}
      </h4>
      <ul
        class="list-group left"
        style={{ width: "40%", left: "20%", backgroundColor: "#d9d5cc" }}
      >
        {thing}
      </ul>
    </div>
  );
}

export default Listens;
