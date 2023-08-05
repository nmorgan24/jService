import React from "react";

function Answers({ answer, isRevealed, setIsRevealed }) {
  const handleRevealAnswer = () => {
    setIsRevealed(true);
  };

  return (
    <div>
      {isRevealed ? (
        <h2>Answer: {answer}</h2>
      ) : (
        <button onClick={handleRevealAnswer}>Reveal Answer</button>
      )}
    </div>
  );
}

export default Answers;