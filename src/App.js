import logo from "./undraw_adventure_4hum 1.svg";
import "./App.css";
import Main from "./component/Main";

function App() {
  return (
    <>
      <div className="app">
        <div className="main">
          <div className="heading">
            <h3 className="title">country quiz</h3>
            <img src={logo} alt="logo" />
          </div>
          <Main />
        </div>
      </div>
      <footer>
        <p>created by venky -devchallenges.io</p>
      </footer>
    </>
  );
}

export default App;
