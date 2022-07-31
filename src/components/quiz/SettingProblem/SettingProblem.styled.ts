import styled from "styled-components";
import Btn from "../../common/Btn.styled";

const Container = styled(Btn)`
  display: flex;
  justify-content: center;
  .shell {
    display: flex;
    flex-direction: column;
    font-size: ${(props) => props.theme.h6FontSize_web};
    font-weight: bold;
    margin-top: 55px;

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
        input {
          color: #fff;
          width: 150px;
          font-size: ${(props) => props.theme.contentfontSize_web};
          background: dodgerblue;

          border: none;
          border-radius: 5px;
          padding: 3px 0px;
          padding-left: 7px;
          font-weight: bold;
        }
        input::placeholder {
          color: snow;
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
  }
`;

export default Container;
