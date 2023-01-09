import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "./Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesItem
        title={props.DUMMY_EXPENSES[0].title}
        amount={props.DUMMY_EXPENSES[0].amount}
        date={props.DUMMY_EXPENSES[0].date}
      />
      <ExpensesItem
        title={props.DUMMY_EXPENSES[1].title}
        amount={props.DUMMY_EXPENSES[1].amount}
        date={props.DUMMY_EXPENSES[1].date}
      />
      <ExpensesItem
        title={props.DUMMY_EXPENSES[2].title}
        amount={props.DUMMY_EXPENSES[2].amount}
        date={props.DUMMY_EXPENSES[2].date}
      />
    </Card>
  );
};
export default Expenses;
