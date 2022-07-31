import React, { useState } from "react";
import Header from "../components/quiz/Header/Header";
import SidebarList from "../components/quiz/SidebarList/SidebarList";
import Container from "./Quiz.styled";
import useAjaxStore from "../store/ajaxStore";
import SettingProblem from "../components/quiz/SettingProblem/SettingProblem";
import ProblemList from "../components/quiz/ProblemList/ProblemList";
import Popup from "../components/quiz/Popup/Popup";
export interface SelectedCategory {
  category: string;
  category_number: number;
}

function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>({ category: "아무거나", category_number: -1 });
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("random");
  const [selectedProblemCnt, setSelectedProblemCnt] = useState<number>(10);
  const [candidateName, setCandidateName] = useState<string>("");
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
          {isRequired ? <Popup setIsRequired={setIsRequired} /> : null}
          {problems ? (
            <ProblemList problems={problems} candidateName={candidateName} />
          ) : (
            <SettingProblem data={selectedCategory} difficulty={selectedDifficulty} cnt={selectedProblemCnt} setCandidateName={setCandidateName} setIsRequired={setIsRequired} />
          )}
        </div>
      </div>
    </Container>
  );
}

export default Quiz;
