var express = require('express');
var router = express.Router();

var Project = require('../models/project');

/* Get a single project instance */
router.get('/:id', function(req, res, next){
  Project.findOne({'_id': req.params.id}, function(err, project){
    if (err) {
      res.status(500).json({"status": 500});
    }
    else {
      res.status(200).json({"status": 200, "success_detail": project});
    }
  });
});


/* GET project listing.*/
router.get('/', function(req, res, next) {
  Project.find({}, function(err, projects){
    if (err) {
      res.status(500).json({"Status": 500});
    }
    else {
      res.status(200).json(projects);
    }
  });
});



/* Create a project */
router.post('/', function(req, res, next) {

  var newProject = Project({
    name: req.body.name,
    description: req.body.description
  });

  newProject.save(function(err){
    if (err) {
      console.log(err);
      res.status(500).json({"status": 500,
                            "error_message": "An error occurred. Please try again!",
                            "error_detail": err});
    }
    else {
      res.status(201).json({"status": 201,
                            "success_message": "Project has been created successfully",
                            "success_detail": newProject});
    }
  });

  console.log("Project created with: ", newProject.name, newProject.description);

  console.log("Project Post Request with request body ", req.body)


})

module.exports = router;
