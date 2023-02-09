import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const [changeTitle, setChangeTitle] = useState(props.title);

  // 보통 Handler로 끝나도록 작성
  const clickHandler = (e) => {
    setChangeTitle("Updated!!");
  };
  return (
    <div>
      {/* 열고 닫는 태그 사이에 컨텐츠가 있으면 작동하지 않음 */}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{changeTitle}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </div>
  );
};
export default ExpenseItem;
