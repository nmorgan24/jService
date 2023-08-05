import React, { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Score from "./components/Score";

function App() {
  const [question, setQuestion] = useState(null);

  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <div className="Score">
        <Score question={question} />
      </div>
      <div className="Questions">
        <Questions setQuestion={setQuestion} />
      </div>
    </div>
  );
}

export default App;