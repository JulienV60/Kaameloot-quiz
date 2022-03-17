import React from "react";
import { allQuestions } from "./data/Kaameloot.js";

const FlashCardOne = (): JSX.Element => {
  const [question, setQuestion] = React.useState(false);
  const [idQuestion, setIdQuestion] = React.useState("");
  const [answer, setAnwser] = React.useState<string[]>([]);
  const [reload, setReload] = React.useState();
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

    const searchbyid = allQuestions.filter((element: any) => {
      return element.id == idresultevent;
    });
    const answer = searchbyid.map((element: any) => {
      return element.reponse;
    });

    setQuestion(true);
    setAnwser(answer);
  }
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div>
      <h1>Kaamelott</h1>

      <button key={idQuestion} id={idQuestion} onClick={getAnwser}>
        {question}
        <p>{answer}</p>
      </button>
      <button onClick={refreshPage}>Relancer le cul de chouette ! </button>
      {/* <form>
        <input onChange={Checkifgoodanswer} type="text"></input>
      </form> */}
    </div>
  );
};

export default FlashCardOne;
