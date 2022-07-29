import React from "react";
import Header from "../components/quiz/Header";
import styled from "styled-components";
import SidebarList from "../components/quiz/SidebarList";

const Container = styled.div`
  width: inherit;

  .content {
    display: flex;
    height: calc(100% - ${(props) => props.theme.headerHeight_web});

    .sidebar {
      flex: 1;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        width: 5px;
        background: #eee;
      } /* 스크롤 바 */
      ::-webkit-scrollbar-thumb {
        background: #69696967;
        border-radius: ${(props) => props.theme.borderRadius};
      } /* 실질적 스크롤 바 */
    }
    .main {
      flex: 6;
      overflow-y: scroll;
    }
  }
`;

function Quiz() {
  return (
    <Container>
      <Header />
      <div className="content">
        <div className="sidebar">
          <SidebarList />
        </div>
        <div className="main"></div>
      </div>
    </Container>
  );
}

export default Quiz;
