import React, { Dispatch, SetStateAction, ChangeEvent, useRef } from "react";
import { category } from "../../../resources/category";
import Container from "./SidebarList.styled";
import Hr from "../../common/Hr.styled";
import { SelectedCategory } from "../../../page/Quiz";

interface Props {
  setCategory: Dispatch<SetStateAction<SelectedCategory>>;
  setDifficulty: Dispatch<SetStateAction<string>>;
  setSelectedProblemCnt: React.Dispatch<React.SetStateAction<number>>;
}

function SidebarList({ setCategory, setDifficulty, setSelectedProblemCnt }: Props) {
  const inputRef = useRef(null);
  function selectDifficulty(e: ChangeEvent<HTMLSelectElement>): void {
    setDifficulty(e.target.value);
  }
  function selectedProblemCnt(e: ChangeEvent<HTMLInputElement>): void {
    setSelectedProblemCnt(+e.target.value);
  }

  function testStart(v: { category: string; category_number: number }): void {
    setCategory({ ...v });
  }

  return (
    <Container>
      <div className="option-shell">
        <h6>Quiz Category</h6>
        <div className="option-select-section">
          <div className="option-select">
            <span className="left">난이도 선택 : </span>
            <span className="right">
              <select onChange={selectDifficulty}>
                <option value="random">Random</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </span>
          </div>
          <div className="option-select">
            <span className="left">문제개수 선택 : </span>
            <span className="right">
              <input ref={inputRef} type="number" min="10" max="50" defaultValue={10} onChange={selectedProblemCnt} />
            </span>
          </div>
        </div>
        <div className="difficulty-select"></div>
        <Hr />
      </div>
      <div className="category">
        {category.map((v, i) => {
          return (
            <div key={`${v}${i}`} className="topic">
              <span>{v.category}</span>
              <button
                onClick={() => {
                  testStart(v);
                }}>
                선택
              </button>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default SidebarList;
