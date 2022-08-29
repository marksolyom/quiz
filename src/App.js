import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import Start from "./components/Start";
import Question from "./components/Question"

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
      .then((response) => response.json())
      .then((data) => setQuizData(data.results));
  }, [])

  function startGame() {
    setGameStarted(!gameStarted)
  }

  console.log(quizData)

  const quiz = quizData.map(item => {
    return (
      <Question
        key={nanoid()}
        question={item.question}
        wrongOptions={item.incorrect_answers}
        correctOption={item.correct_answer}
      />
    )
  })

  console.log(quiz)

  return (
    <div className="App">
      {!gameStarted && <Start handleClick={startGame} />}
      {gameStarted && quiz}
    </div>
  );
}