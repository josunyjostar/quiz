import create from "zustand";
import axios from "axios";

export interface Problem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface ProblemStore {
  problems: Problem[] | null;
  getProblems: (difficulty: string, category_number: number) => void;
}

//https://opentdb.com/api.php?amount=10&type=multiple 수량 / 타입
//https://opentdb.com/api.php?amount=10&category=21&type=multiple 카테고리 추가
//https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple 난이도 추가

const ajaxStore = create<ProblemStore>((set) => ({
  problems: null,
  getProblems: async (difficulty, category_number) => {
    try {
      let uri = "";
      if (difficulty !== "random") uri += `&difficulty=${difficulty}`;

      const {
        data: { results },
      } = await axios.get(process.env.REACT_APP_API_URL + `amount=10&category=${category_number}` + uri + "&type=multiple");

      set(() => ({
        problems: results,
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
