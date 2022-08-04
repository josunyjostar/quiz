import React from "react";
import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import SettingProblem, { Props } from "../SettingProblem";
import { BrowserRouter } from "react-router-dom";

describe("<Quiz />", () => {
  beforeAll(() => {
    const initVal: Props = {
      data: { category: "random", category_number: 10 },
      difficulty: "random",
      cnt: 10,
      setCandidateName: jest.fn(),
      setIsRequired: jest.fn(),
    };
    render(
      <BrowserRouter>
        <SettingProblem {...initVal} />
      </BrowserRouter>,
    );
  });

  it("input should be empty", () => {
    const candidataNameInput = screen.getByPlaceholderText(/성함을 입력하세요/);
    const inputValue = candidataNameInput.getAttribute("value");

    expect(inputValue).toBeNull();
  });
});
