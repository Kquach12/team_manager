import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';


const PlayerList = (props) => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data));
    }, [])


    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId))
    }

    return (
        <div>
            <Link to={"/create"}>Add a Player</Link> 
            <Link to={"/edit"}>Manage Players</Link> 
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, idx)=>{
                        return(
                            <tr>
                                <td>{player.firstName} {player.lastName}</td>
                                <td>{player.position}</td>
                                <td>
                                    <DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)} />
                                </td>
                            </tr>
                            
                    )})}
                    
                </tbody>
            </table>
        </div>
    )
}
export default PlayerList;