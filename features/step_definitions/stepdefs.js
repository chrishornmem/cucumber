const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function transfer(sender, receiver) {
  if (sender.balance > 0) {
    sender.balance--;
    receiver.balance++;
  }
}

Given('{string} balance is {int}', function (id, balance) {
  this[id] = {
    balance,
  };
});

When('{string} Identifies with {string}', function (sender, receiver) {
  // Write code here that turns the phrase above into concrete actions
  transfer(this[sender], this[receiver]);
});

Then("{string} new balance is {int} and {string} new balance is {int}", function (receiver_id, receiver_balance, sender_id, sender_balance) {
  // Write code here that turns the phrase above into concrete actions

  // console.log("this:")
  // console.log(this)

  const sender = this[sender_id];
  const receiver = this[receiver_id];

  assert.strictEqual(sender.balance, sender_balance);
  assert.strictEqual(receiver.balance, receiver_balance);  
});

