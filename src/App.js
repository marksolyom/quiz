import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import Start from "./components/Start";
import Question from "./components/Question"

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
      .then((response) => response.json())
      .then((data) => setQuizData(data.results));
  }, [])

  function startGame() {
    setGameStarted(!gameStarted);

    const newCorrect = [];
    quizData.forEach(question => {
      newCorrect.push({
        name: question.question,
        value: question.value
      })
    })
    setCorrectAnswers(newCorrect);

    const newSelection = [];
    quizData.forEach(question => {
      newSelection.push({
        name: question.question,
        value: ""
      })
    })
    setSelectedOptions(newSelection);
  }

  function handleAnswerChange(event) {
    const { name, value } = event.target;
    
    const newSelection = selectedOptions.map(question => {
      if (question.name === name) {
        return { ...question, value: value };
      }
      return question;
    })
    setSelectedOptions(newSelection);
  }

  const quiz = quizData.map(item => {
    return (
      <Question
        key={nanoid()}
        question={item.question}
        wrongOptions={item.incorrect_answers}
        correctOption={item.correct_answer}
        selectedOptions={selectedOptions}
        handleChange={handleAnswerChange}
      />
    )
  })

  //console.log(quizData)
  console.log(selectedOptions)

  return (
    <div className="App">
      {!gameStarted && <Start handleClick={startGame} />}
      {gameStarted && quiz}
    </div>
  );
}