import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");
  // 1개의 state로 관리하기 (값으로 객체 전달하기)
  // const [userInput, setUserInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });
  const titleChangeHandler = (e) => {
    setEnterTitle(e.currentTarget.value);
    // 다른 상태들도 같이 관리해줘야 함
    // setUserInput({
    //   ...userInput,
    //   enterTitle: e.currentTarget.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enterTitle: e.target.value };
    // });
  };
  const amountChangeHandler = (e) => {
    setEnterAmount(e.currentTarget.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, enterAmount: e.target.value };
    // });
  };
  const dateChangeHandler = (e) => {
    setEnterDate(e.currentTarget.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, enterDate: e.target.value };
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enterTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            value={enterDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
