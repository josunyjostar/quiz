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
  button {
    margin-top: 10px;
    font-size: ${(props) => props.theme.h6FontSize_web};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 5px;
    transition: background-color 0.15s ease;
  }
  button:hover {
    background-color: ${(props) => props.theme.btnHoverColor};
  }
`;

export default Container;