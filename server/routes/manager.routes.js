const ManagerController = require('../controllers/manager.controller');
module.exports = (app) => {
    app.get('/api', ManagerController.index);
    app.get('/api/player', ManagerController.getAllPlayers);
    app.get('/api/player/:id', ManagerController.getOnePlayer);
    app.put('/api/player/:id', ManagerController.updatePlayer)
    app.post('/api/player', ManagerController.createPlayer);
    app.delete('/api/player/:id', ManagerController.deleteExistingPlayer);
};