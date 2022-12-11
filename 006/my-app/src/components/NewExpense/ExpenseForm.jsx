import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //

  // lifting-state-up
  // useState를 한 번 선언하여 관리하기 (객체형)
  //   const [userInput, setUserInput] = useState({
  //     entertedTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // 2. useState는 이전의 상태를 버리기 때문에 스프레드 문법을 사용하여 덮어쓰는 방식
    // setUserInput({
    //   ...userInput,
    //   entertedTitle: event.target.value,
    // });

    // 3. state 스냅샷을 얻기 (가장 최신의 상태 업데이트를 보장)
    // 이전 상태에 따라 상태를 업데이트할 때 사용
    // setUserInput((prevState) => {
    //   return { ...prevState, entertedTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    // 폼 제출할때 새로고침을 막음
    event.preventDefault();

    // 위의 상태 변수들을 조합하여 하나의 객체로 생성
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    // * form 태그 내에서 submit 이벤트가 발생한다면 (button type=submit) 새로고침이 일어나 의도한 AJAX 요청이 발생하지 않는다. -> event.preventDefault로 submit 관련 태그 고유의 동작 중단
    // * 버튼이 아닌 form 태그에 onSubmit을 사용한다면 새로고침 없이 의도한 기능 구현

    // button type=submit인 상태로 클릭을 준다면 form 요소에 내장되어 있는 기능을 실행하지 않는다. -> fomr에 onSubmit을 실행시켜주기

    // form에 onSubmit을 묶어놓고 사용한다면 form 내부의 컴포넌트에 focus를 주었을 때, 엔터를 눌러도 onSubmit을 호출함
    // onClick이라면 따로 onKeyPress 같은 이벤트를 추가해야하는 불편함이 존재
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-11-11"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
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
