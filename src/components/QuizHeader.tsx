import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: snow;
  display: flex;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  .img {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 10px 0;

    img {
      width: 50px;
      height: 50px;
    }
  }

  h1 {
    flex: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 27px;
  }
`;

function QuizHeader() {
  return (
    <Container>
      <div className="img">
        <img src="quiz.png" alt="" />
      </div>
      <h1>Welcome to Quiz!!</h1>
    </Container>
  );
}

export default QuizHeader;
