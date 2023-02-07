// 스타일 중복
// props.children : 예약어이며, 열고 닫는 컴포넌트 사이에 존재하는 컨텐츠
import "./Card.css";

const Card = (props) => {
  // ExpenseItem.jsx의 Card 컴포넌트 기존 클래스 이름과 합치기
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
