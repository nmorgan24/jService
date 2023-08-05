import React, { useState } from "react";
import Answers from "./Answers";

function Questions({ setQuestion }) {
  const [question, setQuestionData] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  const getQuestion = async () => {
    try {
      const response = await fetch("http://jservice.io/api/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched question data:", data[0]);
      setQuestionData(data[0]);
      setQuestion(data[0]);
      setIsAnswerRevealed(false);
    } catch (error) {
      console.error("Error fetching trivia question:", error);
    }
  };

  return (
    <div>
      <h2>Lets Play!</h2>
      <button onClick={getQuestion}>Get Question</button>
      {question && (
        <div>
          <h3>Category: {question.category.title}</h3>
          <h2>Question: {question.question}</h2>
          <h2>Points: {question.value || "Unknown"}</h2>
          <div className="Answers">
            <Answers
              answer={question.answer}
              isRevealed={isAnswerRevealed}
              setIsRevealed={setIsAnswerRevealed}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Questions;