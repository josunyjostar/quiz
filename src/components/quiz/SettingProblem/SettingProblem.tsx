import React from "react";
import Container from "./SettingProblem.styled";
import ajaxStore from "../../../store/ajaxStore";
import { SelectedCategory } from "../../../page/Quiz";

interface Props {
  data: SelectedCategory;
  difficulty: string;
}

function SettingProblem({ data, difficulty }: Props) {
  const { getProblems } = ajaxStore();

  function testStart() {
    getProblems(difficulty, data.category_number);
  }

  return (
    <Container>
      <div>{`[문제 선택]`}</div>
      <div className="selected">
        <div>
          <div>{`범주`}</div>
          <div>{`난이도`}</div>
        </div>
        <div className="right">
          <div>
            {`: `}
            <em>{data.category}</em>
          </div>
          <div>
            {`: `} <em>{`${difficulty}`}</em>
          </div>
        </div>
      </div>
      <button onClick={testStart}>문제 풀이 시작</button>
    </Container>
  );
}

export default SettingProblem;
