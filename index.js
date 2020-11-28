const express = require('express');
const app = express();
const port = 8080;

//1st aguement: path, 2nd arguement: function
app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log('listening on http://localhost:${8080}');
});