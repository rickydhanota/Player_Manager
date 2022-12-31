const Player = require('../models/manager.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPlayer = (request, response) => {
    Player.create(request.body)
        .then((player) => {
            console.log(player)
            response.json(player)
        })
        .catch((err) => {
            console.log(err)
        });
}

module.exports.getAllPlayers = (request, response) => {
    Player.find({})
        .then((player) => {
            console.log(player)
            response.json(player)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.getOnePlayer = (request, response) => {
    Player.findOne({_id: request.params.id})
        .then((singlePlayer) => {
            console.log(singlePlayer)
            response.json(singlePlayer)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate(
        {_id: request.params.id}, 
        request.body, 
        {new: true, runValidators: true}
    )
        .then((updatedPlayer) => {
            console.log(updatedPlayer)
            response.json(updatedPlayer)
        })
        .catch(err => console.log(err))
}

module.exports.deleteExistingPlayer = (request, response) => {
    Player.deleteOne({_id: request.params.id})
        .then((deletedPlayer) => {
            console.log(deletedPlayer)
            response.json(deletedPlayer)
        })
        .catch((err) => {
            console.log(err)
        })
}

