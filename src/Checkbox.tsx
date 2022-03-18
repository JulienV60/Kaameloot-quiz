import React from "react";
import { allQuestions } from "./data/Kaameloot.js";

const Checkbox = (): JSX.Element => {
  const [questiontrois, setQuestiontrois] = React.useState(false);
  const [idQuestiontrois, setIdQuestiontrois] = React.useState("");
  const [answertrois, setAnwsertrois] = React.useState(<></>);
  const [checkAnswerDeux, setCheckAnswerDeux] = React.useState("");
  const [sloubiDeux, setSloubiDeux] = React.useState(false);
  const [replayInputTrois, setReplayInputTrois] = React.useState(<></>);
  const [choice, setChoice] = React.useState("");

  React.useEffect(() => {
    function getQuestion() {
      // const oneQuestion = allQuestions.map((element: any) => {
      //   return element;
      // });
      // const randomSuiteQuestion =
      //   oneQuestion[Math.floor(Math.random() * oneQuestion.length)];
      // const id = randomSuiteQuestion.id;
      // const showChoice = randomSuiteQuestion.choix;

      setChoice(showChoice);
      setIdQuestiontrois(id);
      setQuestiontrois(randomSuiteQuestion.question);
    }
    setAnwsertrois(<></>);
    setReplayInputTrois(<></>);
    setSloubiDeux(false);

    getQuestion();
  }, [sloubiDeux]);
  const oneQuestion = allQuestions.map((element: any) => {
    return element;
  });
  const randomSuiteQuestion =
    oneQuestion[Math.floor(Math.random() * oneQuestion.length)];
  const id = randomSuiteQuestion.id;
  const showChoice = randomSuiteQuestion.choix;

  function checkChoice(event: any) {
    const formId = event.target.parentNode.id;
    const choiceCheckBox = event.target.firstChild.textContent;

    const searchByFormId = allQuestions.filter((element: any) => {
      return element.id === formId;
    });
    const reponseBySearch = searchByFormId.map((element: any) => {
      return element.reponse;
    });

    if (choiceCheckBox === reponseBySearch[0]) {
      setReplayInputTrois(
        <button className="btn btn-warning" onClick={() => setSloubiDeux(true)}>
          Sloubi ?
        </button>
      );
      setAnwsertrois(
        <div className="progress-bar bg-success">C'est pas faux </div>
      );
    } else {
      setReplayInputTrois(
        <button
          className="ebtn btn-warning"
          onClick={() => setSloubiDeux(true)}
        >
          Sloubi ?
        </button>
      );
      setAnwsertrois(
        <div className="progress-bar bg-danger">C'est de la merde </div>
      );
    }
  }

  return (
    <div className="zcard text-center text-white bg-dark">
      {questiontrois}
      {answertrois}

      <div
        className="zbtn-group bg-dark"
        role="group"
        aria-label="Basic checkbox toggle
          button group"
      >
        <form id={idQuestiontrois} onClick={checkChoice}>
          <input
            type="checkbox"
            className="btn-check"
            onClick={checkChoice}
            id="btncheck1"
          ></input>
          <label className="zbtn btn-outline-primary">{choice[0]}</label>
          <input
            type="checkbox"
            onClick={checkChoice}
            className="btn-check"
            id="btncheck2"
          ></input>
          <label className="zbtn btn-outline-primary">{choice[1]}</label>
          <input
            type="checkbox"
            onClick={checkChoice}
            className="btn-check"
            id="btncheck3"
          ></input>
          <label className="zbtn btn-outline-primary ">{choice[2]}</label>
          <input
            type="checkbox"
            onClick={checkChoice}
            className="btn-check"
            id="btncheck4"
          ></input>
          <label className="zbtn btn-outline-primary">{choice[3]}</label>
        </form>
      </div>
      {replayInputTrois}
    </div>
  );
};
export default Checkbox;
