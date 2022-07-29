import React, { useState } from "react";
import { category } from "../../resources/category";
import Container from "./SidebarList.styled";

//https://opentdb.com/api.php?amount=10&type=multiple 수량 / 타입
//https://opentdb.com/api.php?amount=10&category=21&type=multiple 카테고리 추가
//https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple 난이도 추가

function SidebarList() {
  const [query, setDifficulty] = useState<string>("any");

  function selectDifficulty(e: React.ChangeEvent<HTMLSelectElement>) {
    setDifficulty(e.target.value);
  }

  function testStart(category_number: number): void {
    console.log(query, category_number);
  }

  return (
    <Container>
      <h6>Quiz Category</h6>
      <div className="difficulty-select">
        <span>난이도 선택:</span>
        <span className="select">
          <select onChange={selectDifficulty}>
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </span>
      </div>
      {category.map((v, i) => {
        return (
          <div key={i} className="category">
            <span>{v.category}</span>
            <button
              onClick={() => {
                testStart(v.category_number);
              }}>
              test start
            </button>
          </div>
        );
      })}
    </Container>
  );
}

export default SidebarList;
