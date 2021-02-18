import React, { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [state, setState] = useState([]);
  const [country, setCountry] = useState({});
  let randomNumber = Math.floor(Math.random(5) * 200);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setState(res.data);
      setCountry(res.data[randomNumber]);
    });
  }, []);
  return (
    <div>
      {console.log(state, country)}
      <h3>{country.capital} is the capital of</h3>
      <ul>
        <li>{state.length >1 && state[randomNumber+1].name}</li>
        <li>{state.length >1 && state[randomNumber+10].name}</li>
        <li>{country.name}</li>
        <li>{state.length >1 && state[randomNumber+20].name}</li>
      </ul>
    </div>
  );
}

export default Main;
