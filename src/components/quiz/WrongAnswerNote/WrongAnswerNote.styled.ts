import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .shell {
    width: 700px;
    height: 100%;
    margin: 30px 0;
    display: flex;
    flex-direction: column;

    h1 {
      flex: 1;
      font-size: 28px;
      text-align: center;
      font-weight: bold;
      letter-spacing: 10px;
    }

    .wrong-shell {
      flex: 22;
      font-size: ${(props) => props.theme.contentfontSize_web};

      .problem {
        margin: 20px 0;
        .question {
          margin: 10px 0;
        }
        .correct,
        .incorrect {
          margin: 10px;
        }
        .incorrect {
          text-decoration: line-through;
          color: tomato;
        }
      }
    }

    .btn {
      position: fixed;
      bottom: 30px;
      right: 40px;

      font-size: 15px;
      border: none;
      border-radius: ${(props) => props.theme.borderRadius};
      padding: 4px 8px;
      color: #222;
      transition: all 0.2s ease;
      border: 1px solid #00cec9;
      background-color: #1dd1a1;
    }
    .btn:hover {
      background-color: #01a3a4;
    }
  }
`;

export default Container;
