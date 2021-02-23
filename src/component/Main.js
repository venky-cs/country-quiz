import React, { useState, useEffect } from "react";
import axios from "axios";
import End from "./End";

function Main() {
  const [state, setState] = useState([]);
  const [country, setCountry] = useState({});

  const [game, setGame] = useState(0);
  const [score, setScore] = useState(0);
  const [validate,setValidate] = useState(false);

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
      {game < 5 ? (
        <div className="section">
          {console.log(state, country)}
          <h3>{country.capital} is the capital of</h3>
          <ol type="A">
            {/* {console.log("Test",shuffleArray(listArray))} */}
            {shuffleArray(listArray).map((arr, index) => (
              <li id={index} key={Math.floor(Math.random(index))} onClick={check}>
                {arr}
              </li>
            ))}
          </ol>
          {validate &&
          <button className="next" onClick={next}>Next</button>
          }
        </div>
      ) : (
        <End score={score} />
      )}
    </>
  );

  function check(e) {
    setValidate(true)
    e.preventDefault();
    let value = e.target.innerHTML;
    console.log("test", e.target);

    if (value !== country.name) {
      // setScore((prevState) => prevState + 1);
      e.target.style.color = "red";
    } else {
      e.target.style.color = "green";
      // setScore(prevState => prevState+1)
      // color.style.color = "red";
    }
  }

  function next() {
    let x = document.querySelectorAll("li");
    for (let i = 0; i < x.length; i++) {
      x[i].style.color = "#6066d0";
    }
    setGame((prevState) => prevState + 1);
    setValidate(false);
  }
}

export default Main;
