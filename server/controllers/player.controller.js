const Player = require('../models/player.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
          /* The method below is new */
module.exports.createPlayer = (request, response) => {
    const { firstName, lastName, position, gameStatus } = request.body;
    Player.create({
        firstName,
        lastName,
        position,
        gameStatus
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPlayers = (request, response) => {
    Player.find({}).sort({firstName:1})
        .then(players => response.json(players))
        .catch(err => response.json(err))
}

module.exports.getPlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err))
}

module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
}


module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}


