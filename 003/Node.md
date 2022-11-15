## Node.js
- 웹 개발자가 자바스크립트로 모든 기능들을 컨트롤하고 싶은 경우
- 자바스크립트 실행 환경
- 자바스크립트를 서버에서도 사용할 수 있도록 만든 프로그램
- 웹 서버와 같이 확장성 있는 네트워크 프로그램을 제작하기 위해 만들어졌다.

- 특징
    - Non-Blocking
        - 일단 다 받고 처리하는 경우
    - Single Thread
        - 처리하는 사람은 한 명

### React Project 생성하기
- 한 번에 리액트에서 필요한 모듈들까지 설치
~~~shell
npx create-react-app my-app
~~~

### CDN 그대로 사용하지 않는 이유
- Node 환경에서는 다양한 모듈을 지원하고 이 모듈을 빌드하여 배포가 가능하다.

### 기본 코드
- index.html
~~~html
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>React App</title>
</head>

<body>
  <div id="root"></div>
</body>

</html>
~~~

- App.js
~~~js
function App() {
  return (
    <div className="App">
      <h1>test2</h1>
    </div>
  );
}

export default App;
~~~

- index.js
~~~js
import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
~~~

- App.js가 메인 페이지, index.js가 index.html에 메인페이지를 보여주게 한다.

- 다시 설치하고 싶은 경우
~~~shell
npm i
~~~