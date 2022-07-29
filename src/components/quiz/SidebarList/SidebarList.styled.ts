import styled from "styled-components";
const Container = styled.div`
  h6 {
    text-align: center;
    font-weight: bold;
    font-size: ${(props) => props.theme.h6FontSize_web};
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .difficulty-select {
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
  .category {
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
  .category:hover {
    background-color: #eee;
  }
`;

export default Container;
