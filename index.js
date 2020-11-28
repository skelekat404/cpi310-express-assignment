//this is basically importing express ******
const express = require('express');
const express_handle = require('express-handlebars');

const app = express();
app.engine('handlebars', express_handle());
app.set('view engine', 'handlebars');
//*********************************************

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

app.listen(port, () => {
    //this is a debug to see in the console
    console.log('listening on http://localhost:${port}');
});