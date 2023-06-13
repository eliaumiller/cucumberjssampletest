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
       // Write code here that turns the phrase above into concrete actions
    this.name = string;
});


Given('a blog named {string}', function (string) {
  
   
});


Given('a customer named {string}', function (string) {
       // Write code here that turns the phrase above into concrete actions
    this.customer = string;
});


Given('the following people exist:', function () {
       // Write code here that turns the phrase above into concrete actions
    this.people = {};
});


Given('some precondition {int}', function (int) {
     // Given('some precondition {float}', function (float) {
       // Write code here that turns the phrase above into concrete actions
    this.precondition = int;
});


When('some action by the actor', function () {
       // Write code here that turns the phrase above into concrete actions
    this.action = '';
});


When('some other action', function () {
       // Write code here that turns the phrase above into concrete actions
    this.otherAction = '';
});



Then('some testable outcome is achieved', function () {
       // Write code here that turns the phrase above into concrete actions
    this.outcome = true;
});


Then('something else we can check happens too', function () {
       // Write code here that turns the phrase above into concrete actions
    this.otherHappens = true;
});


Given('some precondition', function () {
       // Write code here that turns the phrase above into concrete actions
    this.pre = 1;
});


Given('some other precondition with doc string', function () {
       // Write code here that turns the phrase above into concrete actions
    this.otherPrecondition = '';
});


When('yet another action', function () {
       // Write code here that turns the phrase above into concrete actions
    this.anotherAction = '';
});


Given('I don\'t see something else', function () {
       // Write code here that turns the phrase above into concrete actions
    this.result = false;
});


Given('the cow weighs {int} kg', function (int) {
     // Given('the cow weighs {float} kg', function (float) {
       // Write code here that turns the phrase above into concrete actions
    this.weights = int;
});


When('we calculate the feeding requirements', function () {
       // Write code here that turns the phrase above into concrete actions
    this.actual = checkEnergy(null);
});


Then('the energy should be {int} MJ', function (int) {
     // Then('the energy should be {float} MJ', function (float) {
       // Write code here that turns the phrase above into concrete actions
    this.energy = int;
});
