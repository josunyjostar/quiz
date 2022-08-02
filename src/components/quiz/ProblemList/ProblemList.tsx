import React, { useState } from "react";
import { Problem } from "../../../store/ajaxStore";
import Hr from "../../common/Hr.styled";
import NextProcessBtn from "./NextProcessBtn/NextProcessBtn";
import Timer from "./Timer/Timer";
import Container from "./ProblemList.styled";
import { ProblemResult, TestResult } from "../../../store/ajaxStore";
import moment from "moment";
import ajaxStore from "../../../store/ajaxStore";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import useAjaxStore from "../../../store/ajaxStore";
interface Props {
  candidateName: string;
  selectedDifficulty: string;
  selectedCategory: string;
}

function ProblemList({ candidateName, selectedDifficulty, selectedCategory }: Props) {
  const [idx, setIdx] = useState<number>(1);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isOpenAnswer, setOpenAnswer] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("setAnswer");
  const [runTime, setRunTime] = useState<string>("00:00:00");
  const [selectedAnswer, setSelectedAnswer] = useState<string>("setSelectedAnswer");
  const [ansewerPaper, setAnsewerPaper] = useState<Array<ProblemResult>>([]);
  const navigate = useNavigate();
  const { problems } = useAjaxStore();

  const offset: number = idx - 1;
  const isEnd: boolean = problems.length === idx;

  // console.log(idx + 1, "선택됨", isSelected, "정답확인", isOpenAnswer);
  const { submitTest } = ajaxStore();

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
              isCheck = (list2[key2] as HTMLInputElement).checked = true;
              setSelectedAnswer((list2[key2] as HTMLInputElement).value);
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
    if (!isOpenAnswer) {
      setOpenAnswer(() => true);
      console.log(idx);
      const submit: ProblemResult = { problemNumber: idx, result: false, problem: problems[idx - 1] };
      if (answer === selectedAnswer) {
        submit.result = true;
      } else {
        submit.result = false;
      }
      ``;
      setAnsewerPaper((pre) => [...pre, submit]);
    }
  }

  function nextProblem() {
    stateInit();
    setIdx((pre) => pre + 1);
  }

  function submitPaper() {
    const paper: TestResult = {
      candidateName: candidateName,
      category: selectedCategory,
      difficulty: selectedDifficulty,
      testDate: moment().format("MM-DD"),
      totalTime: runTime,
      results: ansewerPaper,
    };
    submitTest(paper);
    navigate("/result");
  }

  if (problems.length <= 0) {
    return <Loading />;
  }

  return (
    <Container isOpenAnswer={isOpenAnswer} isSelected={isSelected}>
      <div className="progress">
        <span className="current-progress">{`응시자 이름: ${candidateName}`}</span>
        {isEnd ? <span className="current-progress">마지막 문제 입니다.</span> : <span className="current-progress">{`total ${idx}/${problems.length}`}</span>}
        <Timer isEnd={isEnd && isSelected} setRunTime={setRunTime} />
      </div>
      {problems.slice(offset, offset + 1).map((v, _) => {
        if (!v.incorrect_answers.includes(v.correct_answer)) {
          setAnswer(v.correct_answer);
          const correctIdx = Math.floor(Math.random() * 4);
          v.incorrect_answers.splice(correctIdx, 0, v.correct_answer);
        }
        return (
          <div key={`${v.question}`} className="shell">
            <div className="inner">
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
              </div>
              <div onClick={checkOnly} className="question-shell">
                {v.incorrect_answers.map((val, i) => {
                  const isCorrect = val === v.correct_answer;
                  return (
                    <div key={val} className="question">
                      <input type="checkbox" value={val} required id={`checked${i}`} disabled={isOpenAnswer} />
                      <label htmlFor={`checked${i}`}>
                        <span></span>
                      </label>
                      <label htmlFor={`checked${i}`}>
                        <span className={isCorrect ? "correct" : "incorrect"}>{`${i + 1}. ${val}`}</span>
                      </label>
                      {isOpenAnswer ? (
                        <span className="mark" onClick={eventStop}>
                          {isCorrect ? "정답" : "오답"}
                        </span>
                      ) : null}
                    </div>
                  );
                })}
                <NextProcessBtn isSelected={isSelected} openAnswer={openAnswer} isOpenAnswer={isOpenAnswer} nextProblem={nextProblem} isEnd={isEnd} submitTest={submitPaper} />
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default ProblemList;
