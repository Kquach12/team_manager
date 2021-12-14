import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import ManageForm from '../components/ManageForm';

const Update = (props) => {
    const { id } = props;
    const [player, setPlayer] = useState();
    const [loaded, setLoaded] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayer(res.data)
                setLoaded(true)
            })

    }, [])
    const updatePlayer = player => {
        axios.put('http://localhost:8000/api/players/' + id, player)
            .then(res => console.log(res))
    }

    return (
        <div>
            <h1>Update a Player</h1>
            <Link to={"/"}>Return</Link> 
            {loaded && (
                <ManageForm
                    onChangeProp={updatePlayer}
                />
            )}


        </div>
    )
}
export default Update;

