import create from "zustand";
import axios from "axios";

interface Problem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface ProblemList {
  results: Problem[] | null;
  getProblems: (difficulty: string, category_number: number) => void;
}

//https://opentdb.com/api.php?amount=10&type=multiple 수량 / 타입
//https://opentdb.com/api.php?amount=10&category=21&type=multiple 카테고리 추가
//https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple 난이도 추가

const ajaxStore = create<ProblemList>((set) => ({
  results: null,
  getProblems: async (difficulty, category_number) => {
    try {
      let uri = "";
      if (difficulty !== "random") uri += `&difficulty=${difficulty}`;

      const {
        data: { results },
      } = await axios.get(process.env.REACT_APP_API_URL + `amount=10&category=${category_number}` + uri + "&type=multiple");

      set(() => ({
        results: results,
      }));
    } catch (err) {
      console.log("getProblems error:::", err);
      set((state) => ({
        ...state,
      }));
    }
  },
}));

export default ajaxStore;
