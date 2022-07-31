import styled from "styled-components";
const Container = styled.div`
  height: 100%;
  h6 {
    text-align: center;
    font-weight: bold;
    font-size: ${(props) => props.theme.h6FontSize_web};
    margin-top: 20px;
    margin-bottom: 20px;
  }
  position: relative;
  .option {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    .option-select {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      font-size: ${(props) => props.theme.contentfontSize_web};

      .select {
        font-family: Arial;
        margin-left: 5px;

        select {
          font-size: ${(props) => props.theme.contentfontSize_web};
          background: #ddd;

          border: none;
          border-radius: 5px;
          padding: 1px 2px;
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
