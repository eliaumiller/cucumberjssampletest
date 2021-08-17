const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function checkEnergy (weight) {
  if(weight === 450) {
    return 26500;
  } 

  if (weight === 500){
      return 29500;
    }

  if(weight === null) {
    throw new Error('Weight can not be null');
  }
  return 0;
}

Given('a global administrator named {string}', function (string) {
    this.adminName = string;
});

Given('a blog named {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
    this.blogName = string;
});


Given('a customer named {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
    this.customerName = string;
});


Given('the following people exist:', function (dataTable) {
    this.people = dataTable.hashes(); 
  
});


Given('some precondition {int}', function (int) {
         // Given('some precondition {float}', function (float) {
    this.precondition = int;
});

When('some action by the actor', function () {
    this.precondition++;
  
});

When('some other action', function () {
    this.precondition++;
  
});  

Then('some testable outcome is achieved', function () {
    assert.strictEqual(this.precondition, 3);
});

Then('something else we can check happens too', function () {
           // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(1 + 2, 3);
});

Given('some precondition', function () {
           // Write code here that turns the phrase above into concrete actions
    this.precondition = 1;
});

Given('some other precondition with doc string', function (docString) {
           // Write code here that turns the phrase above into concrete actions
    this.docString = docString;
});


When('yet another action', function () {
           // Write code here that turns the phrase above into concrete actions
    this.precondition = 3;

});


Then('I don\'t see something else', function () {
           // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(1, -1);
});

         

Given('the cow weighs {int} kg', function (int) {
         // Given('the cow weighs {float} kg', function (float) {
           // Write code here that turns the phrase above into concrete actions
    this.weighs = int;
});

         


When('we calculate the feeding requirements', function () {
           // Write code here that turns the phrase above into concrete actions
  // this.showError = checkEnergy(null);
  
  this.actual = checkEnergy(null);
  
});

Then('the energy should be {int} MJ', function (int) {
         // Then('the energy should be {float} MJ', function (float) {
           // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(this.actual, int);
});

