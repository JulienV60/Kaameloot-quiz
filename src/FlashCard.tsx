import React from "react";
import { allQuestions } from "./data/Kaameloot.js";

const FlashCardOne = (): JSX.Element => {
  const [question, setQuestion] = React.useState(false);
  const [idQuestion, setIdQuestion] = React.useState("");
  const [answer, setAnwser] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  React.useEffect(() => {
    function getQuestion() {
      const oneQuestion = allQuestions.map((element: any) => {
        return element;
      });
      const randomSuiteQuestion =
        oneQuestion[Math.floor(Math.random() * oneQuestion.length)];

      const id = randomSuiteQuestion.id;
      setIdQuestion(id);
      setQuestion(randomSuiteQuestion.question);
    }

    getQuestion();
  }, []);

  function getAnwser(event: any) {
    const idresultevent = event.target.id;

    const oneQuestion = allQuestions.map((element: any) => {
      return element;
    });
    const randomSuiteQuestion =
      oneQuestion[Math.floor(Math.random() * oneQuestion.length)];
    setQuestion(randomSuiteQuestion.question);
    const searchbyid = allQuestions.filter((element: any) => {
      return element.id === idresultevent;
    });
    const reponse = searchbyid.map((element: any) => {
      return element.reponse;
    });

    if (answer == false) {
      setAnwser(reponse[0]);
      setQuestion(false);
    } else {
      setAnwser(false);
      setQuestion(randomSuiteQuestion.question);
    }
  }

  return (
    <div>
      <h1>Kaamelott</h1>

      <button
        type="button"
        className="btn btn-primary"
        key={idQuestion}
        id={idQuestion}
        onClick={getAnwser}
      >
        {question}
        {answer}
      </button>

      {/* <form>
        <input onChange={Checkifgoodanswer} type="text"></input>
      </form> */}
    </div>
  );
};

export default FlashCardOne;
