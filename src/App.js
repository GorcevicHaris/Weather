import { func } from "prop-types";
import "./App.css";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { BsMoisture } from "react-icons/bs";
import { PiWind } from "react-icons/pi";
import { MdSevereCold } from "react-icons/md";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);
  const [fasling, setFalsing] = useState(false);
  const api_key = "b95eb0fe5bb1f890189a08ceded58688";

  function getData() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=${api_key}`
      )
      .then((response) => {
        setData(response.data.wind);
        setDataTemp(response.data.main);
        setFalsing(true);
      })
      .catch(() => {
        console.log("doslo je do greske niste ukucali ispravno grad");
      });
  }

  useEffect(() => {
    setFalsing(false);
  }, [search]);

  console.log(data, "data");
  console.log(dataTemp, "datatemp");

  return (
    <div className="container">
      <div className="card">
        <div className="top">
          <input
            placeholder="Search"
            onChange={(el) => setSearch(el.target.value)}
          ></input>
          <button>
            <IoSearchOutline fontSize={25} onClick={getData} />
          </button>
        </div>
        <div className="mid">
          {dataTemp.temp <= 0 ? (
            <MdSevereCold color="lightblue" fontSize={200} />
          ) : (
            <IoSunny color="yellow" fontSize={200} />
          )}
          {fasling && dataTemp.temp ? (
            <>
              <h1>{`${dataTemp.temp}°`}</h1>
              <h1>{search}</h1>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="bot">
          <div className="div2">
            <div className="sameDiv">
              <BsMoisture color="white" fontSize={40} />
              <h2>{dataTemp.humidity}</h2>
            </div>
            <div className="sameDiv">
              <PiWind color="white" fontSize={50} />
              <h2>{data.speed}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
