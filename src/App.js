import { useState } from "react";
import ChoosePlayers from "./components/choosePlayers";
import PlayerScoreTable from "./components/playerScoreTable";
import "@picocss/pico";

function App() {
  const [players, _setPlayers] = useState([
    { name: "Gracz 1", score: [0, 0, 0, 0, 0, 0, 0] },
    { name: "Gracz 2", score: [0, 0, 0, 0, 0, 0, 0] },
    { name: "Gracz 3", score: [0, 0, 0, 0, 0, 0, 0] },
  ]);

  const setPlayers = (players) => {
    if (players.length < 3 || players.length > 7) return;
    _setPlayers(players);
  };

  return (
    <div className="App">
      <div className="container">
        <ChoosePlayers players={players} setPlayers={setPlayers} />
      </div>
      <PlayerScoreTable players={players} setPlayers={setPlayers} />
      <div className="container">
        <article>
          <h3>Wyniki za symbole na zielonych kartach</h3>
          <table>
            <tbody>
              <tr>
                <th>Liczba identicznych symboli</th>
                {[...Array(6)].map((_, i) => {
                  return <td>{i + 1}</td>;
                })}
              </tr>
              <tr>
                <th>Punkty</th>
                {[...Array(6)].map((_, i) => {
                  return <td>{(i + 1) ** 2}</td>;
                })}
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>
  );
}

export default App;
