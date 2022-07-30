import styled from "styled-components";
import Btn from "../../../common/Btn.styled";

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

export default Container;
