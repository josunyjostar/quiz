import styled from "styled-components";

interface StyledProps {
  isOpenAnswer: boolean;
  isSelected: boolean;
}

const Container = styled.div<StyledProps>`
  width: inherit;
  padding: 100px 0 0 0;
  height: calc(100% - 100px);
  position: relative;
  font-size: 20px;

  display: flex;
  justify-content: center;

  .progress {
    position: absolute;
    top: 0px;
    right: 10px;
    .current-progress {
      font-size: 16px;
      margin-right: 5px;
    }
  }

  .shell {
    display: flex;
    justify-content: start;
    align-items: start;
    padding: 15px;
    width: 700px;

    .inner {
      width: 100%;
      .property {
        margin-top: 5px;
        margin-bottom: 10px;
        font-size: 15px;
        span {
          color: dimGray;
          margin: 0 3px;
        }
        em {
          margin-left: 5px;
        }
      }
      .question-shell {
        margin-top: 10px;

        .question {
          padding: 5px 5px;
          input[type="checkbox"] {
            display: none;
          }
          input[type="checkbox"] + label span {
            display: inline-block;
            width: 22px;
            height: 22px;
            margin: 0px 10px 0 0;
            vertical-align: middle;
            border-radius: 5px;
            cursor: ${(props) => (props.isOpenAnswer ? "not-allowed" : "pointer")};
            border: 1px solid ${(props) => (props.isOpenAnswer ? "gray" : "dodgerblue")};
            background: url("bg_chkbox.png") 0 0 no-repeat;
            filter: ${(props) => (props.isOpenAnswer ? "grayscale(100%)" : "none")};
          }
          input[type="checkbox"]:checked + label span {
            background-position: ${(props) => (props.isSelected ? "-39px -1px" : "0")};
          }
          .mark {
            margin-left: 10px;
          }
        }
        .correct {
        }
        .incorrect {
          text-decoration: ${(props) => (props.isOpenAnswer ? "line-through" : "none")};
          color: ${(props) => (props.isOpenAnswer ? "red" : "#222")};
        }
      }
    }
  }
`;

export default Container;
