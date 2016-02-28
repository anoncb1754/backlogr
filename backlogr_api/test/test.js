
var chai = require('chai');
var assert = chai.assert
var chaiHttp = require('chai-http');
var expect = chai.expect;
var server = require('../app.js');
var should = chai.should();

var Project = require('../models/project');

chai.use(chaiHttp);

console.log("SERVER", server);

describe('Projects', function() {
  it('should list all projects on /projects GET', function(done) {
    chai.request(server)
      .get('/projects')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        //res.body.should.be.a('array');
        res.body[0].should.have.property('name');
        res.body[0].should.have.property('description');
        res.body[0].should.have.property('_id');
        done(err);
      });
  });

  it('should list a SINGLE project on /project/<id>', function(done){
    var newProject = new Project({
      name: "New Project Name",
      description: "New Project Description"
    });

    newProject.save(function(err, data){
      chai.request(server)
        .get('/projects/'+data.id)
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('success_detail');
          assert.equal(res.body['success_detail']['name'], "New Project Name");
          assert.equal(res.body['success_detail']['description'], "New Project Description");
          done(err);
        });
    });



  });
  it('should add a SINGLE project on /projects POST', function(done){
    chai.request(server)
      .post('/projects')
      .send({"name": "This is a test title", "description": "This is a description"})
      .end(function(err, res){
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('success_message');
        res.body.should.have.property('success_detail');
        assert.equal(res.body['status'], 201)
        assert.typeOf(res.body['success_message'], 'string');
        assert.typeOf(res.body['success_detail'], 'object');
        done();
      })
  });
  it('should update a SINGLE project on /project/<id> PUT');
  it('should delete a single project on /project/<id> DELETE');
});


describe('Backlog', function() {
  it('should list all backlogs for the current user on /backlogs GET');
  it('should create a backlog for the current user on /backlog POST');
  it('should list all items of the backlog for the current user on /backlog/<id> GET');
});

describe('User Story', function() {
  console.log('User Story Test');
});




describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

var num = 1;

function get_num () {
  return 1;
}

describe("CHAI Setup TEST", function(){
  it('should be hello world', function () {
    assert.equal("hello world", "hello world");
  });
  it('1 is expected to be equal to 1', function() {
    expect(num).to.equal(1);
    expect(get_num()).to.equal(1);
    expect(get_num()).to.be.a('number');
  });
  it('num should be 1', function () {
    num.should.be.a('number');
    num.should.be.equal(1);
  });
});
