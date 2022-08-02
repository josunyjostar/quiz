import React from "react";
import ajaxStore from "../../../store/ajaxStore";
import { useNavigate } from "react-router-dom";
import Container from "./WrongAnswerNote.styled";
import Hr from "../../common/Hr.styled";

function WrongAnswerNote() {
  const { curResult } = ajaxStore();
  const navigate = useNavigate();

  if (!curResult) {
    return <h1>제출한 데이터 없을 시</h1>;
  }

  const { results } = curResult;
  const incorrect = results.filter((v, _) => !v.result);

  if (incorrect.length === 0) {
    navigate("/"); //타이머 띄우고 리다이렉팅 시켜주어야 함
  }

  function restart() {
    navigate("/");
  }
  console.log(incorrect);

  return (
    <Container>
      <div className="shell">
        <h1>오답노트</h1>
        <div className="wrong-shell">
          {incorrect.map((val, _) => {
            const {
              problemNumber,
              problem: { question, incorrect_answers, correct_answer },
            } = val;
            return (
              <div key={question} className="problem">
                <div className="question">{`${problemNumber}. ${question}`}</div>
                <Hr />
                {incorrect_answers.map((v, i) => {
                  return <div key={`${v}${i}`} className={v === correct_answer ? "correct" : "incorrect"}>{`${i}.${v}`}</div>;
                })}
              </div>
            );
          })}
        </div>
        <button className="btn" onClick={restart}>
          처음으로
        </button>
      </div>
    </Container>
  );
}

export default WrongAnswerNote;
