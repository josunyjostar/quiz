import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.h6FontSize_web};
  font-weight: bold;
  margin-top: 30px;

  .selected {
    display: flex;
    flex-direction: row;
    div {
      margin: 5px 0;
    }
    .right {
      padding-left: 5px;
      em {
        color: dodgerblue;
        text-transform: uppercase;
      }
    }
  }
`;

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
