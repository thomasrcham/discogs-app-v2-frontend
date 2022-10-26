import { useEffect, useState } from "react";
import Form from "./Form.js";

function Display({ handleSelect, selections }) {
  const [displayArray, setDisplayArray] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:9292/display`)
      .then((r) => r.json())
      .then((d) => {
        setDisplayArray(d);
        console.log(d);
      });
  }, []);

  return <Form handleSelect={handleSelect} selections={selections} />;
}

export default Display;
