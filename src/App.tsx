import React from "react";
import FlashCardOne from "./FlashCard";
import InputText from "./Input";
import Checkbox from "./Checkbox";
import "./index.css";
export const App: React.FC = () => {
  return (
    <div>
      <FlashCardOne />
      <InputText />
      <Checkbox />
    </div>
  );
};
export default App;
