import React from "react";
import Container from "./NextProcessBtn.styled";

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
