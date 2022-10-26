import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Listens({ selectedAlbum }) {
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

  let display = allListensArray ? (
    allListensArray.map((listen) => (
      <tr>
        <td>{format(new Date(listen.updated_at), "MM/dd/yyyy")}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td>"nunya"</td>
    </tr>
  );

  return (
    <h2>
      Here are the times you've listened to{" "}
      {allListensArray ? allListensArray[0].album.name : null}:
      <table>
        <tbody>{display}</tbody>
      </table>
    </h2>
  );
}

export default Listens;
