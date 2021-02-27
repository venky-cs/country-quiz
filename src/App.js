import logo from "./undraw_adventure_4hum 1.svg";
import "./App.css";
import Main from "./component/Main";
import React,{ useState,useEffect} from 'react'

import { BarLoader, RotateLoader, FadeLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setLoading(true);
    }, [1000]);
  }, [])
  return (
    <>
      <div className="app">
        {
          loading === false ?<FadeLoader loading />
        :
        <div className="main">
          <div className="heading">
            <h3 className="title">country quiz</h3>
            <img src={logo} alt="logo" />
          </div>
          <Main />
        </div>
}
      </div>
      <footer>
        <p>created by venky -devchallenges.io</p>
      </footer>
    </>
  );
}

export default App;
