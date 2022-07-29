import React, { Dispatch, SetStateAction, ChangeEvent } from "react";
import { category } from "../../resources/category";
import Container from "./SidebarList.styled";
import Hr from "../common/Hr.styled";
import { SelectedCategory } from "../../page/Quiz";

interface Props {
  setCategory: Dispatch<SetStateAction<SelectedCategory>>;
  setDifficulty: Dispatch<SetStateAction<string>>;
}

function SidebarList({ setCategory, setDifficulty }: Props) {
  function selectDifficulty(e: ChangeEvent<HTMLSelectElement>): void {
    setDifficulty(e.target.value);
  }

  function testStart(v: { category: string; category_number: number }): void {
    setCategory({ ...v });
  }

  return (
    <Container>
      <h6>Quiz Category</h6>
      <div className="difficulty-select">
        <span>난이도 선택:</span>
        <span className="select">
          <select onChange={selectDifficulty}>
            <option value="random">Random</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </span>
      </div>
      <Hr />
      {category.map((v, i) => {
        return (
          <div key={i} className="category">
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
    </Container>
  );
}

export default SidebarList;
