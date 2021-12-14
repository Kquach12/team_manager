import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerList from '../components/PlayerList';



const Main = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            });
    },[])


    const removeFromDom = authorId => {
        setPlayers(players.filter(author => author._id != authorId)); 
    }

    return (
        <div>
            { loaded && <PlayerList players={players}  removeFromDom={removeFromDom}/> }
        </div>
    )
}
export default Main;