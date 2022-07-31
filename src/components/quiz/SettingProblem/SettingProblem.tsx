import React, { useRef } from "react";
import Container from "./SettingProblem.styled";
import ajaxStore from "../../../store/ajaxStore";
import { SelectedCategory } from "../../../page/Quiz";
import { useNavigate } from "react-router-dom";
interface Props {
  data: SelectedCategory;
  difficulty: string;
  cnt: number;
  setCandidateName: React.Dispatch<React.SetStateAction<string>>;
  setIsRequired: React.Dispatch<React.SetStateAction<boolean>>;
}

function SettingProblem({ data, difficulty, cnt, setCandidateName, setIsRequired }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { getProblems } = ajaxStore();
  const navigate = useNavigate();
  function testStart() {
    // eslint-disable-next-line
    if (inputRef.current!.value) {
      // eslint-disable-next-line
      setCandidateName(inputRef.current!.value);
      getProblems(difficulty, data.category_number, cnt);
      navigate("/test");
    } else {
      setIsRequired(true);
    }
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
              <input ref={inputRef} type="text" placeholder="성함을 입력하세요" />
            </div>
          </div>
        </div>
        <button onClick={testStart}>문제 풀이 시작</button>
      </div>
    </Container>
  );
}

export default SettingProblem;
