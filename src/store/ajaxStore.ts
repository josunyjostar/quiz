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
  problems: Problem[];
  curResult: TestResult | null;
  testResults: TestResult[];
  getProblems: (difficulty: string, category_number: number, cnt: number) => void;
  submitTest: (paper: TestResult) => void;
}

export interface ProblemResult {
  problemNumber: number;
  result: boolean;
}

export interface TestResult {
  candidateName: string;
  testDate: string;
  totalTime: string;
  results: ProblemResult[];
  category: string;
  difficulty: string;
}

//https://opentdb.com/api.php?amount=10&type=multiple 수량 / 타입
//https://opentdb.com/api.php?amount=10&category=21&type=multiple 카테고리 추가
//https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple 난이도 추가

const ajaxStore = create<ProblemStore>((set) => ({
  problems: [],
  curResult: null,
  testResults: [],
  getProblems: async (_difficulty, category_number, cnt) => {
    try {
      let difficulty = "";
      let category = "";
      if (_difficulty !== "random") difficulty += `&difficulty=${_difficulty}`;
      if (category_number !== -1) category += `&category=${category_number}`;
      const {
        data: { results },
      } = await axios.get(process.env.REACT_APP_API_URL + `amount=${cnt}` + category + difficulty + "&type=multiple");

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
  submitTest: (paper: TestResult) => {
    set((state) => {
      return { testResults: [...state.testResults, paper], curResult: paper };
    });
  },
  resetProblems: () => () => {
    set((state) => {
      return { ...state, problems: [] };
    });
  },
}));

export default ajaxStore;
