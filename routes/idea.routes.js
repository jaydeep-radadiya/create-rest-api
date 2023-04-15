const ideaController = require('../controllers/idea.controller')

/**
 * define routes
 * GET 127.0.0.1:8080/ideaApp/v1/ideas
 */

module.exports = (app) => {
    app.get('/ideaApp/v1/ideas', ideaController.fetchAllIdeas);
    app.post('/ideaApp/v1/ideas', ideaController.createIdea);
    app.put('/ideaApp/v1/ideas/:id', ideaController.updateIdea);
    app.delete('/ideaApp/v1/ideas/:id', ideaController.deleteIdea);
}