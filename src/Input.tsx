import React from "react";
import { allQuestions } from "./data/Kaameloot.js";

const InputText = (): JSX.Element => {
  const [questiondeux, setQuestiondeux] = React.useState(false);
  const [idQuestiondeux, setIdQuestiondeux] = React.useState("");
  const [answerdeux, setAnwserdeux] = React.useState(false);

  React.useEffect(() => {
    function getQuestion() {
      const oneQuestion = allQuestions.map((element: any) => {
        return element;
      });
      const randomSuiteQuestion =
        oneQuestion[Math.floor(Math.random() * oneQuestion.length)];

      const id = randomSuiteQuestion.id;

      setIdQuestiondeux(id);
      setQuestiondeux(randomSuiteQuestion.question);
    }

    getQuestion();
  }, []);

  function getAnswerInput(event: any) {
    const idresulteventchangeinput = event.target.value;
    console.log(idresulteventchangeinput);
    const idresultevent = event.target.id;
    const oneQuestion = allQuestions.map((element: any) => {
      return element;
    });
    const randomSuiteQuestion =
      oneQuestion[Math.floor(Math.random() * oneQuestion.length)];

    const searchbyid = allQuestions.filter((element: any) => {
      return element.id === idresultevent;
    });
    const reponse = searchbyid.map((element: any) => {
      return element.reponse;
    });
  }

  return (
    <div>
      <h2>Answer the question</h2>
      <p className="progress-bar progress-bar-striped">{questiondeux}</p>
      <form onChange={getAnswerInput}>
        <input
          className="form-control"
          id={idQuestiondeux}
          key={idQuestiondeux}
        ></input>
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default InputText;
