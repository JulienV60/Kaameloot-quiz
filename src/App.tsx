import React from "react";
import FlashCardOne from "./FlashCard";
import InputText from "./Input";
import Checkbox from "./Checkbox";
import "./index.css";
export const App: React.FC = () => {
  const [elementSelect, setElementSelect] = React.useState(<></>);

  const audio = new Audio(require("./Kaamelott.mp3"));
  const start = () => {
    audio.play();
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-static">
        <a className="navbar-brand user-select-none" onClick={start}>
          Quiz Kaamelott
        </a>

        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                className="nav-link user-select-none"
                onClick={() => setElementSelect(<FlashCardOne />)}
              >
                FlashCard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link user-select-none"
                onClick={() => setElementSelect(<InputText />)}
              >
                Tap your Answer
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link user-select-none"
                onClick={() => setElementSelect(<Checkbox />)}
              >
                Multiple Choice
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div>{elementSelect}</div>
    </div>
  );
};
export default App;
