const express = require('express');
const app = express();

app.use(myMiddleWare);
app.use(express.json());

function myMiddleWare(req,res,next){
    console.log('inside the middleware')
    next(); // pass the control to the next step
}

// link routes to the server
require('./routes/idea.routes')(app);

const PORT = 8080
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})