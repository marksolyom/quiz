import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { shuffle } from "lodash";
import Start from "./components/Start";
import Questions from "./components/Questions";
import Result from "./components/Result";

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(null);
  const [round, setRound] = useState(1);
  const [quizData, setQuizData] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [shuffledQuizData, setShuffledQuizData] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
      .then((response) => response.json())
      .then((data) => setQuizData(data.results));
  }, [round]);

  useEffect(() => {
    const shuffledQuiz = quizData.map(question => ({...question, all_answers: shuffle([...question.incorrect_answers, question.correct_answer])}));

    setShuffledQuizData(shuffledQuiz);
    const newCorrect = [];
    quizData.forEach(question => {
      newCorrect.push({
        name: question.question,
        value: question.correct_answer
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
  }, [quizData]);

  function startGame() {
    setQuizStarted(quiz => !quiz);
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

  const quiz = shuffledQuizData.map(item => {
    return (
      <Questions
        key={nanoid()}
        question={item.question}
        shuffled={item.all_answers}
        correctAnswer={item.correct_answer}
        selectedOptions={selectedOptions}
        handleChange={handleAnswerChange}
        gameEnded={gameEnded}
      />
    )
  })

  function checkResult() {
    setGameEnded(game => !game)
    let matches = 0;
    for (let i = 0; i <= 4; i++) {
      if (JSON.stringify(selectedOptions[i]) === JSON.stringify(correctAnswers[i])) {
        matches++;
      }
    } if (matches === 0) {
      matches = "0";
    }
    setScore(matches);
  }

  function startNewGame() {
    setQuizStarted(quiz => !quiz);
    setGameEnded(game => !game);
    setScore(null);
    setRound(round => round + 1);
  }

  return (
    <div className="App">

      {!quizStarted && <Start
        handleClick={startGame}
      />}

      {quizStarted && quiz}

      {quizStarted && <Result
        handleCheckResult={checkResult}
        handleStartNewGame={startNewGame}
        score={score}
        quizStarted={quizStarted}
        gameEnded={gameEnded}
      />}

    </div>
  );
}