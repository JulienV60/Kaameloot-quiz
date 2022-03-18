import React from "react";
import { allQuestions } from "./data/Kaameloot.js";

const InputText = (): JSX.Element => {
  const [questiondeux, setQuestiondeux] = React.useState(false);
  const [idQuestiondeux, setIdQuestiondeux] = React.useState("");
  const [answerdeux, setAnwserdeux] = React.useState(<></>);
  const [checkAnswer, setCheckAnswer] = React.useState("");
  const [sloubi, setSloubi] = React.useState(false);
  const [replayInput, setReplayInput] = React.useState(<></>);
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
    setAnwserdeux(<></>);
    setReplayInput(<></>);
    setSloubi(false);

    getQuestion();
  }, [sloubi]);

  function getAnswerInput(event: any) {
    event.preventDefault();
    const id = event.target.id;
    const searchbyid = allQuestions.filter((element: any) => {
      return element.id === id;
    });
    const compareReponse = searchbyid.map((element: any) => {
      return element.reponse;
    });
    if (checkAnswer === compareReponse[0]) {
      setQuestiondeux(false);
      setReplayInput(
        <button className="btn btn-warning" onClick={() => setSloubi(true)}>
          Sloubi ?
        </button>
      );
      setAnwserdeux(
        <div className="progress-bar bg-success">C'est pas faux </div>
      );
    } else {
      setQuestiondeux(false);
      setReplayInput(
        <button className="btn btn-warning" onClick={() => setSloubi(true)}>
          Sloubi ?
        </button>
      );
      setAnwserdeux(
        <div className="progress-bar bg-danger">C'est de la merde </div>
      );
    }
  }

  return (
    <div>
      <h2>Answer the question</h2>
      <div className="progress-bar bg-primary">
        {questiondeux}
        {answerdeux}
        <form
          key={idQuestiondeux}
          id={idQuestiondeux}
          onSubmit={getAnswerInput}
        >
          <input
            className="form-control"
            type="text"
            onChange={(event) => {
              setCheckAnswer(event.target.value);
            }}
            // onChange={getAnswerInput}
            placeholder="Enter your answer..."
          ></input>
          <button type="submit" className="btn btn-secondary">
            Envoyer
          </button>
        </form>
        {replayInput}
      </div>
    </div>
  );
};

export default InputText;
