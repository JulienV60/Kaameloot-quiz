import React from "react";
import FlashCardOne from "./FlashCard";

import "./index.css";
import InputText from "./Input";
export const App: React.FC = () => {
  return (
    <div id="app" className="conainter default-flex">
      <FlashCardOne />
      <InputText />
    </div>
  );
};
export default App;
