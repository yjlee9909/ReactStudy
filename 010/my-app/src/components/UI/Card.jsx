import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // className 여러개 선언하기 (프롭 + 기존)
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
