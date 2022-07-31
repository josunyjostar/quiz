import React from "react";
import styled from "styled-components";
import ajaxStore from "../../../store/ajaxStore";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .shell {
    width: 400px;
    padding-bottom: 200px;
    .item {
      font-size: ${(props) => props.theme.resultFontSz_web};
      text-transform: uppercase;
      margin: 10px 0;
      display: flex;

      span {
        flex: 1;
      }
      em {
        flex: 2;
        text-align: center;
      }
    }

    .chart {
      display: flex;
      font-size: ${(props) => props.theme.resultFontSz_web};
      width: 100%;
      margin: 30px 0;
      /* border: 1px solid red; */
      .left {
        flex: 1;
        display: flex;
        align-items: center;
        width: 130px;
      }
      .right {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
        span {
          margin: 0 9px;
        }
        .percent {
          margin-top: 25px;
        }
      }
    }
  }
`;

function ResultPage() {
  const { curResult } = ajaxStore();
  ChartJS.register(ArcElement, Tooltip, Legend);

  if (!curResult) {
    return <h1>1</h1>;
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
      </div>
    </Container>
  );
}

export default ResultPage;
