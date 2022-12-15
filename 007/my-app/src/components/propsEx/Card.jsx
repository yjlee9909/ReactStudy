import React from "react";
import styled from "styled-components";
import SettingCard from "./SettingCard";
const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;
const Card = (props) => {
  return (
    <CardDiv className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      <div>{props.children}</div>
    </CardDiv>
  );
};

export default Card;
