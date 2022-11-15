import './app.css'

function App() {
  // 주석입니다.
  // console.log(주석입니다.)
  const styleH2 = {backgroundColor : "green"}

  
  return (
    <div>
      {/* 주석입니다. */}
      {/* {} 안에 {오브젝트 형식}으로 사용 */}
      <h1 style={{
        border:'solid 1px black',
        backgroundColor:'yellowgreen'
        }}>인라인 형식</h1>
      <h2 className="newClass">css 파일 형식</h2>
      <h2 style={styleH2}>변수 선언 형식</h2>
    </div>
  );
}

export default App;