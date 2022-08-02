import create from "zustand";
import axios from "axios";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";
const { persist } = configurePersist({
  storage: sessionStorage, // 세션스토리지에 저장
});

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
  resetProblems: () => void;
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

const ajaxStore = create<ProblemStore>(
  persist(
    {
      key: "ajax",
      allowlist: ["problems", "curResult", "testResults"],
      denylist: [],
    },
    devtools((set) => ({
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
      resetProblems: () => {
        set((state) => {
          return { ...state, problems: [], curResult: null };
        });
      },
    })),
  ),
);

export default ajaxStore;
