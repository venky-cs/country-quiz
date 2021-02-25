import React, { useState, useEffect } from "react";
import axios from "axios";
import End from "./End";

function Main() {
  const [state, setState] = useState([]);
  const [country, setCountry] = useState({});

  const [game, setGame] = useState(0);
  const [list, setList] = useState([])
  const [score, setScore] = useState(0);
  const [click,setClick]=useState(true);
  const [validate,setValidate] = useState(false);

  let randomNumber = Math.floor(Math.random(5) * 200);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setState(res.data);
      setCountry(res.data[randomNumber]);
    });
  }, [game]);

  function random(){
     let li = [
       state.length > 1 && state[randomNumber + 1].name,
       state.length > 1 && state[randomNumber + 10].name,
       state.length > 1 && state[randomNumber + 20].name,
       country.name,
     ];

     for (let i=0; i<li.length; i++){
       let rand = Math.floor(Math.random() * li.length);
       [li[i], li[rand]] = [li[rand], li[i]];
     }

     return setList(li)
  }

  useEffect(async() => {
    await random();
    console.log(country)
  }, [state,country])
  return (
    <>
      {game < 5 ? (
        <div className="section">
          {/* {console.log(state, country)} */}
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
        </div>
      ) : (
        <End score={score} />
      )}
    </>
  );

  function check(e) {
    setValidate(true)
    e.preventDefault();
    setClick(false)
    let value = e.target.innerHTML;
    console.log("test", e.target);

    if (value !== country.name) {
      e.target.style.color = "red";
    } else {
      e.target.style.color = "green";
      setScore(prevState => prevState+1)
      // color.style.color = "red";
    }
    let x = document.querySelectorAll("li");
    for (let i = 0; i < x.length; i++) {
      if(x[i].innerHTML === country.name){
        console.log(x[i]);
        x[i].style.color= "green";
      }
      // x[i].style.color = "#6066d0";
    }
  }

  function next() {
    setClick(true)
    let x = document.querySelectorAll("li");
    for (let i = 0; i < x.length; i++) {
      x[i].style.color = "#6066d0";
    }
    setGame((prevState) => prevState + 1);
    setValidate(false);
  }
}

export default Main;
