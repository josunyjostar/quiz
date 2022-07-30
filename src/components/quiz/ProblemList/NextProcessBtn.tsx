import React from "react";
import styled from "styled-components";
import Btn from "../../common/Btn.styled";

interface StyledProps {
  isSelected: boolean;
  isOpenAnswer: boolean;
}

const Container = styled(Btn)<StyledProps>`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button:first-child {
    visibility: hidden;
  }
  button:nth-child(2) {
    visibility: ${(props) => (props.isSelected ? "visible" : "hidden")};
  }
  button:last-child {
    visibility: ${(props) => (props.isOpenAnswer ? "visible" : "hidden")};
  }

  button.end {
    background-color: #d63031;
  }
  button:hover.end {
    background-color: #c23616;
  }
`;

interface Props {
  isSelected: boolean;
  isOpenAnswer: boolean;
  isEnd: boolean;
  openAnswer: () => void;
  nextProblem: () => void;
}

function NextProcessBtn({ isSelected, openAnswer, isOpenAnswer, nextProblem, isEnd }: Props) {
  return (
    <Container isSelected={isSelected} isOpenAnswer={isOpenAnswer}>
      <button></button>
      <button onClick={openAnswer}>정답 확인</button>
      {isEnd ? <button className="end">최종제출</button> : <button onClick={nextProblem}>다음 문제</button>}
    </Container>
  );
}

export default NextProcessBtn;
