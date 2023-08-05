import React, { useState } from "react";

function Score({ question }) {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    if (question && question.value) {
      setScore((prevScore) => prevScore + question.value);
    }
  };

  const decreaseScore = () => {
    if (question && question.value) {
      setScore((prevScore) => prevScore - question.value);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div>
      <h2>Score: {score}</h2>
      <button onClick={increaseScore}>Increase</button>
      <button onClick={decreaseScore}>Decrease</button>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
}

export default Score;