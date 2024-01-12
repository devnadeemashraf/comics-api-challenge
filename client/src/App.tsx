import { useEffect, useState } from "react";
import { getComicByID } from "./http";

function App() {
  const [test, setTest] = useState({});

  useEffect(() => {
    getComicByID({ id: "1" })
      .then((res) => {
        setTest(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <h1>Hello from APP</h1>
      {JSON.stringify(test)}
    </>
  );
}

export default App;
