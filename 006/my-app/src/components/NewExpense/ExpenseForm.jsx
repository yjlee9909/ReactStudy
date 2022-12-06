import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  //

  // lifting-state-up
  // useState를 한 번 선언하여 관리하기 (객체형)
  const [userInput, setUserInput] = useState({
    entertedTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    // setEnteredTitle(event.target.value);
    // useState는 이전의 상태를 버리기 때문에 스프레드 문법을 사용하여 덮어쓰는 방식
    setUserInput({
      ...userInput,
      entertedTitle: event.target.value,
    });
  };
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-11-11"
            max="2025-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
