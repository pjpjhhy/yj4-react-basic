import "./App.css";

function App() {
  const name = `카카오톡`;
  return (
    <>
      <div className="title">
        {name}
        <ul>
          <li>카톡 안녕가이드</li>
          <li> | 카톡 설명서</li>
          <li> | 다운로드</li>
        </ul>
      </div>
      <div className="text">
        <h1>이모티콘</h1>
        <h5>
          우리들의 새로운 언어, 이모티콘!<br></br>
          글자만으로는 내 감정을 표현하기 어려운 순간들,<br></br>
          고민하지 말고 이모티콘을 이용해보세요!
        </h5>
        <h3>서비스 바로가기↗</h3>
      </div>
    </>
  );
}
export default App;
