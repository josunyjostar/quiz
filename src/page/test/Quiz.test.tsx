import React from "react";
import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import Quiz from "../Quiz";
import { BrowserRouter } from "react-router-dom";

describe("<Quiz />", () => {
  it("open popup if input is empty (reqeired candidate name)", () => {
    render(
      <BrowserRouter>
        <Quiz />
      </BrowserRouter>,
    );

    const candidataNameInput = screen.getByPlaceholderText(/성함을 입력하세요/);
    const testStartBtn = screen.getByText(/문제 풀이 시작/);
    const inputValue = candidataNameInput.getAttribute("value");
    fireEvent.click(testStartBtn);
    console.log(inputValue);

    expect(inputValue).toBeNull();

    const popup = screen.getByText(/성함의 입력은 필수입니다./);
    expect(popup).toBeInTheDocument();
  });
});
