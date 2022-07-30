import React, { useState } from "react";
import Header from "../components/quiz/Header/Header";
import SidebarList from "../components/quiz/SidebarList/SidebarList";
import Container from "./Quiz.styled";
import useAjaxStore from "../store/ajaxStore";
import SettingProblem from "../components/quiz/SettingProblem/SettingProblem";
import ProblemList from "../components/quiz/ProblemList/ProblemList";

export interface SelectedCategory {
  category: string;
  category_number: number;
}

function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>({ category: "일반지식", category_number: 10 });
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("random");
  const { problems } = useAjaxStore();

  return (
    <Container>
      <Header />
      <div className="content">
        <div className="sidebar">
          <SidebarList setCategory={setSelectedCategory} setDifficulty={setSelectedDifficulty} />
        </div>
        <div className="main">{problems ? <ProblemList problems={problems} /> : <SettingProblem data={selectedCategory} difficulty={selectedDifficulty} />}</div>
      </div>
    </Container>
  );
}

export default Quiz;
