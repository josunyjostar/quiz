import React, { useState } from "react";
import { Problem } from "../../../store/ajaxStore";
import Hr from "../../common/Hr.styled";
import NextProcessBtn from "./NextProcessBtn";
import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  margin-top: 110px;
  padding: 10px;
  .property {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 15px;
    span {
      color: dimGray;
      margin: 0 3px;
    }
    em {
      margin-left: 5px;
    }
  }
  .question-shell {
    margin-top: 10px;

    .question {
      margin-top: 5px;
      input[type="checkbox"] {
        display: none;
      }
      input[type="checkbox"] + label span {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin: 0px 10px 0 0;
        vertical-align: middle;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid dodgerblue;
        background: url("bg_chkbox.png") 0 0 no-repeat;
      }
      input[type="checkbox"]:checked + label span {
        background-position: -39px -1px;
      }
    }
  }
`;

interface Props {
  problems: Problem[];
}

function ProblemList({ problems }: Props) {
  const [idx, setIdx] = useState<number>(1);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const offset: number = idx - 1;
  const correctIdx = Math.floor(Math.random() * 4);

  // console.log(problems);
  console.log(problems);

  function eventStop(e: React.MouseEvent) {
    e.stopPropagation();
  }

  function checkOnly(e: React.MouseEvent) {
    if (e.target instanceof HTMLInputElement) {
      let isCheck = false;
      const cur = e.target.value;
      const list = e.currentTarget.childNodes;
      for (const key of list.keys()) {
        const list2 = list[key].childNodes;
        for (const key2 of list2.keys()) {
          if (list2[key2] instanceof HTMLInputElement) {
            if (cur === (list2[key2] as HTMLInputElement).value) {
              isCheck ||= (list2[key2] as HTMLInputElement).checked;
              continue;
            }
            (list2[key2] as HTMLInputElement).checked = false;
          }
        }
      }
      setIsSelected(() => isCheck);
    }
  }

  return (
    <Container>
      {problems.slice(offset, offset + 1).map((v, i) => {
        if (!v.incorrect_answers.includes(v.correct_answer)) v.incorrect_answers.splice(correctIdx, 0, v.correct_answer);
        return (
          <div key={i}>
            <strong>{`${offset + 1}. ${v.question}`}</strong>
            <div className="property">
              (
              <span>
                category:<em>{v.category}</em>
              </span>
              /
              <span>
                difficulty:<em>{v.difficulty}</em>
              </span>
              )
            </div>
            <Hr />
            <div onClick={checkOnly} className="question-shell">
              {v.incorrect_answers.map((val, i) => {
                return (
                  <div key={i} className="question">
                    <input type="checkbox" value={val} required id={`checked${i}`} />
                    <label htmlFor={`checked${i}`} onClick={eventStop}>
                      <span onClick={eventStop}></span>
                    </label>
                    <span onClick={eventStop}>{`${i + 1}. ${val}`}</span>
                  </div>
                );
              })}
            </div>
            <NextProcessBtn isSelected={isSelected} />
          </div>
        );
      })}
    </Container>
  );
}

export default ProblemList;
