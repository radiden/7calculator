import { useState } from "react";

const Winner = ({ players }) => {
  const [showWinner, _setShowWinner] = useState(false);
  const [winner, setWinner] = useState("");

  const setShowWinner = (state) => {
    selectWinner();
    _setShowWinner(state);
  };

  const sumArray = (array) => {
    let sum = 0;
    array.forEach((e) => {
      sum += e;
    });
    if (isNaN(sum)) return 0;
    return sum;
  };

  const selectWinner = () => {
    let playerScores = [];
    players.forEach((p) => {
      playerScores.push({ name: p.name, finalScore: sumArray(p.score) });
    });
    playerScores.sort((a, b) => {
      return a.finalScore < b.finalScore;
    });
    let winners = [playerScores[0].name];
    for (let i = 1; i < playerScores.length; i++) {
      if (playerScores[0].finalScore === playerScores[i].finalScore) {
        winners.push(playerScores[i].name);
      }
    }
    if (winners.length > 1) {
      let winnerStr = "Remis! Wygrywają: " + winners.join(", ");
      setWinner(winnerStr);
    } else {
      setWinner("Wygrywa " + playerScores[0].name);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setShowWinner(true);
        }}
      >
        Pokaż zwycięzce
      </button>
      <dialog open={showWinner}>
        <article>
          <h3>Zwycięzcą jest...</h3>
          <p>{winner}!</p>
          <footer>
            <button
              onClick={() => {
                setShowWinner(false);
              }}
            >
              Powrót
            </button>
          </footer>
        </article>
      </dialog>
    </>
  );
};

export default Winner;
