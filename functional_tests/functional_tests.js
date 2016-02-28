/*
* Does functional/integration testing for the backlogr
*/
'use strict';

var test_config = {
  host: "http://localhost:3000"
}

console.log("START TESTING:", test_config.host);

describe('first integration test', function(){
  var client;
  var paceUrl = process.env.PACE_URL || 'http://localhost:3000/';
  var originalTimeout;

  beforeEach(function(){
    var webdriverio = require('webdriverio');
    var options = {
      desiredCapabilities: {
          browserName: 'Firefox'
      }
    };

    client = webdriverio.remote(opions);
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('works fine', function(done){
      client.init()
          .url(paceUrl)
          .isVisible('h1')
          .then(function(isVisible){
            expect (isVisible).toBe(true);
            done();
          })
          .end();
  });
});
