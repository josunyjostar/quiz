import React from "react";
import ajaxStore from "../../../store/ajaxStore";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router-dom";
import Container from "./ResultPage.styled";

function ResultPage() {
  const { curResult } = ajaxStore();
  const navigate = useNavigate();
  ChartJS.register(ArcElement, Tooltip, Legend);

  if (!curResult) {
    return <h1>최종 제출 데이터 없을 시 예외처리 할 장소</h1>;
  }

  const { candidateName, category, difficulty, testDate, totalTime, results } = curResult;
  const correct = results.reduce((acc, v) => {
    if (v.result) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  const incorrect = results.length - correct;

  const data = {
    labels: ["정답", "오답"],
    datasets: [
      {
        label: "# of Votes",
        data: [correct, incorrect],
        backgroundColor: ["rgba(54, 162, 235, 0.9)", "rgba(255, 99, 132, 0.9)"],
        borderColor: ["rgba(54, 162, 235, 0.8)", "rgba(255, 99, 132, 0.8)"],
        borderWidth: 2,
      },
    ],
  };

  function restart() {
    navigate("/");
  }

  function worngAnswerNote() {
    navigate("/wrong-note");
  }

  return (
    <Container>
      <div className="shell">
        <div className="chart">
          <div className="left">
            <Doughnut data={data} />
          </div>
          <div className="right">
            <div>
              <span>{`정답 ${correct}`}</span>
              <span>{`오답 ${incorrect}`}</span>
            </div>
            <div className="percent">
              <span>{`정답률 ${((correct / results.length) * 100).toFixed(2)}%`}</span>
            </div>
          </div>
        </div>
        <div className="item">
          <span>응시자 이름</span>:<em>{candidateName}</em>
        </div>
        <div className="item">
          <span>category</span>:<em>{category}</em>
        </div>
        <div className="item">
          <span>difficulty</span>:<em>{difficulty}</em>
        </div>
        <div className="item">
          <span>응시 날짜</span>:<em>{testDate}</em>
        </div>
        <div className="item">
          <span>소요 시간</span>:<em>{totalTime}</em>
        </div>
        <div className="btn">
          <button onClick={restart} className="restart">
            다시풀기
          </button>
          <button onClick={worngAnswerNote} className="wrong">
            오답노트
          </button>
        </div>
      </div>
    </Container>
  );
}

export default ResultPage;
