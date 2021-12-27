import { useState } from "react";

const Winner = ({ players }) => {

    const [showWinner, _setShowWinner] = useState(false);
    const [winner, setWinner] = useState('');

    const setShowWinner = (state) => {
        selectWinner()
        _setShowWinner(state)
    }

    const sumArray = (array) => {
        let sum = 0;
        array.forEach(e => { sum += e });
        if (isNaN(sum)) return 0;
        return sum;
    }

    const selectWinner = () => {
        let playerScores = [];
        players.forEach(p => {
            playerScores.push({ name: p.name, finalScore: sumArray(p.score) })
        })
        setWinner(playerScores.sort((a, b) => {
            return a.finalScore < b.finalScore;
        })[0].name);
        console.log(playerScores);
    }

    return (
        <>
            <button onClick={() => {setShowWinner(true)}}>Pokaż zwycięzce</button>
            <dialog open={showWinner}>
                <article>
                    <h3>Zwycięzcą jest...</h3>
                    <p>{winner}!</p>
                    <footer>
                        <a role="button" onClick={() => {setShowWinner(false)}}>Powrót</a>
                    </footer>
                </article>
            </dialog>
        </>
    );
}

export default Winner;