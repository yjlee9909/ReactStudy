import { useState } from "react";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length; // 몇 번째 질문인지 파악
  return <p>Currently active Question</p>;
};
export default Quiz;
