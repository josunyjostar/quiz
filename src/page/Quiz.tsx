import React from "react";
import QuizHeader from "../components/QuizHeader";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

function Quiz() {
  return (
    <Container>
      <QuizHeader />
      <div className="sidebar"></div>
      <div className="main"></div>
    </Container>
  );
}

export default Quiz;
