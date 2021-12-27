import { Fragment } from "react";
import './style.css';

const PlayerScoreTable = ({ players, setPlayers }) => {

    const scoreTypes = ["Etapy cudu", "Monety (punkt za 3)", "Konflikty militarne", "Niebieskie karty", "Żółte karty", "Zielone karty", "Fioletowe karty"];

    const sumArray = (array) => {
        let sum = 0;
        array.forEach(e => { sum += e });
        if (sum == NaN) return "";
        return sum;
    }

    const handleScoreChange = (playerIndex, i, e) => {
        // if (e.target.value === "") e.target.value = 0;
        const values = [...players];
        values[playerIndex].score[i] = parseInt(e.target.value);
        setPlayers(values);
        console.log(players);
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Punkty za:</th>
                        { players.map((player, _) => { return <th>{player.name}</th> }) }
                    </tr>
                        { scoreTypes.map((s, i) => {
                            return (
                                <tr>
                                    <th>{s}</th>
                                    {players.map((player, index) => {
                                        return (
                                            <td>
                                                <Fragment key={`${player}~${index}`}>
                                                    <input onChange={ e => { handleScoreChange(index, i, e) } } className="rmBottomMargin" type="number" name="score" id="score" value={player.score[i]}></input>
                                                </Fragment>
                                            </td>
                                        );
                                    })}
                                </tr>
                            )
                        })}
                        {/* { scoreTypes.map((s, i) => {
                            return (
                                <tr>
                                    <td>{s}</td>
                                </tr>
                            );
                        }) }
                    <tr>
                        <td><b>Wynik</b></td>
                    </tr> */}
                    <tr>
                        <th><b>Wynik</b></th>
                        { players.map((player, index) => {
                            let totalScore = sumArray(player.score);
                            if (!isNaN(totalScore)) {
                                return <td>{totalScore}</td>;
                            } else {
                                return <td></td>;
                            };
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PlayerScoreTable;