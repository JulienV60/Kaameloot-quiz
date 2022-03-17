import React from "react";
import { allQuestions } from "./data/Kaameloot.js";

const FlashCardOne = (): JSX.Element => {
  const [question, setQuestion] = React.useState(false);
  const [otherQuestion, setOtherQuestion] = React.useState(false);
  const [right, setRight] = React.useState(true);
  const [wrong, setWrong] = React.useState(false);

  React.useEffect(() => {
    function ButtonQuestion() {
      const oneQuestion = allQuestions.map((element: any) => {
        return element;
      });
      const randomSuiteQuestion =
        oneQuestion[Math.floor(Math.random() * oneQuestion.length)];
      setQuestion(randomSuiteQuestion.question);
    }
    ButtonQuestion();
  }, []);

  function changeQuestion(event: any) {
    console.log(allQuestions.length);
    const oneQuestion = allQuestions.map((element: any) => {
      return element;
    });
    const randomSuiteQuestion =
      oneQuestion[Math.floor(Math.random() * oneQuestion.length)];

    if (otherQuestion !== false) {
      setQuestion(true);
      setOtherQuestion(randomSuiteQuestion.question);
    } else {
      setOtherQuestion(true);
    }
  }

  function Checkifgoodanswer(event: any) {
    const result = event.target.value;
    console.log(result);
  }

  return (
    <div>
      <h1>Kaamelott</h1>
      <button onClick={changeQuestion}>
        Question:
        <p>{question}</p>
        <p>{otherQuestion}</p>
      </button>
      {/* <form>
        <input onChange={Checkifgoodanswer} type="text"></input>
      </form> */}
    </div>
  );
};

export default FlashCardOne;
