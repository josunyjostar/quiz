import React from "react";
import { render, screen } from "@testing-library/react";
import NextProcessBtn, { Props } from "../NextProcessBtn";

describe("<NextProcessBtn />", () => {
  function componentRender() {
    const initVal: Props = {
      isSelected: false,
      isOpenAnswer: false,
      isEnd: false,
      openAnswer: jest.fn(),
      nextProblem: jest.fn(),
      submitTest: jest.fn(),
    };
    render(<NextProcessBtn {...initVal} />);
  }

  it("confirm btn is hidden when answer is not checked", () => {
    componentRender();
    const btn = screen.getByText(/정답 확인/);
    expect(btn).not.toBeVisible();
  });
});
