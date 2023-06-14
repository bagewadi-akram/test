import { useEffect, useState } from "react";
import "./App.css";
import Card from "./card";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/get").then((result) => setData(result.data.json));
  }, []);

  return (
    <div className="App">
      <h1>Find The Best  Movies Of This Year.</h1>
      <div className="cardContainer">
        {data.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
