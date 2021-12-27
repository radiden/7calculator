import { Fragment } from "react";
import styled from "styled-components";

const ButtonGrid = styled.div.attrs((p) => ({
    className: "grid",
}))`
    grid-template-columns: auto 25%;
`;
const ChoosePlayers = ({ players, setPlayers }) => {
    const addPlayer = () => {
        const values = [...players];
        values.push({
            name: `Gracz ${players.length + 1}`,
            score: [0, 0, 0, 0, 0, 0, 0],
        });
        setPlayers(values);
    };

    const removePlayer = (index) => {
        const values = [...players];
        values.splice(index, 1);
        setPlayers(values);
    };

    const handlePlayerChange = (index, e) => {
        const values = [...players];
        values[index].name = e.target.value;
        setPlayers(values);
    };

    return (
        <>
            <h3>Gracze</h3>
            {players.map((player, index) => (
                <Fragment key={`${player}~${index}`}>
                    <ButtonGrid className="grid">
                        <input onChange={(e) => handlePlayerChange(index, e)} type="text" id="name" name="name" value={player.name}></input>
                        <button
                            onClick={() => {
                                removePlayer(index);
                            }}
                        >
                            Usuń
                        </button>
                    </ButtonGrid>
                </Fragment>
            ))}
            <button onClick={addPlayer}>Dodaj</button>
            <br></br>
        </>
    );
};

export default ChoosePlayers;
