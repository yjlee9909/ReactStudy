function App() {
    const name = 'leeee';
  
    function 함수() {
      return 100
    }
    const 변수 = 10;
    const 값 = true;
    return (
      <div className="App">
        <h1>안녕 {name} 1호</h1>
        <p>{100 + 1}</p>
        <p>{'hello' + 'world'}</p>
        <p>{[1, 2, 3].map(x => x**2)}</p>
        <p>{함수()}</p>
        <p>{변수}</p>
        <p>{값?'one':'two'}</p>
      </div>
    );
  }
  
  export default App;