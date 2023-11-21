import { useEffect, useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   contry: isKorea ? "한국" : "외국",
  // };
  const location = useMemo(() => {
    return {
      contry: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  // 연관 배열이 객체
  // 객체는 렌더링할때 마다 재할당 => useEffect가 실행됨
  // 객체는 useMemo를 이용하여 저장해놓으면 재할당이 안되어 useEffect 실행안됨
  useEffect(() => {
    console.log("userEffect 호출");
  }, [location]);

  return (
    <div className="App">
      <h2>하루에 몇끼 먹어요?</h2>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <hr />
      <h2>어느 나라에 있어여?</h2>
      <p>나라 : {location.contry}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default App;
