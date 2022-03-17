import React from "react";
import FlashCardOne from "./FlashCard";
import { allQuestions } from "./data/Kaameloot.js";
import "./index.css";
export const App: React.FC = () => {
  return (
    <div id="app" className="conainter default-flex">
      <FlashCardOne />
    </div>
  );
};
export default App;
