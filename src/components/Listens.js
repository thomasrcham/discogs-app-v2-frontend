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
        <tr>
          <td>
            {format(new Date(listen.updated_at), "MMMM dd, yyyy @ h:mm aaa")}
          </td>
          <td>
            <button value="delete" onClick={(e) => handleDelete(listen.id)}>
              Delete this Listen!
            </button>
          </td>
        </tr>
      ))
    : null;

  return (
    <h2>
      {allListensArray && allListensArray.length > 0
        ? "Here are the " +
          allListensArray.length +
          " times you've listened to " +
          allListensArray[0].album.name +
          ":"
        : "You've never listened to this? That's crazy!"}

      <table>
        <tbody>
          <tr>
            <td>{thing}</td>
          </tr>
        </tbody>
      </table>
    </h2>
  );
}

export default Listens;
