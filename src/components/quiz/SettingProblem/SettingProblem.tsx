import React from "react";
import Container from "./SettingProblem.styled";

interface Props {
  category: string;
  difficulty: string;
}

function SettingProblem({ category, difficulty }: Props) {
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
            <em>{category}</em>
          </div>
          <div>
            {`: `} <em>{`${difficulty}`}</em>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SettingProblem;
