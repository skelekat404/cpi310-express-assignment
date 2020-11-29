//this is basically importing express ******
const express = require('express');
const express_handle = require('express-handlebars');

const app = express();
app.engine('handlebars', express_handle());
app.set('view engine', 'handlebars');
//get, post, put, delete
//*********************************************

//use is for registering middleware: functions that run on every request before handler function runs
app.use(express.urlencoded());

//variable storing the port
const port = 8080;

//1st aguement: path, 2nd arguement: function
app.get("/", (req, res) => {
    //req = request, res = response
    //response sending hello world 
    //res.send("<h1>hello world!</h1>");
    res.render("home", {
        name: "morgan"
    });
});

app.post('/greet', (req, res) => {
    //console.log('request body', req.body);
    res.render('greet', {name: req.body.name});
});

app.listen(port, () => {
    //this is a debug to see in the console
    console.log('listening on http://localhost:${port}');
});