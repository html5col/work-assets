//./models/Post.js
// grab the things we need
"use strict";
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      User = require('../models/User'),
      moment = require('moment');

// create a schema
//The allowed SchemaTypes are:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
var projectSchema = new Schema({
          author: { type: Schema.Types.ObjectId, ref: 'User' },
          projectName: { type: String, required: true},//,match: /[0-9a-zA-Z_-]/
          brief: {type: String, default: ''},
          detail: { type: String },
          category: {type: [String], required: true},

          whitePaperAddress: String,
          totalSupply: String,
          inflation: {type: String},
          downloadingAddress: {type: String},
          reviews: { type: String },
          reputation: { type: String },
}, {timestamps: true});


projectSchema.methods.time = time=> {
    return moment(time).format('L');
};

projectSchema.methods.processProject = project =>{
    return {
        _id:project._id,
        author: project.author,
        projectName: project.projectName,   
        brief: project.brief,   
        detail: project.detail,
        category: project.category,              
        
        created_at: project.time(project.created_at),
        updated_at: project.time(project.updated_at),     
    };
};




// make this available to our users in our Node applications
module.exports = mongoose.model('project', projectSchema);