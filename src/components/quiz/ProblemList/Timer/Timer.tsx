import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useInterval } from "../../../../utils/CustomHook";

const Container = styled.span`
  font-size: 17px;
  span {
    font-size: 16px;
  }
`;

interface Props {
  isEnd: boolean;
  setRunTime: React.Dispatch<React.SetStateAction<string>>;
}

function Timer({ isEnd, setRunTime }: Props) {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  const count = useCallback(() => {
    setSeconds((sec) => {
      if (isEnd) return sec;
      if (sec > 59) {
        setMinutes((min) => {
          if (min > 59) {
            setHour((h) => h + 1);
            return 0;
          } else {
            return min + 1;
          }
        });
        return 0;
      } else {
        return sec + 1;
      }
    });
  }, [setMinutes, setSeconds, setHour, isEnd]);
  useInterval(count, 1000);

  useEffect(() => {
    let t = "";
    if (hour < 10) {
      t += `0${hour}:`;
    } else {
      t += `${hour}:`;
    }
    if (minutes < 10) {
      t += `0${minutes}:`;
    } else {
      t += `${minutes}:`;
    }
    if (seconds < 10) {
      t += `0${seconds}`;
    } else {
      t += `${seconds}`;
    }
    setRunTime(t);
  }, [isEnd]);

  return (
    <Container>
      <span>{`경과시간: `}</span>
      {hour < 10 ? `0${hour}` : hour}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Container>
  );
}

export default Timer;
