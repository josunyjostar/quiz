import styled from "styled-components";

const Btn = styled.div`
  button {
    font-size: 17px;
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 5px 7px;
    background-color: ${(props) => props.theme.btnBgColor};
    transition: background-color 0.2s ease, color 0.2s ease;
    color: #fff;
  }

  button:hover {
    background-color: ${(props) => props.theme.btnHoverColor};
    color: #2d3436;
  }
`;

export default Btn;
