import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // jsx 코드로 불러오기
  return (
    <div>
      {/* 열고 닫는 태그 사이에 컨텐츠가 있으면 작동하지 않음 */}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </div>
  );
};
export default ExpenseItem;
