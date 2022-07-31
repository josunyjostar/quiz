import React, { useRef } from "react";
import Container from "./SettingProblem.styled";
import ajaxStore from "../../../store/ajaxStore";
import { SelectedCategory } from "../../../page/Quiz";

interface Props {
  data: SelectedCategory;
  difficulty: string;
  cnt: number;
  setCandidateName: React.Dispatch<React.SetStateAction<string>>;
}

function SettingProblem({ data, difficulty, cnt, setCandidateName }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { getProblems } = ajaxStore();

  function testStart() {
    getProblems(difficulty, data.category_number, cnt);
    setCandidateName(inputRef.current!.value);
  }

  return (
    <Container>
      <div className="shell">
        <div>{`[문제 선택]`}</div>
        <div className="selected">
          <div>
            <div>{`범주`}</div>
            <div>{`난이도`}</div>
            <div>{`문제개수`}</div>
            <div>{`이 름`}</div>
          </div>
          <div className="right">
            <div>
              {`: `}
              <em>{data.category}</em>
            </div>
            <div>
              {`: `} <em>{`${difficulty}`}</em>
            </div>
            <div>
              {`: `} <em>{`${cnt}`}</em>
            </div>
            <div>
              {`: `}
              <input ref={inputRef} type="text" placeholder="성함을 입력하세요"></input>
            </div>
          </div>
        </div>
        <button onClick={testStart}>문제 풀이 시작</button>
      </div>
    </Container>
  );
}

export default SettingProblem;
