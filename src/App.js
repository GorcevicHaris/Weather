import { func } from "prop-types";
import "./App.css";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";

function App() {
  const [search, setSearch] = useState("tutin");
  const [data, setData] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);
  const api_key = "b95eb0fe5bb1f890189a08ceded58688";
  function getData() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=${api_key}`
      )
      .then((response) => {
        setData((prev) => [...prev, response.data]);
        setDataTemp(response.data.main);
      })
      .catch(() => {
        console.log("doslo je do greske niste ukucali ispravno grad");
      });
  }
  useEffect(() => {}, [search]);
  console.log(data, "data");
  console.log(dataTemp, "datatemp");
  return (
    <div className="container">
      <div className="card">
        <div className="top">
          <input onChange={(el) => setSearch(el.target.value)}></input>
          <button>
            <IoSearchOutline fontSize={25} onClick={getData} />
          </button>
        </div>
        <div className="mid">
          <IoSunny color="yellow" fontSize={200} />
          <h1>{dataTemp.temp}</h1>
        </div>
        <div className="bot"></div>
      </div>
    </div>
  );
}
//

export default App;
