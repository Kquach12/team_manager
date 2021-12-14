import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import PlayerForm from '../components/PlayerForm';
import { Link } from '@reach/router';


const AddPlayer = (props) => {
    const [errors, setErrors] = useState([]);

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
            .then(res =>{
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }
    return (
        <div>
            <h1>Add a Player</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <PlayerForm
                onSubmitProp={createPlayer}
                initialFirstName={""}
                initialLastName={""}
                initialPosition={""}
            />
            <Link to={"/"}>Return</Link>
        </div>
    )
}
export default AddPlayer;
