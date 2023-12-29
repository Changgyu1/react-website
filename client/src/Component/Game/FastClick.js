import React, { useState, useEffect } from "react";

const FastClick = () => {
  const [numbers, setNumbers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // 마우스 클릭 함수
  const mouseClick = (number) => {
    if (!gameOver && number === score + 1) {
      setScore(score + 1);
      if (score + 1 === 10) {
        setGameOver(true);
      }
    }
  };

  // 게임 초기화
  const fetchGame = () => {
    // 새로운 번호를 생성하는데 번호가 랜덤으로 자리에 들어갈 수 있도록 설정
    // Array.from({length:10}, (_,index) => index + 1)
    // 길이가 10인 배열을 만들고 각 숫자가 0부터 시작하기 때문에
    // 1부터 시작할 수 있도록 +1을 해준 것

    // .sort(() => Math.random() - 0.5)
    // sort는 정렬해주는 값 정령을 할 때 랜덤으로 정렬할 수 있도록 Math.random()
    // 을 이용해줌
    // sort를 이용할 때 0 정렬 방향이 되기 때문에 0이 아니라 -0.5를 해주면서
    // 무작위로 정렬을 될 수 있도록 해주는 것
    const newNumbers = Array.from({ length: 10 }, (_, index) => index + 1).sort(
      () => Math.random() - 0.5
    );
    // 게임 재시작할 경우 새로운 번호 생성 점수0으로 초기화 게임오버를 아님으로 설정
    setNumbers(newNumbers);
    setScore(0);
    setGameOver(false);
  };
  return (
    <div>
      {gameOver ? (
        <div>
          <p>게임 종료! 최종점수 : {score}</p>
          <button onClick={fetchGame}>게임 재시작</button>
        </div>
      ) : (
        <div>
          <p>현재 게임 점수 : {score}</p>
          <div>
            {numbers.map((number) => (
              <div key={number} on onClick={() => mouseClick(number)}>
                {number}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default FastClick;
