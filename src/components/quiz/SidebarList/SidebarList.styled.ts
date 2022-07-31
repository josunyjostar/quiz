import styled from "styled-components";
const Container = styled.div`
  height: 100%;

  position: relative;
  .option-shell {
    h6 {
      text-align: center;
      font-weight: bold;
      font-size: ${(props) => props.theme.h6FontSize_web};
      margin-top: 20px;
      margin-bottom: 20px;
    }
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    .option-select-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 7px;
      font-size: ${(props) => props.theme.contentfontSize_web};
      padding: 0 5px;
      .option-select {
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        .left {
          flex: 6;
        }
        .right {
          flex: 5;
          font-family: Arial;
          margin-left: 5px;

          select,
          input {
            font-size: ${(props) => props.theme.contentfontSize_web};
            background: #ddd;

            border: none;
            border-radius: 5px;
            padding: 1px 2px;
          }
          input {
            width: 84px;
            padding-left: 5px;
          }
        }
      }
    }
  }
  .category {
    overflow-y: scroll;
    height: calc(100% - ${(props) => props.theme.sidebarOptionHeight});

    ::-webkit-scrollbar {
      width: 5px;
      background: #eee;
    }
    ::-webkit-scrollbar-thumb {
      background: #69696967;
      border-radius: ${(props) => props.theme.borderRadius};
    }
    .topic {
      margin: 6px 0px;
      margin-left: 10px;
      border-radius: ${(props) => props.theme.borderRadius};
      padding: 5px;
      font-size: ${(props) => props.theme.contentfontSize_web};

      display: flex;
      justify-content: space-between;

      button {
        border: none;
        border-radius: ${(props) => props.theme.borderRadius};
        margin-right: 10px;
        background-color: #dff2ea93;
        padding: 5px;
        text-transform: uppercase;
      }
      button:hover {
        background-color: #a8d4c1c8;
      }
    }
    .topic:hover {
      background-color: #eee;
    }
  }
`;

export default Container;
