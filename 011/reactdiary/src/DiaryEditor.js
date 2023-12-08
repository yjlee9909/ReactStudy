import { useRef, useState } from "react";

const DiaryEditor = () => {
  // DOM 요소 선택
  const authorInput = useRef();
  const contentInput = useRef();
  // state 묶어주기
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");

  const handleChangeState = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      // alert('작성자는 최소 1글자 이상 입력해주세요');
      // focus()
      authorInput.current.focus();
      // 조건이 만족하지 못한다면 return 더이상 실행x
      return;
    }
    if (state.content.length < 5) {
      // alert('일기 본문은 최소 5글자 이상 입력해주세요');
      // focus
      contentInput.current.focus();
      return;
    }
    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState} />
      </div>
      <div>
        <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState} />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default DiaryEditor;