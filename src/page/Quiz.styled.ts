import styled from "styled-components";

const Container = styled.div`
  width: inherit;

  .content {
    display: flex;
    height: calc(100% - ${(props) => props.theme.headerHeight_web});

    .sidebar {
      flex-basis: ${(props) => props.theme.sidebarWidth + "px"};
    }
    .main {
      flex: 1;
      overflow-y: scroll;
    }
  }
`;

export default Container;
