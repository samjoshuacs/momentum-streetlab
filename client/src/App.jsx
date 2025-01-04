import { useState, useEffect } from "react";
import axios from "axios";
import logoSquare from "./assets/images/logos/logo-square.png";
import "./assets/css/index.css";

function App() {
  const [text, setText] = useState(null);

  const fetchAPI = async () => {
    const res = await axios.get("http://localhost:5000/api");
    setText(res.data.text);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1>{text}</h1>
      <img src={logoSquare} />
    </>
  );
}

export default App;
