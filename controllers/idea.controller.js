const ideas = require('../models/idea.model')

let idCount= 1;
/* create new idea */
exports.createIdea = (req,res) => {
    // read the req body
    const idea = req.body;
    // need to genarate new idea id
    idea.id = ++idCount;
    // save it in the list of existing ideas
    ideas[idCount] = idea;
    // return the response
    res.status(201).send(ideas[idCount]);
}

/* search all idea */
exports.fetchAllIdeas = (req,res) => {
    res.status(200).send(ideas)
}

// 127.0.0.1:8080/ideaApp/v1/ideas/3
/* update idea */
exports.updateIdea = (req,res) => {
    // need to read id passed in the path
    const ideaId = req.params.id;
    // if idea is present then update else error
    if(ideas[ideaId]){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);
    }
    else{
        res.status(400).send({message: 'idea id is not correct'})
    }
}

/* delete idea */
exports.deleteIdea = (req,res) => {
    // if present then delete else error
    const ideaId = req.params.id;
    if(ideas[ideaId]){
        delete ideas[ideaId];
        res.status(200).send({message: 'successfully deleted'})
    }
    else{
        res.status(400).send({message: 'wrong idea id'})
    }
}