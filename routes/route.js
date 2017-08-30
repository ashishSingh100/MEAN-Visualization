var express = require('express');
var bodyParser = require('body-parser');
var mongoose        = require('mongoose');
var data            = require('../models/data');

// Opens App Routes

var dataRouter = express.Router();
dataRouter.use(bodyParser.json());

dataRouter.route('/')
.get(function(req, res){

        // Uses Mongoose schema to run the search (empty conditions)
      data.find({},function(err, data) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(data); // return all todos in JSON format
        });
    })

    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new users in the db
.post(function(req, res){

        // Creates a new User based on the Mongoose schema and the post bo.dy
        data.create({
            x :req.body.x,
            y:req.body.y,
            done : false
        }, function(err, todos) {
            if (err)
                res.send(err);
});
            // get and return all the todos after you create another
          
            // If no errors are found, it responds with a JSON of the new user
    });



module.exports=dataRouter;