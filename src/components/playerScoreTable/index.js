import Winner from "../winner";

import { Fragment, useState } from "react";

import Flickity from "react-flickity-component";
import styled from "styled-components";

import "./style.css";
import "./flickity.min.css";

const Card = styled.article`
    width: 75vw;
    margin-right: 1em;
`;

const PlayerScoreTable = ({ players, setPlayers }) => {
    const scoreTypes = ["Etapy cudu", "Monety (punkt za 3)", "Konflikty militarne", "Niebieskie karty", "Żółte karty", "Zielone karty", "Fioletowe karty"];

    const [isNextNegative, setNextNegative] = useState(false);

    const handleScoreChange = (playerIndex, i, e) => {
        if (isNextNegative && e.target.value.length > 0) {
            e.target.value = -e.target.value;
            setNextNegative(false);
        }
        if (e.target.value.startsWith("0")) e.target.value = e.target.value.substring(1);
        if (e.target.value === "") e.target.value = 0;
        const values = [...players];
        values[playerIndex].score[i] = parseInt(e.target.value);
        setPlayers(values);
    };

    const clearScores = () => {
        const values = [...players];
        values.forEach((p) => {
            p.score = [0, 0, 0, 0, 0, 0, 0];
        });
        setPlayers(values);
    };

    return (
        <div>
            <div className="container">
                <Winner players={players} />
                <button onClick={clearScores}>Wyczyść punkty</button>
            </div>
            <Flickity className="carousel">
                {players.map((player, playerIndex) => {
                    return (
                        <Card>
                            <h3>{player.name.length > 0 ? player.name : `Gracz ${playerIndex + 1}`}</h3>
                            {scoreTypes.map((type, index) => {
                                return (
                                    <Fragment key={`${player}~${index}`}>
                                        <label htmlFor="score">{type}</label>
                                        <input
                                            onChange={(e) => {
                                                handleScoreChange(playerIndex, index, e);
                                            }}
                                            onKeyPress={(e) => {
                                                if (e.key === "-") {
                                                    setNextNegative(true);
                                                }
                                            }}
                                            className="rmBottomMargin"
                                            type="number"
                                            name="score"
                                            id="score"
                                            value={player.score[index]}
                                        ></input>
                                    </Fragment>
                                );
                            })}
                        </Card>
                    );
                })}
            </Flickity>
        </div>
    );
};

export default PlayerScoreTable;
