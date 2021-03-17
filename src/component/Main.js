import React, { useState, useEffect } from "react";
import axios from "axios";
import End from "./End";

import { BarLoader, RotateLoader, FadeLoader } from "react-spinners";

function Main() {
  const [state, setState] = useState([]);
  const [country, setCountry] = useState({});

  const [game, setGame] = useState(0);
  const [list, setList] = useState([]);
  const [score, setScore] = useState(0);
  const [click, setClick] = useState(true);
  const [validate, setValidate] = useState(false);

  const [change, setChange] = useState(false);

  let randomNumber = Math.floor(Math.random(5) * 200);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setState(res.data);
      setCountry(res.data[randomNumber]);
    });
  }, [game]);

  function random() {
    let li = [
      state.length > 1 && state[randomNumber + 1].name,
      state.length > 1 && state[randomNumber + 10].name,
      state.length > 1 && state[randomNumber + 20].name,
      country.name,
    ];

    for (let i = 0; i < li.length; i++) {
      let rand = Math.floor(Math.random() * li.length);
      [li[i], li[rand]] = [li[rand], li[i]];
    }

    return setList(li);
  }

  useEffect(async () => {
    await random();
    // console.log(country)
  }, [state, country]);
  return (
    <>
        <>
          {game < 5 ? (
            <>
              {change ? (

                <div className="section">
                  {/* {console.log(state, country)} */}
                  {country.capital ?
                  <>
                  <h3>{country.capital} is the capital of</h3>
                  <ol type="A">
                    {list.map((arr, index) => (
                      <li id={index} key={index} onClick={click ? check : null}>
                        {arr}
                      </li>
                    ))}
                  </ol>
                  {validate && (
                    <button className="next" onClick={next}>
                      Next
                    </button>
                  )}
                  </>: <h3>Loading...</h3>}
                </div>
              ) : (
                <div className="section">
                  {/* {console.log(country)} */}
                  {country.flag ?
                  <>
                  <img className="flag" src={country.flag} alt="" />
                  <h3>
                    which country does this flag
                    <br /> belong to?
                  </h3>
                  <ol type="A">
                    { list.map((arr, index) => (
                      <li id={index} key={index} onClick={click ? check : null}>
                        {arr}
                      </li>
                    ))}
                  </ol>
                  {validate && (
                    <button className="next" onClick={next}>
                      Next
                    </button>
                  )}
                  </>:<h3>Loading...</h3>
}
                </div>
              )}
            </>
          ) : (
            <End score={score} />
          )}
        </>
    </>
  );

  function check(e) {
    setValidate(true);
    e.preventDefault();
    setClick(false);
    let value = e.target.innerHTML;
    // console.log("test", e.target);

    if (value !== country.name) {
      e.target.style.color = "red";
    } else {
      e.target.style.color = "green";
      setScore((prevState) => prevState + 1);
    }
    let x = document.querySelectorAll("li");
    for (let i = 0; i < x.length; i++) {
      if (x[i].innerHTML === country.name) {
        // console.log(x[i]);
        x[i].style.color = "green";
      }
    }
  }

  function next() {
    setClick(true);
    let x = document.querySelectorAll("li");
    for (let i = 0; i < x.length; i++) {
      x[i].style = { color: "#6066d0", hover: "white" };
    }
    setGame((prevState) => prevState + 1);
    setValidate(false);
    setChange((prevState) => !prevState);
    setCountry({})
  }
}

export default Main;
