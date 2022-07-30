import React, { useState } from "react";
import { Problem } from "../../../store/ajaxStore";
import Hr from "../../common/Hr.styled";
import NextProcessBtn from "./NextProcessBtn/NextProcessBtn";
import Timer from "./Timer/Timer";
import Container from "./ProblemList.styled";

interface Props {
  problems: Problem[];
}

function ProblemList({ problems }: Props) {
  const [idx, setIdx] = useState<number>(1);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isOpenAnswer, setOpenAnswer] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("setAnswer");
  const [selectedAnswer, setSelectedAnswer] = useState<string>("setSelectedAnswer");

  const offset: number = idx - 1;
  const isEnd: boolean = problems.length === idx;

  function stateInit() {
    setIsSelected(() => false);
    setOpenAnswer(() => false);
    setAnswer("setAnswer");
    setSelectedAnswer("setSelectedAnswer");
  }

  function eventStop(e: React.MouseEvent) {
    e.stopPropagation();
  }

  function checkOnly(e: React.MouseEvent) {
    if (e.target instanceof HTMLInputElement) {
      let isCheck = false;
      const cur = e.target.value;
      const list = e.currentTarget.childNodes;
      for (const key of list.keys()) {
        const list2 = list[key].childNodes;
        for (const key2 of list2.keys()) {
          if (list2[key2] instanceof HTMLInputElement) {
            if (cur === (list2[key2] as HTMLInputElement).value) {
              isCheck ||= (list2[key2] as HTMLInputElement).checked;
              {
                isCheck ? setSelectedAnswer((list2[key2] as HTMLInputElement).value) : setSelectedAnswer("");
              }
              continue;
            }
            (list2[key2] as HTMLInputElement).checked = false;
          }
        }
      }
      setIsSelected(() => isCheck);
    }
  }

  function openAnswer() {
    setOpenAnswer(() => true);
    if (answer === selectedAnswer) {
      console.log("정답");
    } else {
      console.log("오답");
    }
  }

  function nextProblem() {
    stateInit();
    setIdx((pre) => pre + 1);
  }

  return (
    <Container isOpenAnswer={isOpenAnswer} isSelected={isSelected}>
      <div className="progress">
        {isEnd ? <span className="current-progress">마지막 문제 입니다.</span> : <span className="current-progress">{`total ${idx}/${problems.length}`}</span>}
        <Timer />
      </div>
      {problems.slice(offset, offset + 1).map((v, i) => {
        if (!v.incorrect_answers.includes(v.correct_answer)) {
          setAnswer(v.correct_answer);
          const correctIdx = Math.floor(Math.random() * 4);
          v.incorrect_answers.splice(correctIdx, 0, v.correct_answer);
        }
        return (
          <div key={i} className="shell">
            <div>
              <strong>{`${offset + 1}. ${v.question}`}</strong>
              <div className="property">
                (
                <span>
                  category:<em>{v.category}</em>
                </span>
                /
                <span>
                  difficulty:<em>{v.difficulty}</em>
                </span>
                )
              </div>
              <Hr />
              <div onClick={checkOnly} className="question-shell">
                {v.incorrect_answers.map((val, i) => {
                  const isCorrect = val === v.correct_answer;
                  return (
                    <div key={i} className="question">
                      <input type="checkbox" value={val} required id={`checked${i}`} disabled={isOpenAnswer} />
                      <label htmlFor={`checked${i}`} onClick={eventStop}>
                        <span onClick={eventStop}></span>
                      </label>
                      <span onClick={eventStop} className={isCorrect ? "correct" : "incorrect"}>{`${i + 1}. ${val}`}</span>
                      {isOpenAnswer ? <span className="mark">{isCorrect ? "정답" : "오답"}</span> : null}
                    </div>
                  );
                })}
                <NextProcessBtn isSelected={isSelected} openAnswer={openAnswer} isOpenAnswer={isOpenAnswer} nextProblem={nextProblem} isEnd={isEnd} />
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default ProblemList;
