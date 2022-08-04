import React from "react";
import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import NextProcessBtn, { Props } from "../NextProcessBtn";

describe("<NextProcessBtn />", () => {
  const props: Props = {
    isSelected: false,
    isOpenAnswer: false,
    isEnd: false,
    openAnswer: jest.fn(),
    nextProblem: jest.fn(),
    submitTest: jest.fn(),
  };
  function componentRender(val: Props) {
    return render(<NextProcessBtn {...val} />);
  }

  it("btn is hidden when answer is not checked", () => {
    componentRender(props);
    const confirmBtn = screen.getByText(/정답 확인/);
    const nextBtn = screen.getByText(/다음 문제/);
    expect(confirmBtn).not.toBeVisible();
    expect(nextBtn).not.toBeVisible();
  });

  it("confirmBtn is visible when answer is selected", () => {
    componentRender({ ...props, isSelected: true });
    const confirmBtn = screen.getByText(/정답 확인/);
    expect(confirmBtn).toBeVisible();
  });

  it("nextBtn is visible when answer is selected", () => {
    componentRender({ ...props, isOpenAnswer: true });
    const nextBtn = screen.getByText(/다음 문제/);
    expect(nextBtn).toBeVisible();
  });
});
