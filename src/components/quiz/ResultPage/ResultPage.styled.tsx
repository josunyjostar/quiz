import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .shell {
    width: 400px;
    padding-bottom: 200px;
    .item {
      font-size: ${(props) => props.theme.resultFontSz_web};
      text-transform: uppercase;
      margin: 10px 0;
      display: flex;

      span {
        flex: 1;
      }
      em {
        flex: 2;
        text-align: center;
      }
    }

    .chart {
      display: flex;
      font-size: ${(props) => props.theme.resultFontSz_web};
      width: 100%;
      margin: 30px 0;
      /* border: 1px solid red; */
      .left {
        flex: 1;
        display: flex;
        align-items: center;
        width: 130px;
      }
      .right {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
        span {
          margin: 0 9px;
        }
        .percent {
          margin-top: 25px;
        }
      }
    }
  }
`;

export default Container;
