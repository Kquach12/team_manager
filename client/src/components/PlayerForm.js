import React, { useState } from 'react'

const PlayerForm = (props) => {

    const {initialFirstName, initialLastName, initialPosition, initialGameStatus, onSubmitProp} = props

    const [firstName, setFirstName] = useState(initialFirstName); 
    const [lastName, setLastName] = useState(initialLastName);
    const [position, setPosition] = useState(initialPosition);
    const [gameStatus, setGameStatus] = useState("undecided");

    const onSubmitHandler = e => {

        e.preventDefault();

        onSubmitProp({firstName, lastName, position, gameStatus})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <p>
                <label>Position</label><br/>
                <input type="text" value={position} onChange = {(e)=>setPosition(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default PlayerForm;