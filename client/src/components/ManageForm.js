import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import StatusButton from './StatusButton'


const ManageForm = (props) => {
    const {onChangeProp} = props
    const [players, setPlayers] = useState([]);
    const [gameStatus, setGameStatus] = useState()

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data));
    }, [])

    const updateStatus = () =>{
        setPlayers([...players])
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, idx)=>{
                        return(
                            <tr>
                                <td>{player.firstName} {player.lastName}</td>
                                <td>
                                    <StatusButton player = {player} successCallBack={updateStatus}/>
                                </td>
                            </tr>
                            
                    )})}
                    
                </tbody>
            </table>
        </div>
    )
}
export default ManageForm;