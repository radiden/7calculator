import { useState } from "react";

const Winner = ({ players }) => {
    const [showWinners, _setShowWinners] = useState(false);
    const [winners, setWinners] = useState([]);

    const scoreEmojis = ["🥇", "🥈", "🥉", "◾"];

    const setShowWinners = (state) => {
        selectWinners();
        _setShowWinners(state);
    };

    const sumArray = (array) => {
        let sum = 0;
        array.forEach((e) => {
            sum += e;
        });
        if (isNaN(sum)) return 0;
        return sum;
    };

    const selectWinners = () => {
        let playerScores = [];
        players.forEach((p, i) => {
            playerScores.push({ name: p.name.length > 0 ? p.name : `Gracz ${i + 1}`, finalScore: sumArray(p.score) });
        });
        playerScores.sort((a, b) => {
            return b.finalScore - a.finalScore;
        });

        let scoresArr = [];
        var lastDrawPerson = 0;

        for (let i = 0; i < 3; i++) {
            if (lastDrawPerson !== playerScores.length) {
                let drawPlayers = [];

                drawPlayers.push(playerScores[lastDrawPerson]);
                for (let x = lastDrawPerson + 1; x < playerScores.length; x++) {
                    if (playerScores[lastDrawPerson].finalScore === playerScores[x].finalScore) {
                        drawPlayers.push(playerScores[x]);
                    }
                }
                lastDrawPerson += drawPlayers.length;
                scoresArr.push(drawPlayers);
            }
        }

        if (lastDrawPerson !== playerScores.length) {
            scoresArr.push(playerScores.slice(lastDrawPerson));
        }

        let resultsArr = [];
        for (let i = 0; i < 3 && i < scoresArr.length; i++) {
            resultsArr.push(`${scoreEmojis[i]} ${scoresArr[i]
                .map((v, _) => {
                    return v.name;
                })
                .join(", ")}; wynik: ${scoresArr[i][0].finalScore}
                `);
        }
        if (scoresArr.length > 3) {
            scoresArr[3].forEach((s) => {
                resultsArr.push(`${scoreEmojis[3]} ${s.name}, wynik: ${s.finalScore}`);
            });
        }
        setWinners(resultsArr);
    };

    return (
        <>
            <button
                onClick={() => {
                    setShowWinners(true);
                }}
            >
                Pokaż wyniki
            </button>
            <dialog open={showWinners}>
                <article>
                    <h3>Wyniki</h3>
                    <ul>
                        {winners.map((w, i) => {
                            return <li>{w}</li>;
                        })}
                    </ul>
                    <footer>
                        <button
                            onClick={() => {
                                setShowWinners(false);
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
