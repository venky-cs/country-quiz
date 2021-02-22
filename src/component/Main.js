import React, { useState, useEffect } from "react";
import axios from "axios";
import End from './End';

function Main() {
  const [state, setState] = useState([]);
  const [country, setCountry] = useState({});

  const[game,setGame]= useState(0);
  const [score,setScore]=useState(0);

  let randomNumber = Math.floor(Math.random(5) * 200);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setState(res.data);
      setCountry(res.data[randomNumber]);
    });
  }, [game]);

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
  };
  return (
  <>
    {
      (game < 5) ?
    <div className="section">
      {console.log(state, country)}
      <h3>{country.capital} is the capital of</h3>
      <ol type="A">
        {/* {console.log("Test",shuffleArray(listArray))} */}
        {shuffleArray(listArray).map((arr, index) => (
          <li id={index} key={index} onClick={check}>
            {arr}
          </li>
        ))}
      </ol>
    </div>
    : <End score={score}/>
    }
    </>
  );

  function check(e) {
    let value = e.target.innerHTML;
    let color = document.getElementById(e.target.id);

    if (value === country.name) {
      color.style.color = "green";
      setScore(prevState => prevState+1)
    } else {
      color.style.color = "red";
    }
    setGame(prevState => prevState+1)
  }
}

export default Main;
