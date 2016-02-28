'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
  * Projects Schema
  */

const ProjectSchema = new Schema({
  name: { type : String, default : ''},
  //user reference missing
  description: { type: String, default : ''},
  //created_on : { type : Date, default : Date.now },
  //updated_on : { type : Date }
});

/*
ProjectSchema.pre('save', function(next){
  now = new Date();
  this.updated_on = now;
  if ( !this.created_on ) {
    this.created_on = now;
  }
  next();
});
*/

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
