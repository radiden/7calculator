import { useState } from 'react';
import ChoosePlayers from './components/choosePlayers';
import PlayerScoreTable from './components/playerScoreTable';
import '@picocss/pico';

function App() {
  
  const [players, _setPlayers] = useState([
    { name: 'Gracz 1', score: [0, 0, 0, 0, 0, 0, 0] },
    { name: 'Gracz 2', score: [0, 0, 0, 0, 0, 0, 0] },
    { name: 'Gracz 3', score: [0, 0, 0, 0, 0, 0, 0] }
  ]);
  
  const setPlayers = (players) => {
    if (players.length < 3 || players.length > 7) return;
    _setPlayers(players);
  }

  return (
    <div className="App">
      <ChoosePlayers players={ players } setPlayers={ setPlayers } />
      <article>
        <PlayerScoreTable players={ players } setPlayers={ setPlayers } />
      </article>
    </div>
  );
}

export default App;
