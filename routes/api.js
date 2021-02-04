'use strict';
const mongoose = require("mongoose");
const url = process.env.DB;
const Thread = require('../Models/Thread')
const Reply = require('../Models/Reply')

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("connected to MongoDB");
	})
	.catch((error) => {
		console.log("error connecting to MongoDB:", error.message);
    });

module.exports = function (app) {
  
  app.route('/api/threads/:board')
      .post(async (req, res) => {
        let {board, text, delete_password} = req.body;

        let thread = new Thread({
          text: text,
          created_on: new Date(),
          bumped_on: new Date(),
          reported: false,
          delete_password: delete_password,
          replies: []
        })

        let newThread = await thread.save((err, data) => {
          if(err) {
            console.log(err)
          }
          res.json(data)
        })

        console.log(newThread)
      })

      .get(async (req, res) => {
        
      })

      .delete(async (req, res) => {
        
      })

      .put(async (req, res) => {

      })


    
  app.route('/api/replies/:board');

};
