import React from "react";
import styled from "styled-components";
import Btn from "../../common/Btn.styled";

interface StyledProps {
  isSelected: boolean;
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
    visibility: hidden;
  }
`;

interface Props {
  isSelected: boolean;
}

function NextProcessBtn({ isSelected }: Props) {
  console.log(isSelected);
  return (
    <Container isSelected={isSelected}>
      <button></button>
      <button>정답 확인</button>
      <button>다음 문제</button>
    </Container>
  );
}

export default NextProcessBtn;
