import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "작성자1",
    content: "hello1",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "작성자2",
    content: "hello2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "작성자3",
    content: "hello3",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
