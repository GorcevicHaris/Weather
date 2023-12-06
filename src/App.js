import { func } from "prop-types";
import "./App.css";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const api_key = "b95eb0fe5bb1f890189a08ceded58688";
  function getData() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=tutin&units=Metric&appid=${api_key}`
      )
      .then((response) => setData(response.data));
  }
  useEffect(() => {
    getData();
  }, [search]);
  console.log(data);
  return (
    <div className="container">
      <div className="card">
        <div className="top">
          <input></input>
          <button>
            <IoSearchOutline fontSize={25} />
          </button>
        </div>
        <div className="mid"></div>
        <div className="bot"></div>
      </div>
    </div>
  );
}
//

export default App;
