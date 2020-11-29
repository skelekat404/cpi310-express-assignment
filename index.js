//this is basically importing express ******
//const express = require('express');
import express from 'express';
//const express_handle = require('express-handlebars');
import express_handle from 'express-handlebars';

import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
const dbPromise = open({
    filename: 'data.db',
    driver: sqlite3.Database,
});
//named import
//import sayHello from './otherfile';
//sayHello();
// const otherFile = require('./otherfile');
// otherFile.sayHello();

const app = express();

let messages = [];

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
        messages: messages
    });
});

app.post('/message', (req, res) => {
    messages.push(req.body.message);
    //console.log('request body', req.body);
    //res.render('greet', {name: req.body.name});
    res.redirect('/');
});

app.listen(port, () => {
    //this is a debug to see in the console
    console.log('listening on http://localhost:${port}');
});