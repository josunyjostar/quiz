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
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>({ category: "아무거나", category_number: -1 });
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("random");
  const [selectedProblemCnt, setSelectedProblemCnt] = useState<number>(10);
  const [candidateName, setCandidateName] = useState<string>("null");
  const [isRequired, setIsRequired] = useState<boolean>(false);
  const { problems } = useAjaxStore();

  return (
    <Container>
      <Header />
      <div className="content">
        <div className="sidebar">
          <SidebarList setCategory={setSelectedCategory} setDifficulty={setSelectedDifficulty} setSelectedProblemCnt={setSelectedProblemCnt} />
        </div>
        <div className="main">
          {problems ? (
            <ProblemList problems={problems} candidateName={candidateName} />
          ) : (
            <SettingProblem data={selectedCategory} difficulty={selectedDifficulty} cnt={selectedProblemCnt} setCandidateName={setCandidateName} />
          )}
        </div>
      </div>
    </Container>
  );
}

export default Quiz;
