import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // css 여러개 적용하기
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
