import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./expenseItem.css";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  // useState : 함수 안에 직접적으로 호출
  // title -> 관리되고 있는 값 props.title를 가리킴 (현재 상태값)
  // setTitle -> 새로운 title를 설정하기 위해 호출하는 함수 (업데이트 함수)
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // setTitle로 새 값 할당하기 (상태가 변할 때마다 업데이트 함수 호출)
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
