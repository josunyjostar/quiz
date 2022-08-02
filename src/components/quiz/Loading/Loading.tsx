import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .loader {
    border: 16px solid Gainsboro;
    border-top: 16px solid dodgerblue;
    border-radius: 50%;
    width: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s cubic-bezier(0.35, 0.73, 1, 0.47) infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loading() {
  return (
    <Container>
      <div className="loader"></div>
    </Container>
  );
}

export default Loading;
