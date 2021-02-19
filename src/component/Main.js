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

  let listArray = [
    state.length > 1 && state[randomNumber + 1].name,
    state.length > 1 && state[randomNumber + 10].name,
    state.length > 1 && state[randomNumber + 20].name,
    country.name,
  ];
  const shuffleArray = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length);

        [arr[i], arr[rand]] = [arr[rand], arr[i]];

    }
    return arr;
}
  return (
    <div>
      {console.log(state, country)}
      <h3>{country.capital} is the capital of</h3>
      <ul>
        {/* {console.log("Test",shuffleArray(listArray))} */}
        {shuffleArray(listArray).map((arr) => <li onClick={check}>{arr}</li>
        )}
      </ul>
    </div>
  );

  function check(e){
    let value = e.target.innerHTML;
    if(value === country.name){
      alert('you are right')
    }else{
      alert('wrong answer')
    }
  }
}

export default Main;
