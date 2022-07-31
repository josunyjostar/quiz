import React from "react";
import styled from "styled-components";

const BlackScreen = styled.div`
  /* border: solid 1px blue; */
  position: absolute;
  width: calc(100% - ${(props) => props.theme.sidebarWidth + "px"});
  min-height: calc(100% - ${(props) => props.theme.headerHeight_web});
  background-color: rgba(0, 0, 0, 0.35);
  animation: darken 0.2s ease;
  z-index: 1;
  top: ${(props) => props.theme.headerHeight_web};

  @keyframes darken {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.35);
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;

  .popup {
    background-color: #fff;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 20px;
    font-size: ${(props) => props.theme.contentfontSize_web};

    div {
      padding: 5px 0;
      text-align: center;
    }
  }
`;

interface Props {
  setIsRequired: React.Dispatch<React.SetStateAction<boolean>>;
}

function Popup({ setIsRequired }: Props) {
  function close() {
    setIsRequired(false);
  }

  return (
    <BlackScreen onClick={close}>
      <div className="popup">
        <div>성함의 입력은 필수입니다.</div>
        <div>아무곳이나 click!</div>
      </div>
    </BlackScreen>
  );
}

export default Popup;
