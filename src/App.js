import { useState, useMemo } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999999; i++) {} // 생각하는 시간, 부하주는 코드
  return 10000 + Number(number);
};
const easyCalculate = (number) => {
  console.log("쉬운 계산");
  return 1 + Number(number);
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // 렌더링 마다 아래 함수가 실행되어 부하 발생
  // 쉬운 계산기 값만 바꿔도 어려운 계산기 함수가 동작한다.
  //const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]); // hardNumber가 바뀔때만 실행, 그 이외에는 이전에 실행했던 값을 할당

  const easySum = easyCalculate(easyNumber);

  return (
    <div className="App">
      <h3>어려운 계산기</h3>
      <input type="number" value={hardNumber} onChange={(e) => setHardNumber(e.target.value)} />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(e.target.value)} />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default App;
