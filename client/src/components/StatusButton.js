import React from 'react'
import axios from 'axios';

const StatusButton = (props) => {
    const {player, successCallBack} = props;
    

    const updatePlayer = e => {
        player.gameStatus = e.target.value
        console.log(player.gameStatus)
        axios.put('http://localhost:8000/api/players/' + player._id, player)
            .then(successCallBack())
    }

    return (
        <div>
            {player.gameStatus == 'playing'?
                <button value="playing" onClick={updatePlayer} style={{backgroundColor:'blue'}}>
                    Playing
                </button>
                : 
                    <button value="playing" onClick={updatePlayer}>
                        Playing
                    </button>
            }
            {player.gameStatus == 'not_playing'?
                <button value="not_playing" onClick={updatePlayer} style={{backgroundColor:'blue'}}>
                    Not Playing
                </button>
                : 
                    <button value="not_playing" onClick={updatePlayer}>
                        Not Playing
                    </button>
            }
            {player.gameStatus == 'undecided'?
                <button value="undecided" onClick={updatePlayer} style={{backgroundColor:'blue'}}>
                    Undecided
                </button>
                : 
                    <button value="undecided" onClick={updatePlayer}>
                        Undecided
                    </button>
            }
        </div>
    )
}
export default StatusButton;