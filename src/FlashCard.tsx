import React from "react";
import { allQuestions } from "./data/Kaameloot.js";

const FlashCardOne = (): JSX.Element => {
  const [question, setQuestion] = React.useState(false);
  const [idQuestion, setIdQuestion] = React.useState("");
  const [answer, setAnwser] = React.useState(false);

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

    if (answer === false) {
      setAnwser(reponse[0]);
      setQuestion(false);
    } else {
      setAnwser(false);
      setQuestion(randomSuiteQuestion.question);
      const id = randomSuiteQuestion.id;
      setIdQuestion(id);
    }
  }

  return (
    <div className="card text-center text-white bg-dark">
      <div className="card-body">
        <button
          type="button"
          className="btn btn-primary text-center"
          key={idQuestion}
          id={idQuestion}
          onClick={getAnwser}
        >
          {question}
          {answer}
        </button>
      </div>
    </div>
  );
};

export default FlashCardOne;
