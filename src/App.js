import { useState } from "react";
import Start from "./components/Start";
import Question from "./components/Question"

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  function startGame() {
    setGameStarted(!gameStarted)
  }

  return (
    <div className="App">
      {!gameStarted && <Start handleClick={startGame} />}
      {gameStarted && <Question />}
    </div>
  );
}